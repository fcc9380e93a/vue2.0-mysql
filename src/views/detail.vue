<template>
<div>
    <titleBar class="titlebar" clazzNames="fa fa-angle-left fa-lg" :title=food.name :isBack=true>
    </titleBar>
    <img :src="'../src/assets/img/'+food.img">
    <span class="detail">{{food.detail}}</span>
    <div class="select">
        <div class="left">
            <span class="sub">数量</span>
            <div class="quality">
                <i @click="minus" :style=" { color:(num>1)? 'black':'gray' }" class="fa fa-minus-square-o " aria-hidden="true"></i>
                <span class="num">{{num}}</span>
                <i @click="plus" :style=" { color:(num<10)? 'black':'gray' }" class="fa fa-plus-square-o " aria-hidden="true" /></i>
            </div>
        </div>
        <div class="total">
            <span class="sub">总价</span>
            <span class="money">¥{{payment}}</span>
        </div>
    </div>
    <span class="button">立即购买</span>
    <span class="button">加入收藏</span>
</div>
</template>

<script>
import titleBar from '../components/titleBar.vue'
import {
    mapGetters
} from 'vuex'

export default {
    data() {
        return {
            num:1,
            minusAble: false,
            plusAble: true,
        }
    },

    computed: {
        ...mapGetters({
            food: 'foodDetail'
        }),
    payment:function(){
      return this.num*this.food.price;
    }
    },
    components: {
        'titleBar': titleBar
    },
    methods: {
        minus() {
            if (this.num > 1) {
                this.num--;
            }
        },
        plus() {
            if (this.num < 10) {
                this.num++;
            }
        }
    }

}
</script>
<style scoped>
img {
   margin-top:10px;
    position: relative;
    left: 17%;
    width: 66%;
    max-height: 300px;
}

.detail {
    text-align: center;
    padding: 15px 10px;
    color: rgb(124, 124, 123);
    font-size: 0.8rem;
    display: block;
}

i {
    padding:0px;
}

.select {
    margin-bottom:10px;
    border: 1px solid rgb(243, 244, 245);
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}

.left {
   border-right:1px solid rgb(243, 244, 245);
   padding:10px 0px;
    flex: 1;
    -webkit-flex: 1;
    justify-content: center;
    -webkit-justify-content: center;
    text-align: center;
}

.quality {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.sub{
  font-size:0.9rem;
}
.money {
    display: block;
    color: green;
}

.total {
    flex-direction: column;
    -webkit-flex-direction: column;
    text-align: center;
    flex: 1;
    -webkit-flex: 1;
}
.button{
 display:block;
  border-right:1px solid rgb(243, 244, 245);
  margin-bottom:10px;
  text-align:center;
  position:relative;
  font-size:0.9rem;
  left:10%;
  width:80%;
  padding:10px 0px;
  text-align:center;
  box-sizing:padding-box;
  background:green;
  color:white;
  box-shadow:none;
}
</style>
