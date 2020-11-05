
import request from '@/router/axios';

export function getDic(type) {
    return request({
        url: '/admin/dict/',
        method: 'get',
        data:type
    });
}

