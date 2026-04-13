<template>
  <div class="home-view">
    <StartScreen />
    <button @click="startGame">Play</button>
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore.js'
import StartScreen from '../components/StartScreen.vue'

export default {
  name: 'HomeView',

  components: { StartScreen },
  setup() {
    return { store: useGameStore() }
  },

  methods: {
    startGame() {
      this.store.startGame()
      this.$router.push({ name: 'play' })
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>