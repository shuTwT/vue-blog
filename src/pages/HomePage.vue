<template>
    <div>
        <PostList>
            <PostItem :postList="postData"></PostItem>
        </PostList>
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import PostItem from '../components/PostItem.vue'
    export default {
    name: "HomePage",
    comments: {
        PostList,
        PostItem,
    },
    data(){
    return {
      postData:{
        title:"我是父组件的dataList数据"
      }
    }
  }
}
</script>

<style>

</style>