<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {
    name: 'app',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            loginStatus: 'loginStatus'
        })
    },
    mounted() {
        if ('successful' == this.loginStatus) {
            this.toPath(this.$route.name);
        } else {
            this.login();
        }
    },
    methods: {
        login() {
            this.$router.push({
                name: 'login'
            })
        },
        toPath(pathName) {
            this.$router.push({
                name: pathName
            })
        }
    }
}
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Times New Roman",Times,Georgia,serif;
}

#app {
    width: 100%;
    height: 100%;
}

ol,
ul,
li {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.fa {
    width: 27px;
    padding-left: 7px;
    font-size: 20px;
}
</style>
