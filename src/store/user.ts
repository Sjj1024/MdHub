import { makeAutoObservable } from 'mobx'

class UserInfo {
    userName = '默认小神'
    loginName = ''
    avatarUrl = ''

    constructor() {
        makeAutoObservable(this)
    }

    setUserInfo = (info: any) => {
        this.userName = info.userName
        this.loginName = info.loginName
        this.avatarUrl = info.avatarUrl
    }
}

export default UserInfo
