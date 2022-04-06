<template>
  <div>
    <div>
      <div class="html-main">
        <div class="card link-main"></div>
        <div class="sidebar">
          <div class="card searchcard aside-box">
            <div class="input-group mb-3">
              <input type="text"
                     class="form-control inputcard"
                     placeholder="input value"
                     aria-label="input value"
                     aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2">搜索</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyArticle',
}
</script>

<style >
.html-main {
  display: flex;
}
.link-main {
  order: 1;
  flex-basis: 74%;
}
.sidebar {
  order: 2;
  flex-basis: 26%;
}


</style>