<template>
<div>
    <i :class="clazzNames" aria-hidden="true" @click.stop="goBack" isBack></i>
    <span> {{title}} </span>
</div>
</template>
<script>
export default {
    props: {
        title: String,
        url: String,
        clazzNames: String,
        isBack: {
            default: true,
            type: Boolean
        }
    },
    methods: {
        goBack() {
            if (this.isBack) {
                history.go(-1);
            } else {
                this.$emit('tBarLeftClick')
            }
        }

    }
}
</script>
<style scoped>
div {
    position: relative;
    line-height: 0;
    font-size: 1rem;
    padding: 8px 0;
}

img {
    padding: 0rem 0.4rem 0rem 0.2rem;
    height: 22px;
}

span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);

}
</style>
