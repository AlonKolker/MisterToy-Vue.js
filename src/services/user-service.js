import Axios from 'axios'
const axios = Axios.create({ withCredentials: true })

const STORAGE_KEY = 'loggedin'

export const userService = {
    // signup,
    setLogin,
    getLoggedInUser,
    setLogout,
}

function _getUrl(id = '') {  /* TODO */
    const BASE_URL =
        process.env.NODE_ENV !== 'development'
            ? '/api/user'
            : '//localhost:3030/api/user/login'

    return `${BASE_URL}/${id}`
}


function _getUrlAuth(id = '') {
    const BASE_URL =
        process.env.NODE_ENV !== 'development'
            ? '/api/auth'
            : '//localhost:3030/api/auth'

    return `${BASE_URL}/`
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
}


async function setLogin(user) {
    try {
        const res = await axios.post(_getUrlAuth() + 'login', user)
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(res.data))
        return res.data
    } catch (err) {
        console.log('cannot set user login', err)
    }
}

async function setLogout() {
    try {
        const res = await axios.post(_getUrlAuth() + 'logout')
        sessionStorage.clear()
        
    } catch (err) {
        console.log('cannot set user login', err)
    }
}

// function checkLogin({ username, password }) {
//     var user = users.find(user => user.username === username && user.password === password)
//     if (user) {
//         user = { ...user }
//         delete user.password
//     }
//     return Promise.resolve(user)
// }

// function signup({ fullname, username, password }) {
//     var user = {
//         // _id: _makeId(),
//         fullname,
//         username,
//         password,
//         // balance: 100
//     }
//     users.push(user)

//     return _saveUsersToFile().then(() => {
//         user = { ...user }
//         delete user.password
//         return user
//     })
// }

// function _makeId(length = 5) {
//     var txt = ''
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for (var i = 0; i < length; i++) {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length))
//     }
//     return txt
// }

// function _saveUsersToFile() {
//     return new Promise((resolve, reject) => {
//         const content = JSON.stringify(users, null, 2)
//         fs.writeFile('./data/user.json', content, err => {
//             if (err) {
//                 console.error(err)
//                 return reject(err)
//             }
//             resolve()
//         })
//     })
// }