import {
  Fragment,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
import { create } from 'zustand'
import produce from 'immer'
import { IContract } from './contract.type'
import axios from 'axios'
import { useWalletClient } from 'wagmi'
import { CreateContractDto } from 'type/contract.type'
import configs from 'configs'

type MetaProposalMethods = {
  upsetContracts: (metaProposals: IContract[]) => void
  getStore: () => { [proposalId: string]: IContract }
  setLoading: (loading: boolean) => void
}
type ContractStore = {
  store: { [proposalId: string]: IContract }
  loading: boolean
} & MetaProposalMethods

export const useContractsStore = create<ContractStore>()((set, get) => ({
  store: {},
  loading: true,
  upsetContracts: (contracts) => {
    set(
      produce<ContractStore>(({ store }) => {
        const bulk: { [id: string]: IContract } = {}
        for (const data of contracts) bulk[data._id] = data
        Object.assign(store, bulk)
      }),
    )
  },
  getStore: () => {
    return get().store
  },
  setLoading: (loading: boolean) => {
    set(
      produce<ContractStore>((state) => {
        state.loading = loading
      }),
    )
  },
}))

export const apiContracts = axios.create({
  baseURL: configs.baseUrl.apiContracts,
})

const ContractsProvider = ({ children }: PropsWithChildren) => {
  const upset = useContractsStore((state) => state.upsetContracts)
  const setLoading = useContractsStore((state) => state.setLoading)
  const { data } = useWalletClient()

  useEffect(() => {
    apiContracts.defaults.headers['wallet'] = data?.account.address || ''
  }, [data])

  const fetchContracts = useCallback(async () => {
    try {
      setLoading(true)
      const { data: contractRes } = await apiContracts.get<{
        data: IContract[]
        total: number
      }>('/contract?owner=' + data?.account.address)
      upset(contractRes.data)
    } catch (error) {
      console.error('error', error)
    } finally {
      setLoading(false)
    }
  }, [data, upset, setLoading])

  useEffect(() => {
    fetchContracts()
  }, [fetchContracts])

  return (
    <Fragment>
      {data?.account.address ? children : <div>Login first</div>}
    </Fragment>
  )
}
export default ContractsProvider

export const useContractData = (proposalId: string) => {
  const contracts = useContractsStore((state) => state.store)
  return contracts[proposalId]
}

export const useContracts = () => {
  const contracts = useContractsStore((state) => state.store)
  return contracts
}

export const useContractMutation = () => {
  const upset = useContractsStore((state) => state.upsetContracts)
  const wallet = useWalletClient()

  const onFetch = useCallback(
    async (contractId: string) => {
      const res = await apiContracts.get<any>(`/contract/${contractId}`)
      upset([res.data])
    },
    [upset],
  )

  const onCreateContract = useCallback(
    async (payload: CreateContractDto) => {
      const res = await apiContracts.post<any>(`/contract`, payload)
      await onFetch(res.data._id)
      return res
    },
    [onFetch],
  )

  return useMemo(
    () => ({ onFetch, onCreateContract, from: wallet.data?.account.address }),
    [onCreateContract, onFetch, wallet.data?.account.address],
  )
}
