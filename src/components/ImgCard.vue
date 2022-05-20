<template>
    <div class="imgborder"><img  /></div>
</template>

<script >
import { defineProps } from "vue"
export default{
    props:{
        url:String
    },
    setup(props){
        return {
            props
        }
    }
}
</script>

<style lang="scss" scoped>

</style>