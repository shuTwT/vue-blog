<template>
    <div class="container">
        <div class="headertop">
            <div class="focusinfo">
                <div class="header-tou"><a href="https://www.baiduniang.com" class="shutterset"><img
                            src="http://q1.qlogo.cn/g?b=qq&nk=1324073644&s=640"></a>
                </div>
                <div class="header-info">

                    <i class="fa fa-quote-left"></i> <span class="text-loading">层峦耸翠，上出重霄</span><span
                        class="typed-cursor typed-cursor--blink">|</span>
                    <i class="fa fa-quote-right"></i> <span class="text-loading"> 飞阁流丹，下临无地</span>

                </div>
                <div class="top-links">
                    <li id="bg-pre"><a><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/pre.png"></a>
                    </li>

                    <li class="qq"><a href="" title="Initiate chat ?" class="shutterset"><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/qq.png"></a>
                    </li>

                    <li><a href="" target="_blank" class="social-bili shutterset" title="bilibili"><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/bilibili.png"></a>
                    </li>
                    <li><a href="" target="_blank" class="social-wangyiyun shutterset" title="CloudMusic"><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/ncm.png"></a>
                    </li>
                    <li><a href="" target="_blank" class="social-sina shutterset" title="sina"><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/weibo.png"></a>
                    </li>
                    <li><a href="" target="_blank" class="social-github shutterset" title="github"><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/github.png"></a>
                    </li>


                    <li><a href="" target="_blank" class="social-wangyiyun shutterset" title="Zhihu"><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/zhihu.png"></a>
                    </li>

                    <li><a href="" target="_blank" class="social-qzone shutterset" title="qzone"><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/qz.png"></a>
                    </li>
                    <li id="bg-next"> <a><img
                                src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/display_icon/muh2/next.png"></a>
                    </li>

                </div>
            </div>
            <ToDown class="headertop-down"></ToDown>
        </div>
        <MainPage></MainPage>
    </div>
</template>

<script setup >
import MainPage from '@/components/MainPage.vue'
import ToDown from '@/components/icons/ToDown.vue'
</script>


<style scoped>
.header-info,
.headertop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.headertop::before {
    background-image: url(https://i.bmp.ovh/imgs/2022/04/29/106abd19d738eea3.png);
}

.focusinfo .header-tou img {
    border-radius: 10px;
    box-shadow: inset 0 0 10px #505050;
    width: 130px;
    height: 130px;
    padding: 2px;
    border-radius: 100%;
    transition: width 1s, height 1s, transform 0.5s;
}

.focusinfo .header-tou img:hover {
    transform: rotate(360deg);
}

.header-tou {
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-info,
body.dark .top-links img {
    color: #fff;
    background: rgba(51, 51, 51, 0.8);
}

.top-links {
    display: flex;
    flex-wrap: wrap;
}

.top-links li a img {
    height: 40px;
    width: 40px;
    padding: 9px;
    flex: 1;
    transition: width 0.5s, height 0.5s, transform 0.5s;
}

.top-links li a img:hover {
    height: 60px;
    width: 60px;
}

.headertop-down {
    animation: up-and-down 1s infinite;
}


.headertop,
.pattern-center {
    animation: header 1s;
}
</style>