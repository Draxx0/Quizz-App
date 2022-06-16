<template>
  <div>
    <router-link to="/levels">
      <img src="../../../public/img/back-arrow.png" alt="" class="back-arrow" />
    </router-link>
    <div class="level-container cuisine">
      <div class="overlay"></div>
      <img src="../../../public/img/donuts.png" alt="" class="level-img" />
      <div class="level-text-container">
        <h1 class="level-type">Cuisine</h1>
        <p class="level-description">
          Ce quiz portera sur des questions autour de la cuisine, préparer vos
          couverts, nos questions sauront vous donner du fil a retordre ! Chefs
          cuisinier, recettes ou encore des questions sur les différents types
          de cuisine.
        </p>
      </div>
      <router-link class="btn gradiant" to="/levels/astronomie/quiz"
        >Lancer le quiz</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "cookingView",
  methods: {},
};
</script>

<style lang="scss">
.cuisine {
  background-image: url("../../../public/img/cooking-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
