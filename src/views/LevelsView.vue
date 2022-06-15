<template>
  <div id="levels">
    <mobileNav />
    <router-link to="/home">
      <img src="../../public/img/back.png" alt="" class="back" />
    </router-link>
    <div class="container">
      <h1 class="levels-title">Levels</h1>

      <div class="level" v-for="level in levels" :key="level">
        <router-link :to="'/levels/' + level.path">
          <h2 class="level-title">{{ level.title }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mobileNav from "@/components/mobileNav.vue";
export default {
  name: "HomeView",
  components: {
    mobileNav,
  },
  data() {
    return {
      levels: [
        {
          title: "Astrology 🌑",
          path: "astrology",
        },
        {
          title: "Cooking 🍳",
          path: "cooking",
        },
        {
          title: "Web Development 💻",
          path: "webdevelopment",
        },
        {
          title: "Photography 📷",
          path: "photography",
        },
        {
          title: "Music 🎼",
          path: "music",
        },
        {
          title: "Animals 🐱",
          path: "animals",
        },
        {
          title: "Sports 🏅",
          path: "sports",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
#levels {
  .back {
    position: absolute;
    left: 5%;
    top: 2%;
    width: 48px;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 75px 0;
    color: white;
    width: 100%;

    a {
      color: white;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      width: 100%;
    }

    .level {
      width: 80%;
      padding: 10px;
      background-color: $container-color;
      border-radius: 10px;
    }
  }
}
</style>
