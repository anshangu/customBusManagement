export const DIC = {
  state: [{
    label: "未处理",
    value: 0,
    color: 'green'
  }, {
    label: "已处理",
    value: 1,
    color: 'green'
  }, {
    label: "不处理",
    value: 2,
    color: 'red'
  }]
}
// 字典数据
export const tableOption = {
  'border': true,
  'index': true,
  'stripe': true,
  'menuAlign': "center",
  'align': "center",
  'editBtn': true,
  'delBtn': false,
  'viewBtn': false,
  'dicData': DIC,
  'menuWidth': 400,
  'addBtn': false,
  // 'dicData': DIC,
  'column': [
    {
      label: '始发站',
      prop: 'start_name',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '始发站详细地址',
      prop: 'start_des',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '始发站经度',
      prop: 'start_lon',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '始发站纬度',
      prop: 'start_lat',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '终点站',
      prop: 'end_name',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '终点站详细地址',
      prop: 'end_des',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '终点站经度',
      prop: 'end_lon',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '终点站纬度',
      prop: 'end_lat',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '手机号',
      prop: 'mobile',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '创建时间',
      prop: 'created_at',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '使用天数',
      prop: 'days',
      align: 'center',
      editVisdiplay: false
    },
    {
      label: '当前状态',
      prop: 'complete_state',
      align: 'center',
      type: 'select',
      valueDefault: 1,
      dicData: 'state'
    }
  ]
}
