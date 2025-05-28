<script setup>
import HomeTerminal from './HomeTerminal.vue';
import MyBtn from './MyBtn.vue';

</script>

<template>
  <div id="hero-box">
    <span>

    <h1>COOK</h1>

    <h3>CODE COOKING FOR LAZY DEVELOPERS</h3>

    <p>
      A everyday CLI tool for you, like a swiss army knife?
      But for the developers.
    </p>

    <div id="waitlist-btn" >
      <!-- WAITLIST -->
      <MyBtn color="green" :callback="() => scrollToElement('#waitlist-box')">
        WAITLIST
      </MyBtn>
    </div>

    </span>

    <HomeTerminal/>

  </div>
</template>

<style scoped>

/* #hero-box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */

#hero-box{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 20px;
  /* flex-direction: column; */
}

/* #hero-box span{
  border: 1px solid salmon;
} */

h1{
  font-size: 80px;
  margin: 10px;
  color: whitesmoke;
  /* margin-top: 50px; */
}

h3{
  font-size: 25px;
  margin: 10px;
  font-weight: 400;
  color: var(--green);
  font-family: var(--term-font);
}

p{
  font-size: 18px;
  font-family: var(--term-font);
  margin-left: 10px;

}

#waitlist-btn{
  margin-bottom: 50px;
margin-top: 50px;
margin-left: 20px;

}

/* #waitlist-btn{
  border: 2px solid var(--green);
  border-radius: 7px;
  padding: 10px;
  color: var(--green);
  font-weight: 600;
  margin-bottom: 50px;
  transition: all 200ms ease-in-out;
}



#waitlist-btn:hover{
  background-color: var(--green);
  color: var(--bg);
} */


@media (max-width: 640px) {

#hero-box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 0px;

}

h3{
  text-align: center;

}

h1{

  margin-top: 50px;
  text-align: center;
}

p{
  text-align: center;
}

#waitlist-btn{
  /* border: 1px solid salmon; */
  display: flex;
  justify-content: center;
  align-items: center;
}


}

</style>
