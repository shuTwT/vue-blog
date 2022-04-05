<template>
 <div class="content">
     <HomePage></HomePage>
    </div>
</template>

<script>
import HomePage from "../pages/HomePage.vue";

    export default {
    name: "MyContent",
    components: { HomePage }
}
</script>

<style>
.content {
  background: #edf0f5;
  border-radius: 10px;
  overflow: hidden;
}
</style>