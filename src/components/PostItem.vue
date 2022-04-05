<template>
  <li class="post-item ">
    <div class="post-item-container">
      <div class="post-item-thumbnail">
        <a href="#"
           target="_blank"><img src="../assets/kq1.jpg"
               data-original="../assets/kq1.jpg"
               class="thumbnail"
               width="480"
               height="300"
               style=""></a>
      </div>
      <div class="post-item-tags">
        <span class="cat-item"><a target="_blank"
             href="https://www.xiaoyu77.xyz/blog/category/about/">{{postData.type}}</a></span>
      </div>
      <div class="post-item-main">
        <h2>
          <a href="#"
             target="_blank"
             style="">{{postData.title}}</a>
        </h2>
        <div class="post-item-content">
          {{postData.description}}
        </div>
        <div class="post-item-info">
          <div class="post-item-meta">
            <div class="post-item-meta-item">
              <span class="post-item-meta-author">
                <img alt=""
                     src="../assets/g.jpg"
                     class="post-item-avatar">{{postData.author}} </span>
              <span class="post-item-time">{{postData.time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>

export default {
  name: 'PostItem',
  props: {

  },
  data() {
    return {
        postData:{
            type:'1',
            title:'1',
            description:'1',
            author:'1',
            time:'1'
        }
    }
  },
}
</script>

<style >
.post-item {
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #f5f6f7;
    position: relative;
}
.post-item-container {
    display: flex;
    align-items: stretch;
    padding: 20px 24px;
    margin: 5px;
}
.post-item-thumbnail {
    flex: 30%;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
}
.post-item-thumbnail:before {
    content: "";
    display: block;
    padding-top: 60%;
}
.post-item-thumbnail>a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.post-item a {
    color: #999;
    transition: all .3s ease-out 0s;
}
.post-item-thumbnail img {
    object-fit: cover;
    max-width: 240px;
    width: 100%;
    height: 100%;
    border-radius: var(--border-hd);
    transition: all .3s ease-out 0s;
}
.post-item-tags {
    position: absolute;
    padding: 4px 8px;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    background-color: #000;
    margin: 10px;
    background: rgba(0,0,0,.6);
    border-radius: var(--border-hd);
}
.post-item-tags a {
    color: #fff;
}
.post-item-main {
    margin-left: 20px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 70%;
}
.post-item-main h2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.post-item h2 {
    color: #333;
    line-height: 1.2;
    font-size: 19px;
    font-weight: 500;
}
.post-item h2 a {
    color: #333;
    transition: all .3s ease-out 0s;
}
.post-item-content {
    flex: 1;
    font-size: 15px;
    line-height: 20px;
    margin-top: 10px;
    color: #797c80;
    max-height: 40px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.post-item-info {
    font-size: 14px;
}
.post-item-meta {
    display: flex;
    justify-content: space-between;
    color: #b1b1b1;
    font-size: 12px;
    margin-top: 6px;
}
.post-item-time {
    color: #adb5bd;
}
.post-item-avatar {
    border-radius: 50%;
    margin-right: 6px;
    max-width: 24px;
}
</style>