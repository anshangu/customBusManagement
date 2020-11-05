

import request from '@/router/axios';
export function GetUserMenu() {
    return request({
        url: '/admin/menu/userMenu',
        method: 'get'
    });
}

