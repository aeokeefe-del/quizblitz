<template>
  <div class="play">
    <QuestionCard
      :question="{ question: 'Test?', answers: ['A', 'B', 'C', 'D'], correct: 2 }"
      :selectedAnswer="testAnswer"
      @answer="(i) => { console.log('clicked index:', i); testAnswer = i }"
    />
  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard.vue";
import ScoreBoard from "@/components/ScoreBoard.vue";
import { useGameStore } from '../stores/gameStore.js'

export default {
  name: "PlayView",

  components: {
    QuestionCard,
    ScoreBoard
  },

  setup() {
    const gameStore = useGameStore()
    return { gameStore }
  },

  data() {
    return {
      testAnswer: null,
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
      gameState: "playing", // "playing" | "end"
      playerName: '',
      scoreSubmitted: false
    };
  },

  mounted() {
    this.startGame();
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

      if (this.currentIndex >= this.questions.length) {
        this.gameState = "end";

        // Return to home when game ends
        // this.$router.push({ name: "home" });
      }
    },

    resetGame() {
      // If you ever choose to show ScoreBoard before routing,
      // this allows replay from within the PlayView.
      this.startGame();
    },

    submitScore() {
      // Handle score submission here
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.play-view {
  min-height: 100vh;
}
</style>