export const DIC = {
  direction: [
    {
      label: '上行',
      value: 0,
      color: 'green'
    },
    {
      label: '下行',
      value: 1,
      color: 'green'
    }
  ]
}

export const tableOption = {
  border: true,
  index: true,
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  editBtn: false,
  delBtn: false,
  viewBtn: false,
  menuWidth: 100,
  addBtn: false,
  dicData: DIC,
  column: [
    {
      label: '交易日期',
      prop: 'trade_time',
      align: 'center',
      rules: []
    },
    {
      label: '手机号',
      prop: 'user_id',
      align: 'center',
      rules: []
    },
    {
      label: '订单编号',
      prop: 'order_no',
      align: 'center',
      rules: []
    },

    {
      label: '线路',
      prop: 'line',
      align: 'center',
      rules: []
    },
    {
      label: '班期',
      prop: 'cust_bus_time',
      align: 'center',
      rules: []
    },
    {
      label: '支付金额',
      prop: 'amount',
      align: 'center',
      rules: []
    },
    /* {
       label: '支付方式',
       prop: 'ticket_state',
       align: 'center',
       rules: []
       // type: 'time'
     },*/
    {
      label: '上下行',
      prop: 'towards',
      align: 'center',
      rules: []
    },
    {
      label: '状态',
      prop: 'ticket_state',
      align: 'center'
    }
  ]
}
