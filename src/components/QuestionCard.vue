<template>
  <div class="question-card">
    <p class="question-text">{{ question.question }}</p>
    <div class="answers">
      <button
        v-for="(answer, index) in question.answers"
        :key="index"
        class="answer-btn"
        :class="buttonClass(index)"
        :disabled="selectedAnswer !== null"
        @click="selectAnswer(index)"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",

  props: {
    question: {
      type: Object,
      required: true,
      // { question: String, answers: Array, correct: Number }
    },
    selectedAnswer: {
      type: [Number, null],
      default: null,
      // null = no answer chosen yet; 0–3 = index of the button the player clicked
    },
  },

  methods: {
    selectAnswer(index) {
      if (this.selectedAnswer !== null) return;
      this.$emit("answer", index);
    },

    buttonClass(index) {
      if (this.selectedAnswer === null) return "";
      if (index === this.question.correct) return "correct";
      if (index === this.selectedAnswer) return "wrong";
      return "";
    },
  },
};
</script>

<style scoped>
.question-card {
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
}

.question-text {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}

.answers {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 28rem;
  margin: 0 auto;
}

.answer-btn {
  padding: 0.9rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
}

.answer-btn:disabled {
  cursor: not-allowed;
  opacity: 0.9;
}

.answer-btn.correct {
  border-color: #1f7a1f;
  background: rgba(31, 122, 31, 0.15);
}

.answer-btn.wrong {
  border-color: #b3261e;
  background: rgba(179, 38, 30, 0.15);
}
</style>
