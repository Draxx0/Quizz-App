<script setup>
import { ref, computed } from "vue";

const userGender = localStorage.getItem("userGender");

const questions = ref([
  {
    question:
      "Qui sont les deux premiers hommes à avoir mis un pied sur la lune ?",
    answer: 0,
    options: [
      "Buzz Aldrin et Neil Armstrong",
      "Arnold Richard et Neil Armstrong",
      "Buzz Aldrin et Michael Collins",
      "Arnold Richard et Michael Collins",
    ],
    selected: null,
  },
  {
    question: "Quelle est la plus grande planète du système solaire ?",
    answer: 2,
    options: ["Saturne", "Mars", "Jupiter", "Uranus"],
    selected: null,
  },
  {
    question: "Quelle est la plus petite planète du système solaire ?",
    answer: 2,
    options: ["Pluton", "La Terre", "Mercure", "Neptune"],
    selected: null,
  },
  {
    question: "Qui a découvert que la terre tournait autour du soleil ?",
    answer: 0,
    options: [
      "Nicolas Copernic",
      "Claude Ptolémée",
      "Giordano Bruno",
      "Galilée",
    ],
    selected: null,
  },
]);
const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected != null && q.answer == q.selected) {
      console.log("correct");
      value++;
    }
  });
  return value;
});
const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});
const SetAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value = null;
};
const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    return;
  }

  quizCompleted.value = true;
};
</script>

<template>
  <main class="Quiz">
    <h1 class="quiz-title">Astronomie</h1>

    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <!-- <span class="score">Score {{ score }}/{{ questions.length }}</span> -->
      </div>

      <img
        src="../../../../public/img/astronomie-quiz-img1.png"
        alt=""
        class="quiz-img"
      />

      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :for="'option' + index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <input
            type="radio"
            :id="'option' + index"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="SetAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>

      <button
        @click="NextQuestion"
        :disabled="!getCurrentQuestion.selected"
        class="quiz-btn"
      >
        {{
          getCurrentQuestion.index == questions.length - 1
            ? "Finish"
            : getCurrentQuestion.selected == null
            ? "Select an option"
            : "Next question"
        }}
      </button>
    </section>

    <section v-else class="finish-quiz">
      <img
        v-if="userGender === 'girl'"
        src="../../../../public/img/girl-icon.png"
        alt=""
      />
      <img v-else src="../../../../public/img/boy-icon.png" alt="" />
      <h2 v-if="score >= 2">Bien joué vous avez réussi le Quiz !</h2>
      <h2 v-else>
        Dommage vous avez échoué retenter votre chance une prochaine fois !
      </h2>
      <div class="route-container">
        <router-link v-if="score >= 2" class="btn gradiant" to=""
          >Voir les détails</router-link
        >
        <router-link v-else class="btn gradiant" to="/levels/astronomie"
          >Réesayer</router-link
        >
        <router-link class="home" to="/home">Accueil</router-link>
      </div>
      <p>Votre score est de {{ score }}/{{ questions.length }}</p>
    </section>
  </main>
</template>

<style lang="scss">
@import "../../../scss/variables.scss";
.Quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  height: 100vh;
  background-image: url("../../../../public/img/finish-quiz-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .quiz-title {
    font-size: 2rem;
    margin-top: 25px;
  }
  .quiz {
    padding: 1rem;
    width: 100%;
    max-width: 640px;
    border-radius: 0.5rem;
  }
  .quiz-info {
    margin-bottom: 1rem;
  }
  .quiz-info .question {
    font-size: 1.25rem;
  }
  .quiz-img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 10px;
    margin: 25px 0 0 0;
  }
  .quiz-info.score {
    color: #fff;
    font-size: 1.25rem;
  }
  .options {
    display: grid;
    grid-template-columns: repeat(2, auto);
    place-items: center;
    grid-gap: 1rem;
    margin: 50px 0;
  }
  .option {
    width: 100%;
    height: 50px;
    padding: 5px;
    display: block;
    background-color: #271c36;
    border-radius: 0.5rem;
    cursor: pointer;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
  .option:hover {
    background-color: #2d213f;
  }
  .option.correct {
    background-color: #2cce7d;
  }
  .option.wrong {
    background-color: #ff5a5f;
  }
  .option:last-of-type {
    margin-bottom: 0;
  }
  .option.disabled {
    opacity: 0.5;
  }
  .option input {
    display: none;
  }
  .quiz-btn {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background: linear-gradient(90.65deg, #8900ff 0.3%, #f762b9 99.45%);
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-radius: 0.5rem;
  }
  .quiz-btn:disabled {
    opacity: 0.5;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    color: white;
    font-size: 1.5rem;
    text-align: center;
  }
  .finish-quiz {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    overflow: hidden;

    img {
      width: 144px;
    }

    h2 {
      font-size: 1.5rem;
    }
    .btn {
      font-size: 1.2rem;
      width: auto;
      padding: 10px;
    }
    .home {
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .route-container {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
}
</style>
