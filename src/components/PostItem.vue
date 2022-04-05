<template>
  <div class="post-item">
    <div class="post-item-info">
      <span>{{postList.title}}</span>
      <div class="post-description">
        {{postList.description}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    postList: {
        type:[Object]
    },
  },
  data() {
    return {}
  },
}
</script>

<style >
</style>