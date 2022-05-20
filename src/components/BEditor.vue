<template>
        <editor :locale="zhHans" :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script >
import 'bytemd/dist/index.css'
import "highlight.js/styles/vs.css";
import zhHans from 'bytemd/locales/zh_Hans.json'
import { Editor, Viewer } from '@bytemd/vue-next'
import highlight from '@bytemd/plugin-highlight'
import gfm from '@bytemd/plugin-gfm'
import mediumZoom from "@bytemd/plugin-medium-zoom"
import gemoji from "@bytemd/plugin-gemoji"
const plugins =[
    gfm(),
    highlight(),
    mediumZoom(),
    gemoji()
]
export default {
    name: 'BEditor',
    components: {
        Editor
    },
    data () {
        return {
           value:'',plugins,zhHans
        }
    },
    methods: {
        handleChange(v){
            this.value=v
        }
    }
}
</script>

<style  >
.bytemd{
    height: 100%;
}
</style>