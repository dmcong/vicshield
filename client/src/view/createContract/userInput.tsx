import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'

const UserInput = ({ onOk }: { onOk: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [val, setVal] = useState('')

  const showModal = () => {
    setIsOpen(true)
  }

  const handleOk = () => {
    setIsOpen(false)
    onOk(val)
    setVal('')
  }

  const handleCancel = () => {
    setIsOpen(false)
    setVal('')
  }

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
      </Modal>
    </>
  )
}

export default UserInput
