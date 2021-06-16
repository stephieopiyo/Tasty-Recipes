<template>
  <div class="container-fluid">
    <div class="bgrnd" v:bind="errorImage">
      <div class="error">
        <div><i class="fa fa-exclamation-triangle"></i></div>
        <div>404</div>
        <div>PAGE NOT FOUND.</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
  computed: {
    errorImage() {
      return {
        backgroundImage: `url(${require("../assets/img/error404.jpg")})`,
      };
    },
  },
};
</script>


