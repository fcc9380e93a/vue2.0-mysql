import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource);

global.API = "http://localhost:3000";

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
