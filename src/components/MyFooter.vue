<template>
    <div id="footer" class="row">
        <div class="column main">
            <span>代码搬运工</span>
            <small>©2022 copyright</small>
            <small>备案号</small>
        </div>
        <div class="column pointer">
            <span>站内导航</span>
            <ul>
            </ul>
        </div>
        <div class="site">
            <span>传送门</span>
            <ul><li>
                <a href="https://space.bilibili.com/"  target="_blank">B站</a>
            </li></ul>
        </div>
        <div class="linkbox">
            <span >友情链接</span>
            <ul>
                <li>
                    <img src="https://creepzzl.top/CreepZz.ico" alt="creepzz">creepzz
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup >

</script>

<style scoped>
#footer {
    min-height: 200px;
    display: flex;
    flex-direction:row;
    justify-content: center;
}
#footer>div{
    margin: 20px;
}
#footer>.main>span{
    color: #787878;
    font-size: 35px;
    font-weight: 700;
}
#footer>.pointer>span{
    color: #787878;
    font-size: 35px;
    font-weight: 700;
}
#footer>.site>span{
    color: #787878;
    font-size: 35px;
    font-weight: 700;
}
#footer>.linkbox>span{
    color: #787878;
    font-size: 35px;
    font-weight: 700;
}
#footer>.linkbox {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#footer>.linkbox>ul>li>img {
    height: 20px;
}
</style>