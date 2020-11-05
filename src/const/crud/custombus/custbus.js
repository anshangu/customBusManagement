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
  ],
  VAILD: [
    {
      label: '无折扣',
      value: 1,
      color: 'green'
    },
    {
      label: '输入折扣（如8折输入80）',
      value: 2,
      color: 'red'
    },
    {
      label: '输入折后金额（元）',
      value: 3,
      color: 'blue'
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
  delBtn: true,
  viewBtn: false,
  menuWidth: 400,
  addBtn: false,
  dicData: DIC,
  column: [
    // {
    //   visdiplay: false,
    //   disabled: true,
    //   label: 'id',
    //   prop: 'id',
    //   align: 'center',
    //   hide: true
    // },
    {
      label: '线路名称',
      prop: 'name',
      align: 'center',
      rules: [
        {
          required: true,
          message: '请输入线路名称(小于15字)',
          trigger: 'blur'
        },
        { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
      ]
    },
    {
      label: '线路编号',
      prop: 'line_code',
      align: 'center',
      rules: [
        {
          required: true,
          message: '请输入线路编号',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '始发站',
      prop: 'start_station',
      align: 'center',
      rules: [
        {
          required: true,
          message: '请输入始发站',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '终点站',
      prop: 'end_station',
      align: 'center',
      rules: [
        {
          required: true,
          message: '请输入终点站',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '出发时间',
      prop: 'start_time',
      align: 'center',
      rules: [
        {
          required: true,
          message: '请选择出发时间',
          trigger: 'blur'
        }
      ]
      // type: 'time'
    },
    {
      label: '到站时间',
      prop: 'end_time',
      align: 'center',
      rules: [
        {
          required: true,
          message: '请选择到站时间',
          trigger: 'blur'
        }
      ]
      // type: 'time'
    },
    {
      label: '票价(元)',
      prop: 'amt',
      align: 'center',
      addVisdiplay: false,
      editVisdiplay: false
    },
    {
      label: '方向',
      prop: 'towards',
      align: 'center',
      type: 'select',
      valueDefault: '上行',
      dicData: 'direction',
      rules: [
        {
          required: true,
          message: '请输入方向',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '折扣类型',
      prop: 'amt_type',
      align: 'center',
      hide: true,
      type: 'select',
      valueDefault: 1,
      dicData: 'VAILD',
      rules: [
        {
          required: true,
          message: '请输入折扣类型',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '折扣',
      prop: 'discount',
      align: 'center',
      hide: true
      // change: function (row) {
      //   // console.log(row)
      //   this.$message({
      //     showClose: true,
      //     duration: 3000,
      //     message: '当折扣类型为1时折扣不填写；当折扣类型为2时，折扣填写0-100数字表示折扣，如80表示8折；类型为3时，填写折扣金额单位为分，如50',
      //     type: 'warning'
      //   })
      // }
    },
    {
      label: '原始票价',
      prop: 'original_amt',
      placeholder: '单位为元',
      align: 'center',
      hide: true,
      // type: 'number',
      precision: 2,
      rules: [
        {
          required: true,
          message: '请输入票价',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '排序',
      prop: 'sort',
      placeholder: '数值',
      align: 'center',
      hide: true,
      //type: 'number',
      //precision: 2,
      rules: [
        {
          required: false,
          message: '请输入排序值',
          trigger: 'blur'
        }
      ]
    }
  ]
}
