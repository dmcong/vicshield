import Table, { ColumnsType } from 'antd/lib/table'
import { DataType, STATUS } from '../../type/contract.type'
import {
  Col,
  Divider,
  Input,
  Popconfirm,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd'
import { COLORS } from '../../themes/colors'
import React, { useState } from 'react'
import { Styles } from '../../type/styles.type'

const getColorStatus = (status: STATUS) => {
  switch (status) {
    case STATUS.SUCCESS:
      return COLORS.SUCCESS
    case STATUS.CANCEL:
      return COLORS.CANCEL
    case STATUS.WAITING:
      return COLORS.WAITING
    default:
      return COLORS.EXPIRED
  }
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Contract ID',
    dataIndex: 'contractId',
    key: 'contractId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Contract Name',
    dataIndex: 'contractName',
    key: 'contractName',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Updated At',
    key: 'updatedAt',
    dataIndex: 'updatedAt',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status: number) => {
      const keyStatus = Object.keys(STATUS).filter((key) => isNaN(Number(key)))
      return (
        <span>
          <Tag color={getColorStatus(status)}>{keyStatus[status]}</Tag>
        </span>
      )
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>View</a>
        <Popconfirm title="Sure to delete?">
          <a>Delete</a>
        </Popconfirm>
      </Space>
    ),
  },
]

const dataSource: DataType[] = [
  {
    contractId: '1',
    contractName: 'Contract 1',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.SUCCESS,
  },
  {
    contractId: '2',
    contractName: 'Contract 2',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.CANCEL,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
  {
    contractId: '3',
    contractName: 'Contract 3',
    createdAt: '26-12-2023',
    updatedAt: '26-12-2023',
    status: STATUS.EXPIRE,
  },
]
const ContractManagement = () => {
  const [data, setData] = useState<DataType[]>(dataSource)
  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const textString = e.currentTarget.value.toLowerCase()
    if (textString !== '') {
      const filterSearchString = dataSource.filter((cur) =>
        cur.contractName.toLowerCase().includes(textString),
      )
      setData(filterSearchString)
    } else {
      setData(dataSource)
    }
  }

  return (
    <Col span={24}>
      <Col>
        <Typography.Title style={styles.title}>
          CONTRACT MANAGEMENT
        </Typography.Title>
      </Col>
      <Divider className={'borderNone'} />
      <Col
        span={24}
        style={{
          padding: 20,
          boxShadow: '5px 8px 24px 5px rgba(17, 24, 39, 1)',
        }}
      >
        <Row justify={'end'}>
          <div style={{ width: 400 }}>
            <Input placeholder="search" allowClear onChange={onSearch} />
          </div>
        </Row>
        <Divider type={'vertical'} />

        <Table
          columns={columns}
          pagination={{ position: ['bottomRight'], pageSize: 10 }}
          dataSource={data}
        />
      </Col>
    </Col>
  )
}

const styles: Styles = {
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
}

export default ContractManagement
