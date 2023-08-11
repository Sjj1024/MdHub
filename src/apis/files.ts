import requests from '@/utils/http'

export default {
    searchShare(
        keyWord: string = 'FileHub',
        lable: string = '+label:share',
        state: string = '+state:closed',
        author: string = '',
        pageSize: number = 35,
        pageNum: number = 1
    ) {
        // 在Sjj1024/DataHub中搜索关闭的和分享的内容，并且是标题里面包含关键字的
        return requests(
            `/search/issues?q=${
                keyWord + lable + state + author
            }+in:title+repo:Sjj1024/DataHub&per_page=${pageSize}&page=${pageNum}`,
            {
                method: 'get',
            }
        )
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
