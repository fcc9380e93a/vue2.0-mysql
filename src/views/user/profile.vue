<template>
<div class="profile" @click="dismiss">
    <titleBar class="titlebar" title="个人中心" clazzNames="fa fa-bars" :isBack=false @tBarLeftClick="showSlide">
    </titleBar>
    <div class="wrap">
        <img src="../../assets/img/avatar.png">
        <span class="name"> Hello Kitty</span>
        <span>Coffee Lover</span>
        <span class="desc">There are moments in life when you miss someone so much that you just want to
   pick them from your dreams
   and hug them for real!
   Dream what you want to dream;go where you want to go;be what you want to be,
   because you have only one life and one chance to do all the things you want to do.</span>
        <button class="follow" type="button">follow</button>
    </div>
    <ul>
        <li v-for="item in items">
            <span>{{item.num}}</span>
            <span>{{item.type}}</span>
        </li>
    </ul>


    <overlay :left=this.left :overlayItems=this.overlayData :index=4 url="../src/assets/img/avatar.png"></overlay>

</div>
</template>
<script>
import titleBar from '../../components/titleBar.vue'
import overlay from '../overlay.vue'
import menu from '../../api/menu.js'
export default {
    data() {
        return {
            overlayData: [],
            left: -200,
            items: [{
                    num: '0',
                    type: 'favorite'
                },
                {
                    num: '30',
                    type: 'likes'
                },
                {
                    num: '25',
                    type: 'followers'
                },
                {
                    num: '60',
                    type: 'following'
                }
            ]
        }
    },
    mounted() {
        this.loadOverlay();
    },
    methods: {
        showSlide() {
            this.left = 0;
        },
        dismiss() {
            this.left = -200;
        },
        loadOverlay() {
            menu.getOverlays().forEach(item => {
                this.overlayData.push(item);
            });
        }
    },
    components: {
        'titleBar': titleBar,
        'overlay': overlay
    }
}
</script>
<style scoped>
.titlebar {
    color: white;
    background: rgb(211, 198, 169);
}

.profile {
    overflow: auto;
    height: 100%;
}

.wrap {
    text-align: center;
}

.name {
    color: green;
    font-size: 1.3rem;
    font-weight: bold;
}

span {
    display: block;
    font-size: 0.8rem;
    color: #333333;
}

img {
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 50%;
}

.desc {
    line-height: 1.25;
    font-size: 0.9rem;
    margin: 20px;
}

.follow {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    width: 50%;
    border: 1px solid rgb(145, 145, 145);
    color: white;
    background-color: green;
}

li {
    text-align: center;
    border-boxing: 1px solid red;
    display: inline-block;
    width: 25%;
}

li>span {
    padding: 5px;
}
</style>
