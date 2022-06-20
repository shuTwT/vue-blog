<template>
     <div class="blog-item">
                <div class="title"><a href="/views/frontEnd/Vue/2021/vue_xiangxijs_01.html" class="">Vue详细介绍及使用</a>
                </div>
                <div class="abstract">
                    <div class="custom-block tip">
                        <p> Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。</p>
                    </div>
                </div>
                <hr>
                <div><i class="iconfont reco-account"><span>admin</span></i> <i
                        class="iconfont reco-date"><span>2021/8/21</span></i> <i class="iconfont reco-tag tags"><span
                            class="tag-item">
                            Vue
                        </span></i>
                </div>
            </div>
</template>

<script>
    export default {
        props:{
            title,
            tip,
            account,
            date,
            tag
        }
    }
</script>

<style scoped>

</style>