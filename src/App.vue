<template>
  <router-view />
</template>

<style lang="scss">
@import "scss/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("../public/img/mbile-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $bg-color;
  color: white;
}

h1,
h2,
h3,
h4,
h5,
p {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

.btn {
  padding: 5px 0;
  width: 60%;
  background-color: $nav-color;
  color: white;
  border-radius: 15px;
  border: none;
  font-size: 26px;
  font-weight: bold;
  margin: 15px auto;
}

.gradiant {
  background: linear-gradient(90.65deg, #8900ff 0.3%, #f762b9 99.45%);
}

.back {
  position: absolute;
  z-index: 2;
  left: 5%;
  top: 5%;
  width: 48px;
}

.back-arrow {
  position: absolute;
  z-index: 2;
  left: 5%;
  top: 5%;
  width: 24px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $container-color;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media screen and (min-width: 768px) {
  #app {
    background-image: url("../public/img/desktop-bg.png");
  }
}
</style>
