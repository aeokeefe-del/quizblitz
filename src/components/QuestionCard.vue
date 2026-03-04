<template>
  <section class="question-card">
    <h2 class="question-text">{{ question.question }}</h2>

    <div class="answers">
      <button
        v-for="(ans, idx) in question.answers"
        :key="idx"
        type="button"
        class="answer-btn"
        :class="buttonClass(idx)"
        :disabled="locked"
        @click="handleClick(idx)"
      >
        {{ ans }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionCard",

  props: {
    question: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      locked: false,          // disables all buttons immediately after a click
      selectedIndex: null,    // which button the user clicked
      showCorrect: false,     // whether to highlight the correct answer
    };
  },

  methods: {
    handleClick(idx) {
      if (this.locked) return;

      this.locked = true;
      this.selectedIndex = idx;
      this.showCorrect = true;

      const isCorrect = idx === this.question.correct;

      setTimeout(() => {
        this.$emit("answer", isCorrect);

        // reset highlight/lock state after emitting
        this.locked = false;
        this.selectedIndex = null;
        this.showCorrect = false;
      }, 1000);
    },

    buttonClass(idx) {
      // Only apply highlight classes after a selection has been made
      if (!this.showCorrect) return "";

      const correctIdx = this.question.correct;

      // Always mark the correct answer green
      if (idx === correctIdx) return "correct";

      // If the user clicked a wrong answer, mark that clicked one red
      if (this.selectedIndex === idx && this.selectedIndex !== correctIdx) return "wrong";

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