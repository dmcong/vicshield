import { Button, Input, Modal } from 'antd'
import { vicsheildAPI } from 'providers/contract.provider'
import { useCallback, useState } from 'react'
import { useDebounce } from 'react-use'

const UserInput = ({ onOk }: { onOk: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [val, setVal] = useState('')
  const [oneId, setOneId] = useState('')

  const showModal = () => {
    setIsOpen(true)
  }

  const handleOk = () => {
    setIsOpen(false)
    onOk(oneId || val)
    setVal('')
  }

  const handleCancel = () => {
    setIsOpen(false)
    setVal('')
  }

  const fetchOneId = useCallback(async () => {
    try {
      if (!val) throw new Error('Please enter name')
      const { data } = await vicsheildAPI.get<any>(`/oneid/${val}`)
      const elm = data.find((d: any) => d.name === val)
      setOneId(elm?.contractAddress || '')
    } catch (error) {
      setOneId('')
    }
  }, [val])

  useDebounce(fetchOneId, 300, [fetchOneId])

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add user
      </Button>
      <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input value={val} onChange={(e) => setVal(e.target.value)} />
        <span>{oneId}</span>
      </Modal>
    </>
  )
}

export default UserInput
