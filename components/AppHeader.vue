<template>
  <header class="header">
    <div class="logo">
      <img class="logo_house" :src="houseLogo" alt="JET house logo" />
      <img class="logo_text" :src="textLogo" alt="just eat" />
    </div>
  </header>
</template>

<script setup lang="ts">
import houseLogo from "~/public/JET-House-Logo.png";
import textLogo from "~/public/JET-Just-Eat.png";
</script>

<style lang="scss" scope>
.header {
  padding: 15px;
}

.logo {
  display: flex;
  align-items: end;
  gap: 5px;

  &_house {
    height: 20px;
  }

  &_text {
    height: 15px;
  }
}
</style>
