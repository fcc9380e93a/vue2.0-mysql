<template>
<div @click="dismiss()" class="wrap">
    <titleBar class="titlebar" title="帮助" clazzNames="fa fa-bars" :isBack=false @tBarLeftClick="showSlide">
    </titleBar>
    <ul>
        <li v-for="item in helps">
            <span>{{item.name}}</span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </li>
    </ul>
    <overlay :left=this.left :index=6 url="../src/assets/img/avatar.png" @clickCurrent="dismiss"></overlay>
</div>
</template>
<script>
import overlay from './overlay.vue'
import titleBar from '../components/titleBar.vue'

export default {
    data() {
        return {
            helps: [{
                    name: "新手指导"
                },
                {
                    name: "订单问题"
                }, {
                    name: "常见问题"
                }, {
                    name: "客服服务"
                }, {
                    name: "反馈"
                }
            ],
            left: -200
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
        'overlay': overlay
    }
}
</script>
<style scoped>
.wrap{
height:100%;
}
.titlebar {
    color: white;
    background: rgb(211, 198, 169);
}
i{
 color:gray;
 position:absolute;
 right:0;
 font-size:16px;
}
li {
    border-bottom: 1px solid rgb(243, 244, 245);
    padding: 10px 15px;
    font-size: 0.8rem;
    color: #424242;
}
</style>
