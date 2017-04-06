<template>
<div class="setting" @click="dismiss">
    <titleBar class="titlebar" title="设置" clazzNames="fa fa-bars" :isBack=false @tBarLeftClick="showSlide">
    </titleBar>
    <img :src="'../src/assets/img/'+pathUrl">
    <span class="type">信息</span>
    <ul>
        <li v-for="item in info">
            <span class="name">{{item.name}}</span>
            <span>{{item.content}}</span>
        </li>
    </ul>
    <span class="type">推送</span>

    <ol>
        <li class="btn" v-for="every in pushes">
            <span>{{every.name}}</span>
            <slidebtn class="sbtn"></slidebtn>
        </li>
    </ol>
    <overlay :left=this.left :index=5 url="../src/assets/img/avatar.png" @clickCurrent="dismiss"></overlay>

</div>
</template>
<script>
import titleBar from '../components/titleBar.vue'
import overlay from './overlay.vue'
import slidebtn from '../components/slidebtn.vue'
import {
    mapGetters
} from 'vuex'


export default {
    data() {
        return {
            left: -200,
            pushes: [{
                    name: '邮箱提醒'
                },
                {
                    name: '手机提醒'
                }
            ],
        }
    },
    computed: {
        ...mapGetters({
            user: 'user'
        }),
        pathUrl: function() {
            return (JSON.parse(this.user).img == null) ? 'avatar.png' : JSON.parse(this.user).img;
        },
        info: function() {
            let tempInfo = [];
            var {
                name,
                nickname,
                email,
                gender,
                favorites,
                img
            } = JSON.parse(this.user);
            tempInfo.push({
                name: '昵称',
                content: ((nickname == null) ? name : nickname)
            });
            if (email) {
                tempInfo.push({
                    name: '邮箱',
                    content: email
                });
            }
            if (gender) {
                tempInfo.push({
                    name: '性别',
                    content: (gender == 1) ? '女' : '男'
                });
            }
            if (favorites) {
                tempInfo.push({
                    name: '收藏',
                    content: favorites
                });
            }
            return tempInfo;
        }

    },
    methods: {
        showSlide() {
            this.left = 0;
        },
        dismiss() {
            this.left = -200;
        }

    },
    components: {
        'titleBar': titleBar,
        'overlay': overlay,
        'slidebtn': slidebtn
    }

}
</script>
<style scoped>
img {
    position: relative;
    left: 50%;
    margin-top: 20px;
    margin-bottom: 15px;
    border-radius: 50%;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, -50%);
}

.btn {
    display: table;
}

.titlebar {
    color: white;
    background: rgb(211, 198, 169);
}

span {
    display: table-cell;
    vertical-align: middle;
    color: #424242;
}

.type {
    display: block;
    padding: 10px 15px;
    background: rgb(247, 248, 250);
    font-size: 0.9rem;
}

li {
    border-bottom: 1px solid rgb(243, 244, 245);
    padding: 10px 15px;
    font-size: 0.8rem;
    display: block;
    width: 100%;
    box-sizing: border-box;
}

.name {
    color: rgb(139, 140, 141);
    padding-bottom: 3px;
}

ul>li span {
    display: block;
}

.sbtn {
    width: 100%;
    box-sizing: border-box;
    text-align: right;
}
</style>
