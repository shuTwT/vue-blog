<script  >
import ImgCard from "./ImgCard.vue";

export default{
    data(){
        return {
            url1:"https://s3.bmp.ovh/imgs/2022/05/04/32eb550ddd60836d.png"
        }
    },
    components:{
        ImgCard
    }
}
</script>

<template>
    <div id="page" class="container">
        <div id="primary">
            <div class="title"><span>顶置</span></div>
            <div class="hr"></div>
            <div class="cardbox">
                <ImgCard :url="url1"></ImgCard>
                <div class="imgborder"><img src='https://s3.bmp.ovh/imgs/2022/05/04/70bb2222134640a3.jpg' /></div>
                <div class="imgborder"><img src='https://s3.bmp.ovh/imgs/2022/05/04/cd4ff2254c18d184.jpg' /></div>
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
.cardbox{
    display: flex;
    flex-direction: row;
    width: 78%;
}
.imgborder {
    position: relative;
    width: 26vw;
    height:10vw;
    overflow: hidden;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
}

.imgborder>img {
    width: 100%;
    height: 100%;
    transition: width 1s, height 1s;
}
.imgborder>img:hover{
    width: 110%;
    height: 110%;
}
</style>