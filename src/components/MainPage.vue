<template>
    <div class="container">
        <div id="primary">
            <div class="title"><span>顶置</span></div>
            <div class="hr"></div>
        </div>
        <div class="blog-list">
            <div v-for="(item, index) in posts.data" :key="index" class="blog-item">
                <div class="title"><a :href="`/article/${item.year}/${item.month}/${item.day}/${item.id}`" class="">{{
                        item.attributes.title
                }}</a>
                </div>
                <div class="abstract">
                    <div class="custom-block tip">
                        <p> {{ item.attributes.content.replace(/<[^>]+>/g, "").substring(0, 10) }}...</p>
                    </div>
                </div>
                <hr>
                <div><i class="iconfont reco-account"><span>admin</span></i> <i class="iconfont reco-date"><span>{{
                        item.year + '/' + item.month + '/' + item.day + ' ' + item.hours + ':' + item.minutes +
                        ':' + item.seconds
                }}</span></i> <i class="iconfont reco-tag tags"><span class="tag-item">
                            标签
                        </span></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
const posts: any = ref({
    data: [], meta: {}
})
onMounted(() => {
    try {
        fetch(`//localhost:1337/api/posts?sort[0]=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=10`).then(
            ((res: Response) => res.json())
        ).then((data: any) => {
            posts.value.data = data.data
            posts.value.meta = data.meta
            //console.log(posts.value.data);
            posts.value.data.forEach((e: any) => {
                const date = new Date(e.attributes.publishedAt)
                e.year = date.getFullYear()
                e.month = date.getMonth()
                e.day = date.getDay()
                e.hours = date.getHours()
                e.minutes = date.getMinutes()
                e.seconds = date.getSeconds()
            });


        })
    } catch (error) {
    }
})

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    #primary {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        .title {
            width: 100%;
            margin-left: 50px;
            padding-left: 5%;
            font-size: larger;
        }

        .hr {
            width: 100%;
            height: 3px;
            border-radius: 120px;
            background-color: #808080
        }

    }

    .blog-list {
        width: 100%;

        .blog-item {
            margin: 0 auto 20px;
            padding: 16px 20px;
            width: 100%;
            overflow: hidden;
            box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
            border-radius: 2px;
            box-sizing: border-box;
            transition: all .3s;

            .title {
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



        }

        .blog-item:hover {
            box-shadow: 0 4px 20px 0 rgb(0 0 0 / 20%);
        }

    }

}
</style>