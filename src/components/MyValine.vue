<template>
  <div id="vcomments">

  </div>
</template>

<script>
export default {
  name: 'MyValine',
  data(){
      return{
          Valine:''
      }
  },
  mounted() {
    import('valine').then(res => {
      this.Valine = res.default;
      this.init()
    })
  },
  methods: {
    init() {
      new this.Valine({
        el: '#vcomments',
        appId: 'yizXsDmc2cTFBlWzQnANclP7-gzGzoHsz',
        appKey: 'Q4WOgkMnI5K94AFt668KdjHt',
      })
    },
  },
}
</script>

<style >
</style>