export const tableOption = {
  'border': true,
  'index': true,
  'stripe': true,
  'menuAlign': "center",
  'align': "center",
  'editBtn': true,
  'delBtn': false,
  'addBtn': true,
  'height': 700,
  'dic': [],
  'column': [
	  {
      label: 'id',
      prop: 'id',
      align: 'center',
      hide: true,
      addDisabled: true,
      addVisdiplay: false,
      editDisabled: true,
      editVisdiplay: false
    },
	  {
      label: '出发日期',
      prop: 'cust_bus_date',
      align: 'center',
      placeholder: '请输入日期 示例 2018-10-01',
      span: 24,
      rules: [{
        required: true,
        message: "输入出发日期 示例 2018-10-01",
        trigger: "blur"
      }]
    },
	  {
      label: '发行数量',
      prop: 'publish',
      align: 'center',
      span: 24,
      rules: [{
        required: true,
        message: "请输入发行数量",
        trigger: "blur"
      }]
    },
	  {
      label: '库存数量',
      prop: 'stock',
      align: 'center',
      addDisabled: true,
      editDisabled: true,
      addVisdiplay: false,
      editVisdiplay: false
    }
  ]
}
