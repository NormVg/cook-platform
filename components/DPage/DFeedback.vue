<script setup>
const feedbackType = ref("feedback");
const message = ref("");
const email = ref("");


const FeedBackOption = [
      { label: "Feedback", value: "feedback" },
      { label: "Issue", value: "issue" },
      { label: "Idea", value: "idea" },

    ]

const handleSelectionChange = async (params) => {
  console.log(params);
  feedbackType.value = params.value
}


const submitFeedback = () => {
  if (!message.value.trim()) {
    alert("Please enter your message.");
    return;
  }

  console.log({
    type: feedbackType.value,
    message: message.value,
    email: email.value || "anonymous",
  });

  alert("Feedback submitted successfully!");
  feedbackType.value = "feedback";
  message.value = "";
  email.value = "";
};
</script>

<template>
  <div class="feedback-wrapper">
    <div id="dt-head">Feedback</div>

    <div id="dt-sub">Organize and manage your code templates</div>

    <div class="feedback-row">
      <label for="email">Email</label>
      <input
        v-model="email"
        type="email"
        class="fb-input"
        placeholder="user@email.com"
        required
      />
    </div>

    <div class="feedback-row">
      <label for="type">Type</label>
      <DropDownMenu default-value="all" @change="handleSelectionChange" :options="FeedBackOption" defaultValue="feedback"/>
    </div>

    <div class="feedback-row vertical">
      <label for="message">Message</label>
      <textarea
        v-model="message"
        class="fb-textarea"
        placeholder="Your message here..."
      ></textarea>
    </div>

    <div class="feedback-row end">
      <button @click="submitFeedback" class="fb-button">Submit</button>
    </div>
  </div>
</template>

<style scoped>
#dt-head {
  font-size: 40px;
  color: whitesmoke;
  font-family: var(--font-k2d);
}

#dt-sub {
  font-size: 15px;
  color: var(--white);
  font-family: var(--font-k2d);
  margin-top: -20px;
  margin-bottom: 20px;
}

.feedback-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: var(--bg2); */
  padding: 5px 20px;

  /* border: 1px solid var(--border); */
  /* width: 100%; */
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
  color: var(--white);
  font-weight: 500;
}

.fb-input {
  flex: 1;
  padding: 10px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--white);
}

.fb-textarea {
  width: 100%;
  min-height: 120px;
  padding: 10px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--white);
  font-family: var(--font-k2d);
}

.fb-button {
  padding: 10px 25px;
  background-color: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  /* border: none; */
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.fb-button:hover {
  /* opacity: .7; */
  background-color: var(--green);
  border: 1px solid transparent;
  color: var(--bg2);
}
</style>
