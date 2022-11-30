<template>
    <div class="markdown-body" v-html="content">

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const title = ref('')
const content = ref('')
onMounted(() => {
    try {
        fetch(`//localhost:1337/api/posts/${route.params.id}`).then(
            ((res: Response) => res.json())
        ).then((data: any) => {
            console.log(data.data);
            title.value = data.data.attributes.title
            content.value = data.data.attributes.content
            document.title = title.value
        })
    } catch (error) {
    }
})

</script>

<style scoped>

</style>