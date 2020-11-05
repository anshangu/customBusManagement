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
            label: '渠道名称',
            'search': true,
            prop: 'channelName',
            rules: [{
                required: true,
                message: '渠道名称',
                trigger: 'blur'
            }]
        },
        {
            label: '渠道id',
            prop: 'channelId',
            rules: [{
                required: true,
                message: '请输入渠道id',
                trigger: 'blur'
            }]
        },
        {
            label: '密钥',
            prop: 'channelSecret',
            hide: true,
            rules: [{
                required: true,
                message: '请输入密钥',
                trigger: 'blur'
            }]
        },
        {
            label: '渠道类型',
            prop: 'channelType',
            rules: [{
                required: true,
                message: '请输入渠道类型',
                trigger: 'blur'
            }]
        },
      {
        label: '创建时间',
        prop: 'gmtCreate',
        type: "date",
        format: "yyyy-MM-dd hh:mm:ss"
      },
        {
            label: '备注',
            prop: 'memo'
        },
    ]
}
