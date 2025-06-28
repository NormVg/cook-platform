<script setup>
</script>

<template>
  <div class="soon-wrapper">
    <div class="soon-box">
      <div class="soon-line">prompts book</div>
      <div class="soon-subtle">coming soon</div>
    </div>
    <div class="construction-tape"></div>
  </div>
</template>

<style scoped>
.soon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 100%;
  font-family: var(--font-mont);
  background-color: var(--bg2);
  padding: 20px;

}

.soon-box {
  text-align: center;
  padding: 10px 20px;

}

.soon-line {
  font-size: 24px;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 10px;
}

.soon-subtle {
  font-size: 14px;
  color: var(--fg2);
  opacity: 0.4;
  letter-spacing: 1px;
}

/* 🎞️ Thin animated construction tape */
.construction-tape {
  width: 200px;
  height: 12px;
  /* margin-top: 20px; */
  background: repeating-linear-gradient(
    45deg,
    var(--bg),
    var(--bg) 6px,
    var(--bg2) 6px,
    var(--bg2) 12px
  );
  position: relative;
  overflow: hidden;
}

.construction-tape::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    var(--bg3),
    var(--bg3) 6px,
    var(--bg2) 6px,
    var(--bg2) 12px
  );
  animation: tapeScroll 4s linear infinite;
}

@keyframes tapeScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
