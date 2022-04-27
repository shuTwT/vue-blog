<template>
  <div>
    <MyHeader></MyHeader>
    <MyContent></MyContent>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyContent from './components/MyContent.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyContent,
    MyFooter,
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
}
#particles-js {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
html,
body,
#app {
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
.sidebar{
    margin:2px;
    padding: 2px;
}
</style>
