<template>
  <div class="wrapper">
    <div class="chat_wrapper">
      <div class="chat"></div>

    </div>

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
    background-color: rgba(0,0,0,0);
  }
  .chat_wrapper{
    width: 100%;
    height: 100%;
    background-image: url("/picture/hero-bg.jpg");
    background-size: 100% 100%;
    position: relative;
    border-radius: 10px;

  }
  .chat{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);;
    border-radius: 10px;

  }
  @media only screen and (max-width: 900px) {
    .wrapper {
      width: 100%;
    }
  }

</style>

