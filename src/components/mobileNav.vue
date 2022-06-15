<template>
  <nav id="mobile-nav">
    <ul class="mobile-nav-list">
      <li class="mobile-nav-item">
        <img src="../../public/img/active-home.png" alt="" class="nav-img" />
      </li>
      <li class="mobile-nav-item">
        <img src="../../public/img/heart.png" alt="" class="nav-img" />
      </li>
      <li class="mobile-nav-item">
        <img src="../../public/img/notifications.png" alt="" class="nav-img" />
      </li>
      <li class="mobile-nav-item">
        <img
          v-if="gender === 'girl'"
          src="../../public/img/girl-icon.png"
          alt=""
          class="nav-img"
        />
        <img
          v-else
          src="../../public/img/boy-icon.png"
          alt=""
          class="nav-img"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "mobileNav",
  data() {
    return {
      gender: "",
    };
  },

  mounted() {
    this.gender = localStorage.getItem("gender");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/variables.scss";
#mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7%;
  background-color: $nav-color;

  .mobile-nav-list {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 40px;

    .nav-img {
      width: 24px;
    }
  }
}
</style>
