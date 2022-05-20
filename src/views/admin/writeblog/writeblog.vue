<template>
    <div class="container-main">
        <section class="toolbar">
            <el-button type="primary" size="medium ">发布</el-button>
        </section>
    <editor></editor>
   </div>
</template>

<script >
import Editor from "@/components/BEditor.vue";
import { ElButton } from "element-plus";
export default {

    components: {
    ElButton,
    Editor
}
}
</script>

<style scoped>
.container-main>div{
height: 100%;
}
</style>