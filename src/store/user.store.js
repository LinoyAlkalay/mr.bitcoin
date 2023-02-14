import { userService } from "../services/user.service"

export const userStore = {
    state: {
        user: userService.getLoggedinUser(),
    },
    getters: {
        loggedinUser({ user }) {
            return user
        },
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.user = user
        },
        updateUser(state, { user }) {
            const idx = state.users.findIndex(p => p._id === user._id)
            state.users.splice(idx, 1, user)
        },
    },
    actions: {
        async signup({ commit }, { credentials }) {
            try {
                const user = await userService.signup(credentials)
                commit({ type: 'setLoggedinUser', user })
                return user
            } catch (err) {
                console.log('Cannot signup', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('Cannot logout', err)
                throw err
            }
        },
        async saveUser({ commit }, { user }) {
            const actionType = (user._id) ? 'updateUser' : 'addUser'
            try {
                const savedUser = await userService.save(user)
                commit({ type: actionType, user: savedUser })
                return savedUser
            } catch (err) {
                throw err
            }
        },
    }
}