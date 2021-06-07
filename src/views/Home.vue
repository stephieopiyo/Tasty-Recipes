<template>
  <div class="container-fluid">
    <div class="bgimg">
      <form class="form-inline my-2 my-lg-0 srch">
        <input
          class="form-control form-control-lg mr-sm-2"
          type="search"
          placeholder="Find a Recipe"
          aria-label="Search"
        />
        <button
          class="btn btn-lg btn-outline-success my-2 my-sm-0 searchbtn"
          type="submit"
        >
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>

