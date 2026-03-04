<template>
  <section class="score-board">
    <h1 class="title">Game Over</h1>

    <p class="score">
      Your score: {{ score }} / 10
    </p>

    <button class="restart-btn" @click="restartGame">
      Play Again
    </button>
  </section>
</template>

<script>
export default {
  name: "ScoreBoard",

  props: {
    score: {
      type: Number,
      required: true
    }
  },

  methods: {
    restartGame() {
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