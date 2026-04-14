<template>
  <div class="auth-view">
    <form class="auth-form" @submit.prevent="handleSubmit">
      <h1>Log In</h1>

      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required autocomplete="email" />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" required autocomplete="current-password" />

      <p v-if="error" class="error">{{ error }}</p>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Logging in…' : 'Log In' }}
      </button>

      <p class="switch">
        No account? <router-link :to="{ name: 'register' }">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore.js'

export default {
  name: 'LoginView',

  setup() {
    return { store: useGameStore() }
  },

  data() {
    return {
      email: '',
      password: '',
      error: null,
      loading: false,
    }
  },

  methods: {
    async handleSubmit() {
      this.error = null
      this.loading = true
      try {
        await this.store.login(this.email, this.password)
        this.$router.push({ name: 'home' })
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.auth-view {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 22rem;
}

h1 {
  margin: 0 0 0.5rem;
  font-size: 1.75rem;
  text-align: center;
}

label {
  font-size: 0.875rem;
  margin-bottom: -0.25rem;
}

input {
  padding: 0.6rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1rem;
}

button {
  margin-top: 0.25rem;
  padding: 0.7rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: #b3261e;
  font-size: 0.875rem;
  margin: 0;
}

.switch {
  text-align: center;
  font-size: 0.875rem;
  margin: 0;
}
</style>
