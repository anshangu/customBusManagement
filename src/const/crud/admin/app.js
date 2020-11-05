const DIC = {
  delFlag: [{
    label: '有效',
    value: 0
  }, {
    label: '无效',
    value: 1
  }],
  skipFlag: [{
    label: '内嵌',
    value: 'layout'
  }, {
    label: 'iframe打开',
    value: 'iframe'
  }, {
    label: '外部跳转',
    value: 'skip'
  }],
  defaultPermitFlag: [{
    label: '未配置默认通过',
    value: 0
  }, {
    label: '未配置默认限制',
    value: 1
  }]
};
export const tableOption = {
  'border': true,
  'index': false,
  'stripe': true,
  'menuAlign': 'center',
  'align': 'center',
  'editBtn': false,
  'delBtn': false,
  'addBtn': false,
  'searchSize': 'small',
  'dic': [],
  'column': [
    {
      label: '编号',
      prop: 'id',
      addVisdiplay: false,
      editDisabled: true
    },
    {
      label: '应用名称',
      prop: 'name',
      'search': true,
      rules: [{
        required: true,
        message: '请输入应用名称',
        trigger: 'blur'
      }]
    },
    {
      label: '状态',
      prop: 'delFlag',
      type: 'select',
      dicData: DIC.delFlag
    },
    {
      label: '应用域名',
      prop: 'domain'
    },
    {
      label: '跳转类型',
      prop: 'skipType',
      type: 'select',
      dicData: DIC.skipFlag
    },
    {
      label: '路由id',
      prop: 'routeId',
      'search': true,
      rules: [{
        required: true,
        message: '请输入路由id',
        trigger: 'blur'
      }]
    },
    {
      label: '路由地址',
      prop: 'routePath',
      placeholder: '/xxx/**',
      rules: [{
        required: true,
        message: '请输入路由地址',
        trigger: 'blur'
      }]
    },
    {
      label: '转发地址',
      prop: 'routeUrl',
      placeholder: 'lb://xxx',
      rules: [{
        required: true,
        message: '请输入转发地址',
        trigger: 'blur'
      }]
    }, {
      label: '前缀数',
      type: 'number',
      prop: 'stripPrefix',
      rules: [{
        required: true,
        message: '请输入前缀数',
        trigger: 'blur'
      }]
    },
    {
      label: '权限控制',
      prop: 'defaultPermit',
      type: 'select',
      dicData: DIC.defaultPermitFlag
    }

    ]
};
