<template>
  <div class="home">
    <StartScreen @start="goToGame" />
  </div>
</template>

<script>
import StartScreen from "@/components/StartScreen.vue";

export default {
  name: "HomeView",

  components: {
    StartScreen
  },

  methods: {
    goToGame() {
      this.$router.push({ name: "play" });
    }
  }
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>