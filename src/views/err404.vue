<template>
<div v-once>
    <titleBar class="titlebar" clazzNames="fa fa-angle-left fa-lg" title="出错啦" :isBack=true>
    </titleBar>
    <img src="../assets/img/error.gif"> 唉呦，您要找的页面暂时不知去哪了~
</div>
</template>
<script>
import titleBar from '../components/titleBar.vue'
export default {
    components: {
        'titleBar': titleBar
    }
}
</script>
<style scoped>
.titlebar {
    text-align: left;
    color: white;
    background: rgb(211, 198, 169);
}

div {
    text-align: center;
}

img {
    margin-top: 30px;
}
</style>
