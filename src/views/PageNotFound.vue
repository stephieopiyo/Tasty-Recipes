<template>
  <div class="container-fluid">
    <div class="bgrnd" v-bind:style="errorImage">
      <div class="error">OOPS SORRY 404,PAGE NOT FOUND.</div>
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


