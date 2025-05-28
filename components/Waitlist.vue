<script setup>
const email = ref("");

const selected = ref(1);

const cstyle = computed(() => {
  if (selected.value === 0) {
    return [{ opacity: 1 }, { opacity: 0 }, { opacity: 0 }];
  } else if (selected.value === 1) {
    return [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }];
  } else if (selected.value === 2) {
    return [{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }];
  }
});

const isWaiting = ref(false);

const changeSelected = (param) => {
  selected.value = param;
};

const waitlistJoin = async () => {
  if (isWaiting.value) {
    return;
  }

  if (!email.value.trim()) {
    alert("Please enter a valid email address.");
    return;
  }

  isWaiting.value = true;
  const types = ["beginner", "intermediate", "advance"];
  const selectedType = types[selected.value];

  const data = await $fetch("/api/waitlist/add", {
    method: "POST",
    body: { email: email.value, type: selectedType },
  });

  email.value = "";
  selected.value = 1;
  isWaiting.value = false;

  console.log(data);
  alert("added you to waitlist");
};
</script>

<template>
  <div id="waitlist-box">
    <h2>JOIN THE WAITLIST</h2>

    <div id="email-box">
      <div>email <span>$</span></div>
      <input type="text" v-model="email" />
    </div>

    <div id="check-box">
      <div class="check-item" @click="changeSelected(0);">
        <span id="wait-select" :style="cstyle[0]">></span> [A] Beginner (I burn
        water)
      </div>

      <div class="check-item" @click="changeSelected(1);" >
        <span id="wait-select" :style="cstyle[1]">></span> [B] Intermediate (I
        can follow recipes)
      </div>

      <div class="check-item" @click="changeSelected(2);">
        <span id="wait-select" :style="cstyle[2]">></span> [C] Advanced (I
        experiment with recipes)
      </div>
    </div>

    <div id="join-btn" @click="waitlistJoin()">JOIN</div>
  </div>
</template>

<style scoped>
#waitlist-box {
  background-color: var(--bg2);
  margin: 50px auto;
  width: 50vw;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  border-radius: 5px;
}

#join-btn {
  width: 90%;
  border: 1px solid var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  font-size: 18px;
  color: var(--green);
  transition: all ease-in-out 200ms;
user-select: none;
}

#join-btn:hover{
  background-color: var(--green);
  color: var(--bg2);

}


#join-btn:active{
  letter-spacing: 5px;
}

h2 {
  font-size: 30px;
  color: var(--green);
}

#check-box{
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  cursor: pointer;
  font-family: var(--term-font);


}

#wait-select{
  transition: all ease-in-out 200ms;
}

#email-box{
  width: 90%;
  font-family: var(--term-font);
}

#email-box input {
  width: 100%;

  background-color: var(--bg2);
  border: none;
  border-bottom: 3px solid var(--green);
  font-family: var(--font);
  color: whitesmoke;
  font-size: 20px;
  margin-top: 10px;
}

#email-box input:focus {
  background-color: var(--bg2);
  border: none;
  outline: none;
  border-bottom: 3px dotted var(--green);
}

#wait-select{
  color: var(--green);
}


@media (max-width: 640px) {

#waitlist-box{
  width: 90%;
}

h2{
  font-size: 25px;
}

.check-item{
  font-size: 14px;
  font-weight: 800;
}


#check-box{
  width: 100%;
gap: 20px;

}

}

</style>
