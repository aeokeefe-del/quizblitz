<template>
  <div v-if="store.gameState === 'end'">
  <h2>Game Over</h2>
  <p>You scored {{ store.score }} of {{ store.questions.length }}</p>
  <div v-if="!store.scoreSubmitted">
    <input
      v-model="store.playerName"
      placeholder="Enter your name"
    />
    <button @click="store.submitScore()">Submit Score</button>
  </div>
  <p v-else>Score submitted! ✓</p>
  <button @click="handleRestart">Play Again</button>
</div>
</template>

<script>
import { useGameStore } from '../stores/gameStore';

export default {
  name: "ScoreBoard",

  setup() {
    const store = useGameStore()
    return { store }
  },
  props: {
  score: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    default: 10
  }
},

  methods: {
    handleRestart() {
      this.$emit("restart");
    }
  }
};
</script>

<style scoped>
.score-board {
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.score {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.restart-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>