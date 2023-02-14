import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'user'

_createUsers()

export const userService = {
    getById,
    signup,
    logout,
    getLoggedinUser,
    transferFunds,
    getTransactions,
}

async function transferFunds(transfer) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.balance = user.balance - transfer
    await update(user)
    return user.balance
}

async function update(user) {
    await storageService.put('user', user)
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

function getTransactions() {

}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    return user
}

async function signup(userCred) {
    const users = await storageService.query('user')
    let user = users.find(user => user.name === userCred.name)
    if (!user) {
        userCred.balance = 1000
        if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
        user = await storageService.post('user', userCred)
    }
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function saveLocalUser(user) {
    user = { _id: user._id, name: user.name, imgUrl: user.imgUrl, balance: user.balance, transactions: user.transactions }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function _createUsers() {
    let users = utilService.loadFromStorage(STORAGE_KEY)
    if (!users || !users.length) {
        users = [
            {
                _id: '5a5664025f6ae8aa24a98fde',
                name: 'Puki',
                balance: 5000,
                transactions: [
                    {
                        toId: '5a56640269f443a5d64b32ca',
                        to: 'Ochoa Hyde',
                        at: 2652712571,
                        amount: 2
                    },
                ]
            }
        ]
        utilService.saveToStorage(STORAGE_KEY, users)
    }
}