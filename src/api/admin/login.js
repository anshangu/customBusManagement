

import request from '@/router/axios';
import {appId} from "@/config/env";
export const getUserInfo = () => {
    return request({
        url: '/admin/user/info',
        method: 'get',
        params: {'appId':appId}
    });
};
export const logout = (accesstoken, refreshToken) => {
    return request({
        url: '/admin/auth/logout',
        method: 'post',
        params: { accesstoken, refreshToken }
    });
};
