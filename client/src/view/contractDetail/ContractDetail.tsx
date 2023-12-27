import { useContractData } from 'providers/contract.provider'
import { useParams } from 'react-router-dom'

function ContractDetail() {
  const id = useParams().id

  const data = useContractData(id ?? '')

  console.log({ data })

  return <div></div>
}

export default ContractDetail
