<template>
  <div>
    <div class="html-main">
      <div class="card post-main">
        <h3>最新文章</h3>
        <ul class="post-list">
          <post-item v-for="(item, index) in listdata"
                     :key="index"
                     :title="item.title"
                     :description="item.description">

          </post-item>
        </ul>
      </div>
      <div class="sidebar">
        <div class="card searchcard aside-box">
          <div class="inputgroup aside-box">
            <search-button></search-button>
          </div>
        </div>
        <div class="card usercard">
          <div class="widget-admin-author-plane">
            <div class="widget-admin-author-background_image"
                 style="">
              <img src="https://s3.bmp.ovh/imgs/2022/04/22/9cb5138e00bf0b53.jpg">
            </div>
            <div class="widget-admin-author-avatar">
              <img src="https://s3.bmp.ovh/imgs/2022/04/22/734350d895796c5a.jpg">
            </div>
            <div class="widget-admin-author-name">
              高级长官毓 </div>
            <div class="widget-admin-author-introduce">
              <div class="widget-admin-author-introduce-text">
                刚开始可能会有点疼 </div>
            </div>
            <div class="widget-admin-author-contact">
              <div class="widget-admin-author-contact-item"
                   title="qq"
                   style="border-color:#409eff ">
                <div class="widget-admin-author-contact-item-icon"
                     style="background-color:#409eff ;"><i class="fab fa-qq"></i></div>
                <div class="widget-admin-author-contact-item-content"
                     title="1234567890">1234567890</div>
              </div>
              <div class="widget-admin-author-contact-item"
                   title="qq"
                   style="border-color:#905d1d ">
                <div class="widget-admin-author-contact-item-icon"
                     style="background-color:#905d1d ;"><i class="fas fa-at"></i></div>
                <div class="widget-admin-author-contact-item-content"
                     title="1234567890@qq.com">1234567890@qq.com</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card weathercard aside-box">
          <h2>实时天气</h2>
        </div>
      </div>
    </div>
    <div class="card linkcard">
      <strong>友情链接</strong>
      <li><a href="https://creepzzl.top"
           rel="noopener"
           title="帕秋莉go"
           target="_blank"><img class="frinds-links-icon img-lazyload"
               src="https://creepzzl.top/CreepZz.ico"
               data-original="https://creepzzl.top/favicon.ico"
               onerror="javascript:this.src='https://www.frostfox.cn/wp-content/themes/CorePress-Pro/static/img/chrome.png'"> CreepZzl - Blog</a></li>
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import axios from 'axios'
import SearchButton from '@/components/SearchButton.vue'
export default {
  components: { PostItem, SearchButton },
  name: 'HomePage',
  comments: {},
  methods: {
    getArticles() {
      axios
        .get('/article.json')
        .then((response) => {
          for (var i = 0; i < 3; i++) {
            this.listdata[i] = response.data.data[i]
          }
          console.log(this.listdata)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {},
  created() {
    //页面渲染之前执行，调用定义的方法
    this.getArticles()
  },
  data() {
    return {
      listdata: [],
    }
  },
  setup() {
    return {}
  },
}
</script>

<style scoped>
.linkcard{
    width: 1400px;
}
.linkcard img {
  max-width: 20px !important;
}
.html-main {
  display: flex;
}
.post-main {
  order: 1;
  flex-basis: 74%;
}
.sidebar {
  order: 2;
  flex-basis: 26%;
}
.widget-admin-author-plane {
  position: relative;
  border-radius: var(--border-hd);
  overflow: hidden;
  background: #fff;
  margin-bottom: 10px;
  text-align: center;
  padding-bottom: 20px;
}
.widget-admin-author-background_image img {
  max-width: 100%;
  width: 100%;
  height: auto;
  max-height: 110px;
}
.widget-admin-author-avatar img {
  height: 74px;
  width: 74px;
  border: 3px solid #fff;
  border-radius: 50%;
  background: #fff;
}
.widget-admin-author-name:after {
  content: '\f336';
  font-family: 'Font Awesome 5 Pro';
  color: #f4c758;
}
.widget-admin-author-introduce {
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}
.widget-admin-author-introduce-text {
  text-align: left;
  padding: 0 30px;
}
.widget-admin-author-contact {
  text-align: left;
  padding: 0 30px;
  margin-top: 20px;
}
.widget-admin-author-contact-item {
  border: 1px solid;
  border-radius: 2px;
  display: flex;
  position: relative;
  margin-bottom: 10px;
}
.widget-admin-author-contact-item-icon {
  text-align: center;
  margin-right: 8px;
  padding: 8px;
  color: #fff;
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  width: 45px;
  transition: 0.3s;
  border-bottom-left-radius: var(--border-hd);
}
.widget-admin-author-contact-item-content {
  display: inline-block;
  padding: 8px 0;
  padding-right: 20px;
  margin-left: 55px;
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
}
.aside-box {
  background: #fff;
  padding: 10px;
  border: var(--border-box);
  border-radius: var(--border-hd);
  margin-bottom: 10px;
}
.inputgroup {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>