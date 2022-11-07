<template>
    <div class="content">
        <div class="scrollbar" id="scrollbar"></div>
        <header>
            <div class="wrapper">
                <nav>
                    <RouterLink to="/">首页</RouterLink>
                    <RouterLink to="/news">新闻</RouterLink>
                    <RouterLink to="/comments">心情</RouterLink>
                    <RouterLink to="/about">关于</RouterLink>
                </nav>
            </div>
            <div class="wrap-end">
                <RouterLink to="/admin">后台管理</RouterLink>
            </div>
        </header>
        <RouterView />
        <MyFooter></MyFooter>
    </div>
</template>

<script setup >
import MyFooter from '@/components/MyFooter.vue'
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from "vue-router";
//页面总高
var totalH = document.body.scrollHeight || document.documentElement.scrollHeight
// 可视高
var clientH = window.innerHeight || document.documentElement.clientHeight
let scroll = () => {
    // 计算有效高
    //var validH = totalH - clientH
    // 滚动条减去高度
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop
    // 百分比
    var result = (scrollH/totalH*100).toFixed(2)
    console.log(result);
    document.getElementById('scrollbar').style.width = result + '%'
}
onMounted(() => {
    try {
        window.addEventListener("scroll", scroll);
        console.log('scroll事件注册成功');
    } catch (error) {
        console.log(error);

    }

})
onUnmounted(() => {
    try {
        window.removeEventListener("scroll", scroll);
        console.log('scroll事件注销成功');
    } catch (error) {
        console.log(error);
    }
});
</script>

<style scoped>
nav {

    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {

    header {
        display: flex;
        place-items: center;
        justify-content: flex-end;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
        margin-right: auto;
    }

    header .wrapper-end {
        display: flex;

        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

}

a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

.content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
}

header {
    line-height: 1.5;
    max-height: 100vh;
}

.scrollbar {
    position: fixed;
    top: 0;
    height: 5px;
    background-image: linear-gradient(50deg, tomato 25%, seagreen 0, seagreen 50%, tomato 0, tomato 75%, seagreen 0);
    background-size: 40px 40px;
    transition-property: width;
    transition-duration: 1s, 1s;
    z-index: 99999;
    
}
 
</style>