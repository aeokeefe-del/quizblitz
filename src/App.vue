<template>
  <div id="app">
    <StartScreen v-if="gameState === 'start'" @start="startGame" />

    <QuestionCard
      v-else-if="gameState === 'playing'"
      :question="questions[currentIndex]"
      @answer="handleAnswer"
    />

    <ScoreBoard
      v-else
      :score="score"
      @restart="resetGame"
    />
  </div>
</template>

<script>
import StartScreen from "./components/StartScreen.vue";
import QuestionCard from "./components/QuestionCard.vue";
import ScoreBoard from "./components/ScoreBoard.vue";

export default {
  name: "App",

  components: {
    StartScreen,
    QuestionCard,
    ScoreBoard,
  },

  data() {
    return {
      questions: [
        {
          question: "Which country invented pizza?",
          answers: ["France", "Italy", "Spain", "Greece"],
          correct: 1,
        },
        {
          question: "What is the largest planet in our solar system?",
          answers: ["Saturn", "Earth", "Jupiter", "Neptune"],
          correct: 2,
        },
        {
          question: "Which element has the chemical symbol 'Na'?",
          answers: ["Nitrogen", "Neon", "Sodium", "Nickel"],
          correct: 2,
        },
        {
          question: "Who wrote the play 'Romeo and Juliet'?",
          answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
          correct: 1,
        },
        {
          question: "Which continent is the Sahara Desert located in?",
          answers: ["Asia", "Africa", "Australia", "South America"],
          correct: 1,
        },
        {
          question: "What is the square root of 81?",
          answers: ["7", "8", "9", "10"],
          correct: 2,
        },
        {
          question: "Which organ pumps blood through the body?",
          answers: ["Lungs", "Brain", "Heart", "Liver"],
          correct: 2,
        },
        {
          question: "Which language is primarily spoken in Brazil?",
          answers: ["Spanish", "Portuguese", "French", "English"],
          correct: 1,
        },
        {
          question: "Which metal is liquid at room temperature?",
          answers: ["Iron", "Mercury", "Copper", "Aluminum"],
          correct: 1,
        },
        {
          question: "What is the longest river in the world?",
          answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          correct: 1,
        },
      ],
      currentIndex: 0,
      score: 0,
      gameState: "start", // "start" | "playing" | "end"
    };
  },

  methods: {
    startGame() {
      this.gameState = "playing";
      this.currentIndex = 0;
      this.score = 0;
    },

    handleAnswer(isCorrect) {
      if (isCorrect) {
        this.score++;
      }

      this.currentIndex++;

      if (this.currentIndex === this.questions.length) {
        this.gameState = "end";
      }
    },

    resetGame() {
      this.gameState = "start";
    },
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>