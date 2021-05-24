<template>
<div class="wrapper">
  <chat-header></chat-header>
  <chat></chat>
  <input-box></input-box>
</div>
</template>

<script>
  export default {
    name: "index",

  }
</script>

<style scoped>
  .wrapper {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: flex-start;
  }

</style>
