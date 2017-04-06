<template>
<div>
    <titleBar class="titlebar" clazzNames="fa fa-angle-left fa-lg" :title="getTitle()" :isBack=true>
    </titleBar>
    <span class="subhead">The Science of Delicious</span>
    <ul>
        <li v-for="item in lists" @click="foodDetail(item)">
            <img :src="'../src/assets/img/'+item.img">
            <div class="right">
                <span class="name">{{item.name}}</span>
                <span class="detail">{{item.detail}}</span>
                <span class="des">{{item.des}}</span>
                <span class="price">¥{{item.price}}</span>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import axios from "axios"
import titleBar from '../components/titleBar.vue'
import util from '../util/util.js'

export default {
    data() {
        return {
            id: 1,
            lists: [],
            start: 0,
            url: '',
            category: '',
            pagesize: 8,
            total: 0,
            isLoading: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getData();
    },
    components: {
        'titleBar': titleBar
    },
    methods: {
        foodDetail(item) {
         this.$store.dispatch('saveFoodDetail',item);
         this.$router.push({name:'detail',params: {id: item.id}});
        },
        getData() {
            let array = new Array();
            array.push(global.API);
            array.push("/foodList?type=");
            array.push(this.id);
            array.push("&start=");
            array.push(this.start);
            array.push("&pageSize=");
            array.push(this.pagesize);

            axios.get(array.join("")).then((res) => {

                let {
                    data,
                    total,
                    code,
                    message,
                    success
                } = res.data;
                if (code == 200) {
                    if (total > 0) {
                        data.forEach(item => {
                            this.lists.push(item);
                        });
                        if (total == this.pagesize) {
                            this.scrollListener();
                        } else {
                            this.removeListener();
                        }
                    }
                    if (total == 0) {
                        util.showToast("暂时没有数据...", 2000);
                    }
                } else {
                    resumeStart();
                }
                this.isLoading = false;
            }, (res) => {
                util.showToast("服务器异常...", 2000);
                this.resumeStart();
                this.isLoading = false;
            });
        },
        getTitle() {
            let categories = {
                1: "咖啡",
                2: "早餐",
                3: "小吃",
                4: "三明治",
                5: "特色饮品"
            };
            return categories[this.id];
        },
        scrollListener() {
            util.scroll(() => {
                    if (this.isLoading) {
                        return;
                    } else {
                        this.isLoading = true;
                        this.start = this.start + 1;
                        this.getData();
                    }
            });
        },
        removeListener() {
            util.removeScroll(null);
        },
        resumeStart() {
            if (this.start > 0) {
                this.start--;
            }
        }
    }
}
</script>
<style scoped>
.subhead,
.titlebar {
    color: white;
    background: rgb(211, 198, 169);
}

.subhead {
    display: none;
    padding: 10px;
    text-align: center;
    font-size: 1.1rem;
    font-style: italic;
}

img {
    width: 120px;
    height: 120px;
    display: table-cell;
    background: green;
}

.right {
    position: relative;
    margin-left: 0;
    vertical-align: top;
    display: table-cell;
    width: 100%;
    box-sizing: border-box;
    padding-left: 8px;
}

span {
    display: block;
}

.des {
    padding-top: 8px;
    color: rgb(139, 140, 141);
    font-size: 0.8rem;
}
.detail{
color: rgb(124,124,123);
padding-top: 3px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
font-size: 0.8rem;
overflow: hidden;
}
.price {
    position: absolute;
    bottom: 0;
    color: green;
    font-size: 0.8rem;
    vertical-align: baseline;
}

li {
    margin: 8px auto 0px;
    padding: 8px;
    width: 95%;
    box-sizing: border-box;
    border: 1px solid rgb(243, 244, 245);
    display: table;
}
</style>
