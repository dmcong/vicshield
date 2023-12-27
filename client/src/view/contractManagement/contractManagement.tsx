import Table, { ColumnsType } from 'antd/lib/table'
import { STATUS } from '../../type/contract.type'
import { Col, Divider, Input, Row, Space, Tag, Typography } from 'antd'
import { COLORS } from '../../themes/colors'
import React from 'react'
import { Styles } from '../../type/styles.type'
import { useContracts } from 'providers/contract.provider'
import { IContract } from 'providers/contract.type'
import { shortenAddress } from 'utils'
import { Link } from 'react-router-dom'

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
const columns: ColumnsType<IContract> = [
  {
    title: 'Contract ID',
    dataIndex: '_id',
    render: (text) => <a>{shortenAddress(text, 5)}</a>,
  },
  {
    title: 'Contract Name',
    dataIndex: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Signatories',
    dataIndex: 'signatories',
    render: (data) => (
      <ul>
        {data.map((e: any) => (
          <li key={e.wallet}>{shortenAddress(e.wallet, 8)}</li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
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
        <Link to={`/contract/${record._id}`}>View</Link>
      </Space>
    ),
  },
]

const ContractManagement = () => {
  // const [data, setData] = useState<DataType[]>(dataSource)
  const contractData = useContracts()

  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    // const textString = e.currentTarget.value.toLowerCase()
    // if (textString !== '') {
    //   const filterSearchString = dataSource.filter((cur) =>
    //     cur.contractName.toLowerCase().includes(textString),
    //   )
    //   setData(filterSearchString)
    // } else {
    //   setData(dataSource)
    // }
    window.location.reload()
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
          dataSource={Object.values(contractData)}
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
