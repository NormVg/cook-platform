<script setup>
import { usePopupStore } from '~/store/popupStore'

const feedbackType = ref('feedback')
const message = ref('')
const email = ref('')

const FeedBackOption = [
  { label: 'Feedback', value: 'feedback' },
  { label: 'Issue', value: 'issue' },
  { label: 'Idea', value: 'idea' }
]

const handleSelectionChange = (params) => {
  feedbackType.value = params.value
}

const submitFeedback = () => {
  if (!message.value.trim()) {
    return alert('Please enter your message.')
  }

  console.log({
    type: feedbackType.value,
    message: message.value,
    email: email.value || 'anonymous'
  })

  alert('Feedback submitted successfully!')
  feedbackType.value = 'feedback'
  message.value = ''
  email.value = ''
}

const popStore = usePopupStore()
onMounted(() => {
  popStore.setIsLoadedPop(true)
  popStore.setIsLoadedPop(false)
})
</script>

<template>
  <section class="page-container">
    <header>
      <h1>Feedback</h1>
      <p>Organize and manage your code templates</p>
    </header>

    <form class="feedback-wrapper" @submit.prevent="submitFeedback">
      <div class="feedback-row">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="you@domain.com"
          required
          class="fb-input"
        />
      </div>

      <div class="feedback-row">
        <label for="type">Type</label>
        <DropDownMenu
          id="type"
          :options="FeedBackOption"
          @change="handleSelectionChange"
          :default-value="feedbackType"
        />
      </div>

      <div class="feedback-row vertical">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Your message here..."
          class="fb-textarea"
        ></textarea>
      </div>

      <div class="feedback-row end">
        <button type="submit" class="fb-button">Submit</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.page-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  font-family: var(--font-k2d);
  color: var(--white);
}

.page-container header h1 {
  font-size: 36px;
  margin-bottom: 4px;
}

.page-container header p {
  font-size: 16px;
  color: var(--fg2);
  margin-bottom: 20px;
}

.feedback-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--bg2);
  padding: 30px;
  border-radius: 10px;
  border: 1px solid var(--border);
}

.feedback-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.feedback-row.vertical {
  flex-direction: column;
  align-items: flex-start;
}

.feedback-row.end {
  justify-content: flex-end;
}

label {
  min-width: 100px;
  font-weight: 500;
  color: var(--white);
}

.fb-input {
  flex: 1;
  padding: 10px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--white);
}

.fb-textarea {
  width: calc(100% - 20px);
  min-height: 120px;
  padding: 10px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--white);
  font-family: var(--font-k2d);
  resize: vertical;
  overflow: auto;
}

.fb-button {
  padding: 10px 25px;
  background: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.fb-button:hover {
  background-color: var(--green);
  border-color: transparent;
  color: var(--bg2);
}
</style>
