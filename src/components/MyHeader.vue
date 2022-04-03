<template>
  <div id="header">
    <h1 class="site-title">
      <a href="https://www.xiaoyu77.xyz"
         rel="home">
        <img src="/favicon.ico"
             alt="none" />
      </a>
    </h1>
    <p class="site-description">欢迎光临呢</p>
  </div>
</template>

<script>
export default {
    name: 'MyHeader',
}
</script>

<style>
#header{
    order: 1;
}
.site-title a img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100px;
    height: auto;
    padding: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}
</style>