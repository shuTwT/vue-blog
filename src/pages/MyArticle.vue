<template>
  <div>
    <div>
      <div class="html-main">
        <div class="card article-main">
          <vue-markdown-it :content='content' :source='textarea'
                           
                           :plugins='plugins'
                           style="border: 1px solid black;height: 100%;padding-left: 8px;border-radius: 7px;margin-top: 7px;" />
        </div>
        <div class="sidebar">
          <div class="card searchcard aside-box">
            <div class="input-group mb-3">
              <search-button></search-button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it'
import '../highlight.js/styles/monokai.css'
import SearchButton from '@/components/SearchButton.vue'
import MarkdownItEmoji from 'markdown-it-emoji'
import MarkdownItDeflist from 'markdown-it-deflist'
import MarkdownItSub from 'markdown-it-sub'
import MarkdownItSup from 'markdown-it-sup'
import MarkdownItAbbr from 'markdown-it-abbr'
export default {
  name: 'MyArticle',
  components: {
    VueMarkdownIt,
    SearchButton
  },
  setup() {
    let textarea = ref(`# Hello，World！
    ## print("helloword");
    

 `)
    let plugins = reactive([
      {
        plugin: MarkdownItAbbr,
      },
      {
        plugin: MarkdownItSub,
      },
      {
        plugin: MarkdownItSup,
      },
      {
        plugin: MarkdownItDeflist,
      },
      {
        plugin: MarkdownItEmoji,
      },
    ])
    return {
      textarea,
      plugins,
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.html-main {
  display: flex;
}
.article-main {
  order: 1;
  flex-basis: 74%;
}
.sidebar {
  order: 2;
  flex-basis: 26%;
}
</style>