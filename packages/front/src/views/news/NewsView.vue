<template>
    <div>
        <div class="newsbox" v-for="(item,index) in artiList" :key="index">
        <div class="title">{{item.title}}</div>
        <img class="img" :src="item.imgsrc" alt="">
        <div class="digest">{{item.digest}}</div>
        <div class="source">{{item.source}}</div>
        <div class="ptime">{{item.ptime}}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                artiList:[]
        }
        },
        mounted(){
             axios.get('https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html',{header:{
                'content-type':'application/json',
            }
            }).then(res=>{
            var artiList=(data)=>{
                this.artiList=data.BBM54PGAwangning;
                //console.log(this.artiList);
            }
            var data=new Function('artiList',res.data)
            data(artiList)
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>

<style scoped>
.newsbox .img{

    width: 200px;
}
</style>