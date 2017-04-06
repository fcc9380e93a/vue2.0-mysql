import * as types from '../mutation-types.js'
import storage from '../../util/storage.js'

const state = {
    user: null,
    loginStatus: null,
    info: null,
}
// getters
const getters = {
    loginStatus: state => {
        if ('successful' != state.loginStatus) {
            if (storage.read('loginStatus') == 'successful') {
                state.loginStatus = 'successful';
            }
        }
        return state.loginStatus;
    },
    user: state => {
        if (state.user == null) {
            let temp = storage.read('user');
            if (temp) {
                state.user = temp;
            }
        }
        return state.user;
    }

}

// actions
const actions = {

    login({
        commit
    }, user) {
        commit(types.LOGIN_SUCCESS, {
            user
        });
    },
    loginOut({
        commit
    }) {
        commit(types.LOGOUT_REQUEST)
    }

}

// mutations
const mutations = {
    [types.LOGOUT_REQUEST](state) {
        //clear user
        state.loginStatus = null;
        state.user = null;
        storage.write('user', state.user);
        storage.write('loginStatus', state.loginStatus);
    },

    [types.LOGIN_SUCCESS](state, {
        user
    }) {
        if (typeof user == "object") {
            user = JSON.stringify(user);
        }
        state.user = user;
        state.loginStatus = 'successful';

        storage.write('user', state.user);
        storage.write('loginStatus', state.loginStatus);
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
