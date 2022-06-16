<template>
  <div id="levels">
    <mobileNav />
    <router-link to="/home">
      <img src="../../public/img/back.png" alt="" class="back" />
    </router-link>
    <div class="container">
      <h1 class="levels-title">Niveaux</h1>

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
          title: "Astronomie 🌑",
          path: "astronomie",
        },
        {
          title: "Cuisine 🍳",
          path: "cooking",
        },
        {
          title: "Développement Web 💻",
          path: "webdevelopment",
        },
        {
          title: "Photographie 📷",
          path: "photography",
        },
        {
          title: "Musique 🎼",
          path: "music",
        },
        {
          title: "Animaux 🐱",
          path: "animals",
        },
        {
          title: "Sport 🏅",
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
