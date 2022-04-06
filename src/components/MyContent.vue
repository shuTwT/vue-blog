<template>
 <div id="content" class="container">
     <router-view></router-view>
    </div>
</template>

<script>
    export default {
    name: "MyContent",
    components: { }
}
</script>

<style>
#content {
  background: #edf0f5;
  border-radius: 10px;
  overflow: hidden;
  
}
</style>