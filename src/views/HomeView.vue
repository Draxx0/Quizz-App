<template>
  <div class="home">
    <mobileNav />
    <router-link to="/" @click="clearLocalStorage()">
      <img src="../../public/img/disconnect.png" alt="" class="disconnect" />
    </router-link>
    <div class="account-informations">
      <img
        v-if="gender === 'girl'"
        src="../../public/img/girl-icon.png"
        alt=""
        class="account-img"
      />
      <img
        v-else
        src="../../public/img/boy-icon.png"
        alt=""
        class="account-img"
      />
      <h1 class="account-username">{{ username }}</h1>

      <div v-if="userPoints <= 99" class="level-title-container">
        <img src="../../public/img/crown.png" alt="" />
        <h2 class="level-title">Débutant</h2>
      </div>

      <div v-else-if="userPoints <= 199" class="level-title-container">
        <img src="../../public/img/crown.png" alt="" />
        <h2 class="level-title">Amateur</h2>
      </div>

      <div v-else-if="userPoints <= 299" class="level-title-container">
        <img src="../../public/img/crown.png" alt="" />
        <h2 class="level-title">Pro</h2>
      </div>

      <div v-else-if="userPoints <= 399" class="level-title-container">
        <img src="../../public/img/coin.png" alt="" />
        <h2 class="level-title">Expert</h2>
      </div>

      <div v-else-if="userPoints <= 499" class="level-title-container">
        <img src="../../public/img/diamond.png" alt="" />
        <h2 class="level-title">Expert +</h2>
      </div>

      <div v-else-if="userPoints <= 599" class="level-title-container">
        <img src="../../public/img/crown.png" alt="" />
        <h2 class="level-title">Maître</h2>
      </div>

      <div v-else-if="userPoints <= 699" class="level-title-container">
        <img src="../../public/img/crown.png" alt="" />
        <h2 class="level-title">Dieu</h2>
      </div>

      <div v-else class="level-title-container">
        <img src="../../public/img/crown.png" alt="" />
        <h2 class="level-title">Légende</h2>
      </div>

      <div class="stats-container">
        <div class="card-stats" v-for="card in cardsStats" :key="card">
          <!--INSERER ICI VFOR DES CARDS STATS AVEC LEVELS / BADGES ET PTS DYNAMIQUES-->
          <span class="card-stats-number">{{ card.value }}</span>
          <span class="card-stats-title">{{ card.title }}</span>
        </div>
      </div>

      <router-link to="/levels" class="btn gradiant">
        Lancer un quizz
        <!-- <button class="btn gradiant">Start game</button> -->
      </router-link>

      <div class="friends-list-container">
        <h2 class="friends-list-title">Liste d'amis</h2>

        <div class="friends-row">
          <!--INSERER ICI VFOR DES FRIENDS-->
          <div class="friend" v-for="friend in friendsList" :key="friend">
            <img
              v-if="friend.gender === 'boy'"
              src="../../public/img/boy-icon.png"
              alt=""
              class="friend-icon"
            />
            <img
              v-else
              src="../../public/img/girl-icon.png"
              alt=""
              class="friend-icon"
            />
            <div class="friend-infos">
              <h3 class="friend-name">{{ friend.name }}</h3>
              <span>-</span>
              <h3 class="friend-points">{{ friend.points }}</h3>
              <img
                v-if="friend.levelTitle === 'master'"
                src="../../public/img/crown.png"
                alt=""
                class="friend-level-icon"
              />
              <img
                v-else-if="friend.levelTitle === 'expert+'"
                src="../../public/img/diamond.png"
                alt=""
                class="friend-level-icon"
              />
              <img v-else src="../../public/img/coin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mobileNav from "../components/mobileNav.vue";
export default {
  name: "HomeView",
  components: {
    mobileNav,
  },
  data() {
    return {
      username: "",
      gender: "",
      userPoints: 0,
      cardsStats: [
        {
          value: 1,
          title: "Niveau",
        },
        {
          value: 0,
          title: "Points",
        },
        {
          value: 0,
          title: "Badges",
        },
      ],
      friendsList: [
        {
          name: "Mike",
          gender: "boy",
          points: "519 P",
          levelTitle: "master",
        },

        {
          name: "John",
          gender: "boy",
          points: "500 P",
          levelTitle: "master",
        },

        {
          name: "Anne",
          gender: "girl",
          points: "450 P",
          levelTitle: "expert+",
        },

        {
          name: "Ruby",
          gender: "girl",
          points: "450 P",
          levelTitle: "expert+",
        },

        {
          name: "Constant",
          gender: "girl",
          points: "388 P",
          levelTitle: "expert",
        },
      ],
    };
  },

  methods: {
    clearLocalStorage() {
      localStorage.removeItem("username", "gender");
    },
  },

  mounted() {
    this.username = localStorage.getItem("username");
    this.gender = localStorage.getItem("gender");
    this.userPoints = this.cardsStats[1].value;
    console.log(localStorage);
  },
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
.home {
  padding-bottom: 50px;
  .disconnect {
    position: absolute;
    left: 5%;
    top: 2%;
    width: 48px;
  }
  .account-informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .account-img {
      width: 112px;
      margin-top: 50px;
    }

    .account-username {
      font-size: 24px;
      font-weight: bold;
      color: white;
    }

    .level-title-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 10px;
      background-color: white;
      color: $level-color;
      border-radius: 15px;
      width: 35%;
    }
  }

  .stats-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px 0;

    .card-stats {
      padding: 10px;
      width: 20%;
      border-radius: 10px;
      background-color: $container-color;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      .card-stats-number {
        color: white;
        font-weight: bold;
        font-size: 1.3rem;
      }
      .card-stats-title {
        color: rgb(163, 163, 163);
        font-weight: bold;
      }
    }
  }

  .friends-list-container {
    width: 80%;
    margin: auto;
    margin: 50px auto;
    background-color: $container-color;
    padding: 20px;
    border-radius: 10px;
    color: white;

    .friends-row {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      margin-top: 50px;

      .friend {
        width: 100%;
        display: flex;
        gap: 25px;
        .friend-infos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .friend-icon {
          width: 52px;
        }
      }
    }
  }

  .btn {
    font-size: 1.3rem;
    margin-top: 50px;
    width: 45%;
    padding: 10px 25px;
    text-decoration: none;
  }
}
</style>
