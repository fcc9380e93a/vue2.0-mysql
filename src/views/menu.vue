<template>
<div class="container" @click="dismiss">
    <titleBar title="菜单" clazzNames="fa fa-bars" :isBack=false @tBarLeftClick="showSlide">
    </titleBar>
    <ul>
        <li v-for="item in items" @click.stop="getMenuDetail(item.id)" class="category" :style="{backgroundImage:'url(../src/assets/img/'+item.url+')'}">
            <span class="title">{{item.title}}</span><br>
            <span class="desc">{{item.desc}}</span>
        </li>
    </ul>
    <overlay :left=this.left :index=1 url="../src/assets/img/avatar.png" @clickCurrent="dismiss"></overlay>
</div>
</template>
<script>
import titleBar from '../components/titleBar.vue'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import overlay from './overlay.vue'
import axios from "axios"

export default {
    data() {
        return {
            items: [],
            left: -200
        }
    },

    created() {
        axios.get(global.API + '/menu').then((res) => {
            let {
                data,
                total,
                code,
                message,
                success
            } = res.data;
            if (code == 200) {
                this.items = data;
            }
        }, (res) => {
            console.log(res.status);
        });
    },

    methods: {
        getMenuDetail(id) {
            this.$router.push({
                name: 'menulist',
                params: {
                    id: id
                }
            })
        },
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
.category {
    opacity: 0.7;
    margin: 0;
    display: block;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 2px solid white;
    cursor: pointer;
    overflow: hidden;
}

.title {
    font-size: 1.3rem;
    font-weight: bold
}
</style>
