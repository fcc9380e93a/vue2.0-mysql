<template>
<div class="container">
    <span class="title">登录</span>
    <form>
        <div @keyup.enter="login">
            <div class="edit">
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <input v-model="username" type="text" placeHolder="用户名" id="username">
            </div>
            <div class="edit">
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input v-model="password" type="password" placeHolder="密码" id="password">
            </div>
            <button class="login" type="button" @click="loginOrRegister(false)">登录</button>
            <button class="register" type="button" @click="loginOrRegister(true)">注册</button>
            <span class="forget">忘记密码？</span>
        </div>
    </form>
</div>
</template>
<script>
import titlebar from '../../components/titleBar.vue'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import util from '../../util/util.js'
import axios from "axios"
var qs = require('qs');

export default {
    data() {
        return {
            username:'',
            password:'',
            alert: {
                content: ' ',
                ok: '返回'
            }
        }
    },
    components: {
        'titlebar': titlebar
    },
    methods: {
        loginOrRegister(isRegister) {
            var username = this.username;
            var pwd = this.password;
            var message = util.check(username, pwd);
            if (message) {
                util.showToast(message, 2000);
                return;
            }
            var path='/login';
            if(isRegister){
               path='/register';
            }
            axios.post(global.API + path, qs.stringify({
                username: username,
                password: pwd
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then((res) => {
                let {
                    data,
                    total,
                    code,
                    message,
                    success
                } = res.data;

                if (code == 200) {
                this.$router.push({name: 'menu'});
                this.$store.dispatch('login', data);
                } else {
                    util.showToast(message, 2000);
                }
            }, (res) => {
                console.log(res.status);
            });
        }
    }

}
</script>
<style>
.toast {
    font-size: 13px;
    position: fixed;
    left: 50%;
    top: 65%;
    z-index: 2;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform:translate(-50%,-50%);
}

.toast span {
    padding: 10px;
    background: white;
    text-align: center;
}
</style>
<style scoped>
.container {
    background-image: url(../../assets/img/login_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    overflow: auto;
    background-size: cover;
}

form {
    width: 70%;
    padding-left: 15%;
}

.edit {
    opacity: 1;
    border-bottom: 1px solid white;
    margin-top: 25px;
}

.fa {
    width: 26px;
    padding-left: 5px;
    color: white;
    font-size: 24px;
}

input {
    outline: none;
    color: white;
    font-size: 1rem;
    border: none;
    background: none;
    transform: translate
}

.title {
    margin-top: 100px;
    margin-bottom: 100px;
    text-align: center;
    display: block;
    color: white;
    font-size: 1.5rem;
}

button {
    font-size: 1rem;
    padding: 10px;
    width: 100%;
}

.login {
    border: 1px solid rgb(145, 145, 145);
    margin-top: 13%;
    color: white;
    background-color: rgb(172, 201, 49);
}

.register {
    border: 1px solid rgb(239, 240, 241);
    margin-top: 10px;
    color: rgb(77, 78, 77);
    background-color: white;
}

.forget {
    margin-bottom: 20px;
    font-size: 0.9rem;
    margin-top: 15px;
    display: block;
    color: white;
    width: 100%;
    text-align: center;
}
</style>
