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
    'menu':false,
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
            type: 'select',
            'search': true,
            dicUrl: '/push/templateconf/list/{{key}}',
            dicData: 'channelConfId',
            prop: 'channelConfId'
        },
        {
            label: '渠道类型',
            prop: 'channelType'
        },
        {
            label: '用户ID',
            prop: 'userId'
        },
        {
            label: '接收者',
            'search': true,
            prop: 'receiveId'
        },
        {
            label: '模版名称',
            type: 'select',
            'search': true,
            dicUrl: '/push/templateconf/list/{{key}}',
            dicData: 'templateId',
            prop: 'templateId'
        },
        {
            label: '消息内容',
            prop: 'content'
        },
        {
            label: '推送状态',
            prop: 'status'
        },
        {
            label: '推送时间',
            prop: 'sendTime',
            type: "date",
            format: "yyyy-MM-dd hh:mm:ss"
        },
        {
            label: '推送返回结果',
            prop: 'sendResult'
        },
        {
            label: '备注',
            prop: 'memo'
        },
    ]
}
