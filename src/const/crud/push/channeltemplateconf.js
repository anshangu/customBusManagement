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
            labelWidth: 120,
            prop: 'id',
            addVisdiplay: false,
            editDisabled: true
        },

        {
            label: '模版名称',
            labelWidth: 120,
            type: 'select',
            prop: 'templateId',
            'search': true,
            dicUrl: '/push/templateconf/list/{{key}}',
            dicData: 'templateId'
        },
        {
            label: '渠道侧模版id',
            labelWidth: 120,
            prop: 'channelTemplateId'
        },
        {
            label: '渠道消息类型',
            labelWidth: 120,
            prop: 'channelMessageType'
        },
        {
            label: '渠道名称',
            type: 'select',
            labelWidth: 120,
            'search': true,
            prop: 'channelConfId',
            dicUrl: '/push/templateconf/list/{{key}}',
            dicData: 'channelConfId'
        },
        {
            label: '个性化模版',
            labelWidth: 120,
            prop: 'content',
            type: 'textarea'
        },
      {
        label: '标题',
        labelWidth: 120,
        prop: 'title'
      },
        {
            label: '备注',
            labelWidth: 120,
            prop: 'memo'
        },
      {
        label: '创建时间',
        prop: 'gmtCreate',
        type: "date",
        format: "yyyy-MM-dd hh:mm:ss"
      },

    ]
}
