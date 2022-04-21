<template>
<div id="nav">
      <div id="nav-header" >
        <div id="nav-menu"
             class="row" >
          <router-link class="col-md-3 hidden-sm hidden-xs" active-class="active"
               style="cursor: pointer;" to="/"><p>首页</p></router-link>
          <router-link class="col-md-3 hidden-sm hidden-xs" active-class="active"
               style="cursor: pointer;" to="/file">归档</router-link>
          <router-link class="col-md-3 hidden-sm hidden-xs" active-class="active"
               style="cursor: pointer;" to="/word">留言</router-link>
          <router-link class="col-md-3 hidden-sm hidden-xs" active-class="active"
               style="cursor: pointer;" to="/link">友链</router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'MyNav'
    }
</script>

<style>
#nav{
    background: rgb(255, 255, 255);
    font-size: 17px;
    font-weight: 400;
    float: none;
    padding: 0 30px 16px 30px;
    border-radius: 10px;
    margin-bottom: 10px;
}
</style>