const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')


async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)

    // if (username === 'guest' ) {//carmit
    //     delete user.password
    //     return user
    // }
    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')
    // TODO: un-comment for real login
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')

    delete user.password
    return user
}

async function signup(username, password, fullname, imgUrl) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
    if (!username || !password || !fullname || !imgUrl) return Promise.reject('fullname, picture username and password are required!')

    //TODO: check if 2 users have same details
    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, password: hash, fullname, imgUrl })
    // return userService.add({ username, password: hash, fullname, isadmin: isAdmin })
}

module.exports = {
    signup,
    login,
}