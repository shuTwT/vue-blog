<template>
<div id="nav">
      <div id="nav-header">
        <div id="nav-menu"
             class="row">
          <div class="col-md-3 hidden-sm hidden-xs"
               style="cursor: pointer;">首页</div>
          <div class="col-md-3 hidden-sm hidden-xs"
               style="cursor: pointer;">归档</div>
          <div class="col-md-3 hidden-sm hidden-xs"
               style="cursor: pointer;">留言</div>
          <div class="col-md-3 hidden-sm hidden-xs"
               style="cursor: pointer;">友链</div>
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
    background: #e0f4f1;
    font-size: 17px;
    font-weight: 400;
    float: none;
    padding: 0 30px 16px 30px;
    border-radius: 10px;
    margin-bottom: 10px;
}
</style>