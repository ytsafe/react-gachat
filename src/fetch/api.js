import httpFetch from './index'


// 注册
export const postRegister = (params) => {
    return httpFetch('/user/register', params, 'post')
}
// 登录
export const postLogin = (params) => {
    return httpFetch('/user/login', params, 'post')
}

// 获取用户信息
export const getUserInfo = (params) => {
    return httpFetch('/user/info', params)
}

// 获取通讯录
export const getFriend = (params)=> {
    return httpFetch('/user/friend', params)
}

// 获取好友请求列表
export const getFriendRequestList = (params) => {
    return httpFetch('/user/friendList', params)
}

// 获取聊天记录

export const postChatRec = (params)=> {
    return httpFetch('/user/chatRec', params, 'post')
}

// 查询用户

export const getDetInfo = (params)=> {
    return httpFetch('/user/detInfo', params )
}

// 发送验证
export const addFried =  (params)=> {
    return httpFetch('/user/addFried', params , 'post')
}

// 通过验证
export const byVerify =  (params)=> {
    return httpFetch('/user/byVerify', params, 'post' )
}

// 读取信息

export const readMsg =  (params)=> {
    return httpFetch('/user/readMsg', params)
}