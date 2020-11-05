/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */
const DIC = {
    statusFlag: [{
        label: '停止',
        value: 0
    }, {
        label: '启用',
        value: 1
    }]
}
export const tableOption = {
    'border': true,
    'index': false,
    'stripe': true,
    'menuAlign': "center",
    'align': "center",
    'editBtn': false,
    'delBtn': false,
    'addBtn': false,
    'dic': [],
    'column': [
        {
            label: '编号',
            prop: 'id',
            addVisdiplay: false,
            editDisabled: true
        },
        {
            label: '模版名称',
            prop: 'name',
            'search': true,
            rules: [{
                required: true,
                message: '请输入模版名称',
                trigger: 'blur'
            }]
        },
        {
            label: '标题',
            prop: 'title',
            rules: [{
                required: true,
                message: '请输入标题',
                trigger: 'blur'
            }]
        },

        {
            label: '模版内容',
            prop: 'content',
            type: 'textarea'
        },
        {
            label: '备注',
            prop: 'memo'
        },
      {
        label: '创建时间',
        prop: 'gmtCreate',
        type: "date",
        format: "yyyy-MM-dd hh:mm:ss"
      },
        {
            label: '状态',
            prop: 'status',
            type:'select',
            dicData:DIC.statusFlag,
            rules: [{
                required: true,
                message: '请输入状态',
                trigger: 'blur'
            }]
        },
    ]
}
