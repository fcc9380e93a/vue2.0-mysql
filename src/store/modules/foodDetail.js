import * as types from '../mutation-types.js'
import storage from '../../util/storage.js'

const state = {
    foodDetail: null
}
// getters
const getters = {
    foodDetail: state => {

        if (state.foodDetail == null) {
            let temp = storage.read('foodDetail');
            if (temp) {
                state.foodDetail = JSON.parse(temp);
            }
        }
        return state.foodDetail;
    }
}

// actions
const actions = {

    saveFoodDetail({
        commit
    }, detail) {
        commit(types.SAVE_FOOD_DETAIL, {
            detail
        })
    }

}

// mutations
const mutations = {
    [types.SAVE_FOOD_DETAIL](state, {
        detail
    }) {
        state.foodDetail = detail;
        if (typeof detail == "object") {
            detail = JSON.stringify(detail);
        }
        storage.write('foodDetail', detail);
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
