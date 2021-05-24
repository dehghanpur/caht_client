<template>
  <div class="wrapper">
    <div class="chat"></div>

  </div>

</template>

<script>
    export default {
        name: "chat"
    }
</script>

<style scoped>
  .wrapper{
    width: 75%;
    height: 100%;
    position: fixed;
    padding: 100px 0 70px 0;
  }
  .chat{
    width: 100%;
    height: 100%;
    background-color: blue;
  }
  @media only screen and (max-width: 900px) {
    .wrapper {
      width: 100%;
    }
  }

</style>

