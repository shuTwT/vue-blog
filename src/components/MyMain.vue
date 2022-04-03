<template>
  <div id="main">
    <MyNav></MyNav>
    <MyContent></MyContent>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyNav from './MyNav.vue'
import MyContent from './MyContent.vue'
import MyFooter from './MyFooter.vue'
export default {
  name: 'MyMain',
  components: {
    MyNav,
    MyContent,
    MyFooter,
  },
}
</script>

<style >
#main {
  order: 2;
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
}


</style>