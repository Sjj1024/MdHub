import requests from '@/utils/http'

export default {
    getList(data: object) {
        return requests({
            url: '/message/list',
            method: 'post',
            data,
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
