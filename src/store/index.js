import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import foodDetail from './modules/foodDetail'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        foodDetail,
    }
})
