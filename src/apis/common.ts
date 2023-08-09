import requests from '@/utils/http'

export default {
    getUserInfo(token: string) {
        return requests('/user', {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    },
    changeStatus(data: object) {
        return requests({
            url: '/message/isReads',
            method: 'post',
            data,
        })
    },
    getMsgType(params: object) {
        return requests({
            url: '/message/messageType',
            method: 'get',
            params,
        })
    },
    deleteMsg(data: object) {
        return requests({
            url: '/message/delete',
            method: 'post',
            data,
        })
    },
}
