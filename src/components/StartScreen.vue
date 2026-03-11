<template>
  <section class="start-screen">
    <h1 class="title">QuizBlitz</h1>
    <p class="tagline">Fast questions. Quick reflexes. Big bragging rights.</p>

    <button class="play-btn" type="button" @click="goToPlay">
      Play
    </button>
  </section>
</template>

<script>
export default {
  name: "StartScreen",
  methods: {
    goToPlay() {
      this.$router.push({ name: "play" });
    },
  },
};
</script>

<style scoped>
.start-screen {
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: 3rem;
  margin: 0 0 0.5rem;
}

.tagline {
  margin: 0 0 1.5rem;
  opacity: 0.8;
  max-width: 32rem;
}

.play-btn {
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
}
</style>