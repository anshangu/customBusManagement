
export const tableOption = {
    'border': true,
    'index': true,
    'stripe': true,
    'menuAlign': 'center',
    'align': 'center',
    'addBtn': false,
    'editBtn': false,
    'delBtn': false,
    'column': [{
        label: '表名称',
        prop: 'table_name',
        align: 'center',
    }, {
        label: '表注释',
        prop: 'table_comment',
        align: 'center'
    }, {
        label: '索引',
        prop: 'engine',
        align: 'center'
    }, {
        type: 'datetime',
        format: 'yyyy-MM-dd hh:mm:ss',
        label: '创建时间',
        prop: 'create_time',
        align: 'center'
    }]
};
export const dbformOption = {
    submitText: '获取db信息',
    width: '80%',
    column: [
        {
            label: '地址',
            prop: 'url',
            valueDefault: 'jdbc:mysql://10.0.0.106:3306/bm?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false',
            rules: [{
                required: true,
                message: '不可空',
                trigger: 'blur'
            }]
        }, {
            label: '用户名',
            prop: 'userName',
            valueDefault: 'bm',
            placeholder: '不可空，用户名',
            rules: [{
                required: true,
                message: '不可空',
                trigger: 'blur'
            }]
        }, {
            label: '密码',
            prop: 'passWord',
            valueDefault: 'Citytsm0',
            placeholder: '不为空，密码',
            rules: [{
                required: true,
                message: '不可空',
                trigger: 'blur'
            }]
        }

    ]
};
export const formOption = {
    submitText: '生成',
    column: [
        {
            label: '表名称',
            prop: 'tableName',
            disabled: true
        }, {
            label: '包名',
            prop: 'packageName',
            placeholder: '可为空',
            rules: [{
                required: true,
                message: '不可空',
                trigger: 'blur'
            }]

        }, {
            label: '作者',
            prop: 'author',
            placeholder: '可为空',
            rules: [{
                required: true,
                message: '不可空',
                trigger: 'blur'
            }]
        }, {
            label: '模块',
            prop: 'moduleName',
            placeholder: '可为空'
        }, {
            label: '表前缀',
            prop: 'tablePrefix',
            placeholder: '可为空'
        }, {
            label: '注释',
            prop: 'comments',
            placeholder: '可为空，加载表备注',

        }
    ]
};
