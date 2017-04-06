<template>
<div class="overlayer" @touchmove.stop :style="{left:left+'px'}" @click.stop>
    <img :src="url">
    <ul>
        <li v-for="item in overlayItems" @click="goOverlay(item.id,index)">
            <i :class=item.className aria-hidden="true"></i>
            <span class="title">{{item.title}}</span>
        </li>
    </ul>
    <div class="logout" @click="exit">
        <i class="fa fa-power-off" aria-hidden="true"></i>
        <span>退出</span>
    </div>
</div>
</template>
<script>
import menu from '../api/menu.js'

export default {
    data() {
        return {
            overlayItems: []
        }
    },
    props: {
        left: {
            type: Number,
            default: -200
        },
        url: String,
        index: {
            type: Number,
            default: 1
        }
    },
    mounted() {
        this.loadOverlayData();
    },

    methods: {

        loadOverlayData() {
            menu.getOverlays().forEach(item => {
                this.overlayItems.push(item);
            });
        },
        goOverlay(id, index) {
            if (id === index) {
                this.$emit('clickCurrent')
                return;
            }
            switch (id) {
                case 1:
                    this.$router.push({
                        name: 'menu'
                    });
                    break;
                case 2:
                    this.$router.push({
                        name: 'none'
                    });
                    break;
                case 3:
                    this.$router.push({
                        name: 'none'
                    });
                    break;
                case 4:
                    this.$router.push({
                        name: 'profile'
                    });
                    break;
                case 5:
                    this.$router.push({
                        name: 'setting'
                    });
                    break;
                case 6:
                    this.$router.push({
                        name: 'help'
                    });
                    break;
            }
        },
        exit() {
            this.$store.dispatch('loginOut');
            this.$router.push({
                name: 'login'
            });
        }
    }
}
</script>
<style >
.overlayer {
    position: fixed;
    top: 0;
    background: rgb(61, 71, 80);
    width: 200px;
    color: white;
    height: 100%;
    overflow: auto;
    z-index: 4;
    transition: 0.2s ease-out;
    -webkit-transition: 0.2s ease-out;
}
</style>
<style scoped>
img {
    margin-top: 20px;
    border-radius: 50%;
    position: relative;
    left: 20%;
}

.fa {
    color: white;
}

.fa-power-off,
.logout {
    color: gray;
}

.logout {
    border-bottom: 0.5px solid gray;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}

li {
    font-size: 0.9rem;
    border-bottom: 0.5px solid gray;
    padding: 15px 0;
}

ul {
    margin: 20px;
    list-style: none outside none;
}
</style>
