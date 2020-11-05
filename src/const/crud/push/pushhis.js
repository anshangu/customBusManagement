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
            label: '序号',
            prop: 'id'
        },
        {
            label: '用户ID',
            prop: 'userIds'
        },
        {
            label: '模版名称',
            type: 'select',
            dicUrl: '/push/templateconf/list/{{key}}',
            dicData: 'templateId',
            'search': true,
            prop: 'templateId'
        },
        {
            label: '备注',
            prop: 'memo'
        },
        {
            label: '业务参数',
            prop: 'params'
        },
        {
            label: '推送渠道',
            'search': true,
            prop: 'channels'
        },
      {
        label: '创建时间',
        prop: 'gmtCreate',
        type: "date",
        format: "yyyy-MM-dd hh:mm:ss"
      },
    ]
}
