import { AppHeader } from '../components';
<template>
  <div>
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="page-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scope>
.app-header {
  position: fixed;
  height: 3rem;
  z-index: 1;
  width: 100%;
  background-color: white;
}

.page-container {
  margin: auto;
  padding-top: 3rem;
}
</style>
