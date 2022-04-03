<template>
  <MyHeader></MyHeader>
  <MyMain></MyMain>
  <MySidebar></MySidebar>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'
import MySidebar from './components/MySidebar.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyMain,
    MySidebar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 8px;
  border-radius: 40px;
  background: #ffffff;
  display: flex;
}
</style>
