<script setup>
import MyBtn from "./MyBtn.vue";

const waitlistCallback = () => {
scrollToElement("#wait-box")
};
</script>

<template>
  <Header />
  <div id="hero-box">
    <div id="main-box">
      <div id="main-head">COOK</div>
      <div id="main-sub">CODE COOKING FOR LAZY<br />DEVELOPERS</div>
      <div id="main-des">
        A everyday CLI tool for you,<br />like Swiss Army knife,<br />But for
        the developers
      </div>
      <div id="main-btn">
        <MyBtn color="pink" :callback="waitlistCallback"> WAITLIST </MyBtn>
      </div>
    </div>
    <HeroTerminal />
  </div>
</template>

<style scoped>
#main-head {
  color: var(--green);
  font-weight: bold;
  font-size: 100px;
}

#hero-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#main-sub {
  font-size: 38.2px;
  color: var(--blue);
}

#main-des {
  font-size: 23.61px;
  color: var(--white);
}

#main-box {
  /* border: 1px solid red; */

  gap: 30px;
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
}


@media (max-width: 640px) {
#hero-box{
  flex-direction: column;
  align-items: flex-start;
  gap:30px;
}



#main-head {
  font-size: 70px;
}

#main-sub {
  font-size: 25px;
}

#main-des {
  font-size: 17px;
  color: var(--white);
}





}
</style>
