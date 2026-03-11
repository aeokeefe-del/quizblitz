<template>
  <div class="home-view">
    <StartScreen />
  </div>
</template>

<script>
import StartScreen from "@/components/StartScreen.vue";
import { useGameStore } from '../stores/gameStore.js'

export default {
  name: "HomeView",

  data() {
    gameStore: useGameStore()
  },
  components: {
    StartScreen,
    
  },
  mounted() {
    console.log(this.gameStore)
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