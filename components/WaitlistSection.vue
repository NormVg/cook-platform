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

const isWaiting = ref(false)

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



  isWaiting.value = true
  const types = ["beginner", "intermediate", "advance"];
  const selectedType = types[selected.value];

  const data = await $fetch("/api/waitlist/add", {
    method: "POST",
    body: { "email":email.value,"type":selectedType },
  });

  email.value = "";
  selected.value = 1;
  isWaiting.value = false

  console.log(data)
  alert("added you to waitlist")
};
</script>

<template>
  <div id="wait-box">
    <div id="wait-head">JOIN THE WAITLIST</div>

    <div id="email-box">
      email $ <input type="email" v-model="email" id="email-inp" />
    </div>

    <div id="wait-type-box">
      <div
        id="wait-type-item"
        @click="
          () => {
            changeSelected(0);
          }
        "
      >
        <span id="wait-select" :style="cstyle[0]">></span> [A] Beginner (I burn
        water)
      </div>

      <div
        id="wait-type-item"
        @click="
          () => {
            changeSelected(1);
          }
        "
      >
        <span id="wait-select" :style="cstyle[1]">></span> [B] Intermediate (I
        can follow recipes)
      </div>

      <div
        id="wait-type-item"
        @click="
          () => {
            changeSelected(2);
          }
        "
      >
        <span id="wait-select" :style="cstyle[2]">></span> [C] Advanced (I
        experiment with recipes)
      </div>
    </div>

    <MyBtn color="red" :callback="waitlistJoin"> JOIN </MyBtn>
  </div>
</template>

<style scoped>
#wait-box {
  height: calc(70vh - 50px);
  border: 5px solid var(--white);
  margin: 200px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 25px 0px;
  font-size: 23.61;
  user-select: none;
}

#wait-select {
  color: var(--green);
  transition: all 200ms ease-in-out;
}

#wait-head {
  font-size: 30px;
  color: var(--blue);
  margin-top: 25px;
}

#wait-type-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

#wait-type-item {
  cursor: pointer;
}

#email-box {
  color: var(--green);
}

#email-box input {
  background-color: var(--bg);
  border: none;
  border-bottom: 3px solid var(--red);
  font-family: var(--font);
  width: 200px;
  color: whitesmoke;
}

#email-box input:focus {
  background-color: var(--bg);
  border: none;
  outline: none;
  border-bottom: 3px dotted var(--red);
}


@media (max-width: 640px) {
#wait-box{
  margin:15px;
}


#wait-head{
  font-size:25px
}

#wait-type-box{
  /* border:1px solid red; */
  margin:20px;
  gap: 20px;
}


#wait-type-item {
font-size: 13px;
}
}
</style>
