import {getFriend} from "../fetch/api";
import {postRegister, postLogin} from "../fetch/api";

const
    AUTH_SUCCESS        = 'AUTH_SUCCESS',
    LOAD_DATA           = 'LOAD_DATA',
    FRIEND_LIST         = 'FRIEND_LIST',
    ERROR_MSG           = 'ERROR_MSG',
    LOGOUT              = 'LOGOUT'

const initState = {
    isAuth:     false,
    msg:        '',
    nickName:   '',
    phone:      '',
    avatar:     '',
    _id:        '',
    chat_id:    ''
}

// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {...state,  isAuth: true, ...action.payload}
        case FRIEND_LIST:
            return {...state, ...action.payload}
        case AUTH_SUCCESS:
            return {...state, isAuth: true, msg: '', ...action.payload, redirectTo:'/'}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        case LOGOUT:
            return {...initState, redirectTo: '/login'}
        default:
            return state
    }
}
// 通讯录
function friendList(data) {
    return {type: FRIEND_LIST, payload: data}
}
// 错误信息
function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}
// 验证成功
function authSuccess(data) {
    return {type: AUTH_SUCCESS, payload: data}
}
// 写入数据
export function loadData(userInfo) {
    return {type: LOAD_DATA, payload: userInfo}
}



// 通讯录
export function getFriendList(phone) {
    return dispatch=> {
        getFriend(phone).then(res => {
            if (!res.code) {
                dispatch(friendList(res.data))
            }else {
                dispatch(errorMsg(res.msg))
            }
        })
    }
}


// 注册
export function register({nickName, phone, password}) {
    if (!nickName || !phone || !password) {
       return errorMsg('缺少必须参数')
    }
    return dispatch => {
        postRegister({
            nickName,
            phone,
            password
        }).then(res=> {
            if (!res.code) {
                dispatch(authSuccess(res.data))
            }else {
                dispatch(errorMsg(res.msg))
            }
        })
    }
}

// 登录
export function login({phone, password}) {
    if (!phone || !password) {
        return errorMsg('缺少必要参数')
    }
    return dispatch => {
        postLogin({phone, password}).then(res=> {
            if (!res.code) {
                dispatch(authSuccess(res.data))
            }else {
                dispatch(errorMsg(res.msg))
            }
        })
    }

}

// 注销
export function logout() {
    return {type: LOGOUT}
}
