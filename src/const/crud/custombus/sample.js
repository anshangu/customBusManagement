export const tableOption = {
  'border': true,
  'index': true,
  'stripe': true,
  'menuAlign': "center",
  'align': "center",
  'editBtn': true,
  'delBtn': false,
  'addBtn': false,
  'height': 600,
  'dic': [],
  'column': [
	  {
      label: '出发站点名称',
      prop: 'start_name',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '详细地址',
      prop: 'start_des',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '始发地经度',
      prop: 'start_lon',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '始发地维度',
      prop: 'start_lat',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '到达站点名称',
      prop: 'end_name',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '详细地址',
      prop: 'end_des',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '到达站点经度',
      prop: 'end_lon',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '到达站点纬度',
      prop: 'end_lat',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '出发时间最早',
      prop: 'go_time_start',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '出发时间最晚',
      prop: 'go_time_end',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '回来时间最早',
      prop: 'back_time_start',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '回来时间最晚',
      prop: 'back_time_end',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '范围（米）',
      prop: 'dist_range',
      align: 'center',
      editVisdiplay: false
    },
	  {
      label: '状态（0未开通1.已开通2.暂不开通）',
      prop: 'state',
      align: 'left',
      hide: true
    }
  ]
}
