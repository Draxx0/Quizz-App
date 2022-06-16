<template>
  <div>
    <router-link to="/levels">
      <img src="../../../public/img/back-arrow.png" alt="" class="back-arrow" />
    </router-link>
    <div class="level-container astronomie">
      <div class="overlay"></div>
      <img src="../../../public/img/planet.png" alt="" class="level-img" />
      <div class="level-text-container">
        <h1 class="level-type">Astronomie</h1>
        <p class="level-description">
          Ce quiz portera sur des questions autour de l'astronomie, allant des
          questions sur les planètes aux questions sur des personnalitées de
          l'astronomie.
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
  name: "astronomieView",
  methods: {},
};
</script>

<style lang="scss">
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.astronomie {
  background-image: url("../../../public/img/astronomie-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
.level-container {
  position: relative;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  .level-img {
    display: flex;
    margin: 0 auto;
    width: 60%;
    z-index: 2;
  }
  .level-text-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    z-index: 2;

    .level-description {
      text-align: initial;
    }
  }
  .btn {
    z-index: 2;
  }
}
</style>
