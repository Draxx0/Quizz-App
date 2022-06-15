<template>
  <div id="sign-in">
    <nav>
      <img src="../../public/img/logo.png" alt="" />
    </nav>

    <div class="container">
      <div class="card">
        <form action="">
          <div class="input-container">
            <label for="">Name</label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              v-model="usernameInput"
              required
            />
          </div>

          <div class="input-container">
            <label for="">Boy or Girl ?</label>

            <div class="radio-container">
              <label>
                <input
                  type="radio"
                  name="test"
                  value="boy"
                  v-model="userGender"
                />
                <img src="../../public/img/boy-icon.png" />
              </label>

              <label>
                <input
                  type="radio"
                  name="test"
                  value="girl"
                  v-model="userGender"
                />
                <img src="../../public/img/girl-icon.png" alt="" />
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="btn"
            @click="
              getUsername();
              getUserGender();
            "
          >
            <router-link to="/home">GO</router-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data: function () {
    return {
      usernameInput: "",
      userGender: "",

      username: "",
      gender: "",
    };
  },
  methods: {
    getUsername() {
      this.username = this.usernameInput;
      localStorage.setItem("username", this.username);
      window.location.reload();
    },

    getUserGender() {
      this.gender = this.userGender;
      localStorage.setItem("gender", this.gender);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
#sign-in {
  height: 100vh;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: $nav-color;

    img {
      height: 100%;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 70%;
      height: 70%;
      background-color: $container-color;
      border-radius: 10px;
      padding: 10px;

      form {
        display: flex;
        flex-direction: column;
        gap: 35px;
      }

      .input-container:nth-child(1) {
        display: flex;
        flex-direction: column;

        label {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: white;
        }

        input {
          width: 75%;
          padding: 10px 10px;
          margin: auto;
          border: solid 3px $bg-color;
          border-radius: 5px;
          background-color: transparent;
          outline: none;
          caret-color: white;
          font-size: 18px;

          &:focus {
            color: white;
            font-weight: bold;
          }

          &:not(:focus) {
            color: white;
            font-weight: bold;
          }
        }
      }

      .input-container:nth-child(2) {
        display: flex;
        flex-direction: column;

        label {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: white;
        }

        .radio-container {
          display: flex;
          justify-content: center;
          gap: 50px;
          margin-top: 25px;

          img {
            width: 64px;
          }

          [type="radio"] {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
          }

          [type="radio"] + img {
            transform: scale(100%);
            cursor: pointer;
            transition: 0.3s ease-in-out;
          }

          [type="radio"]:checked + img {
            transform: scale(120%);
          }
          [type="radio"]:not(:checked) + img {
            filter: brightness(20%);
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  #sign-in {
    .container {
      .card {
        width: 45%;
        .input-container:nth-child(1),
        .input-container:nth-child(2) {
          label {
            font-size: 1.5rem;
          }
          .radio-container {
            img {
              width: 80px;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1380px) {
  #sign-in {
    .container {
      .card {
        width: 30%;
        .input-container:nth-child(1),
        .input-container:nth-child(2) {
          label {
            font-size: 1.5rem;
          }
          .radio-container {
            img {
              width: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
