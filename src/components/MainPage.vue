<script  >
import axios from 'axios'

export default {
    data () {
        return {

        }
    },
    components: {

    },
    methods: {},
    mounted () {

    }
}
</script>

<template>
    <div id="page" class="container">
        <div id="primary">
            <div class="title"><span>顶置</span></div>
            <div class="hr"></div>
        </div>
        <div class="blog-list">
            <div v-for="(item,index) in 6" :key="index" class="blog-item">
                <div class="title"><a href="/article/2022/6/1/Java基础" class="">Java基础</a>
                </div>
                <div class="abstract">
                    <div class="custom-block tip">
                        <p> 大家好，我是练习时长两年半的练习生。这是由我为大家带来的Java基础笔记</p>
                    </div>
                </div>
                <hr>
                <div><i class="iconfont reco-account"><span>admin</span></i> <i
                        class="iconfont reco-date"><span>2022/6/1</span></i> <i class="iconfont reco-tag tags"><span
                            class="tag-item">
                            Vue
                        </span></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#page {
    width: 100%;
    height: 100%;
}

#primary {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#cardbox {
    width: 90%;
}

#primary>.title {
    width: 100%;
    margin-left: 200px;
    padding-left: 5%;
    font-size: larger;
}

.hr {
    width: 80%;
    height: 3px;
    border-radius: 120px;
    background-color: #808080
}

.blog-list {
    width: 100%;
}

.blog-list>.blog-item {
    margin: 0 auto 20px;
    padding: 16px 20px;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
    border-radius: 2px;
    box-sizing: border-box;
    transition: all .3s;
}
.blog-item:hover {
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 20%);
}

.blog-list>.blog-item>.title {
    position: relative;
    font-size: 1.28rem;
    line-height: 36px;
    display: inline-block;
}

.custom-block.tip {
    background-color: #f3f5f7;
    border-color: #67cc86;
}

.custom-block.tip {
    padding: 0.1rem 1.5rem rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;
}
.iconfont {
    font-size: .9rem;
    color: #888;
}
.iconfont {
    display: inline-block;
    line-height: 1.5rem;
}
.iconfont span {
    margin-left: 0.5rem;
}
</style>