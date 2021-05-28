<template>
  <div class="wrapper">
    <div class="header" :style="{'border':info.border,'box-shadow':`0 0 5px ${info.color}`}">
      <img :src="info.image_src" alt="logo" class="logo">
      <h1 :style="{'color':info.color}">{{info.id}} community</h1>
    </div>

  </div>
</template>

<script>
  export default {
    name: "chatHeader",
    props:{
      info:Object
    },

  }
</script>

<style scoped>
  .wrapper {
    z-index: 5;
    padding: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    position: fixed;
    top: 0;
  }


  .header {
    z-index: 5;
    width: 75%;
    height: 80px;
    margin: 10px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .logo {
    width: 75px;
    height: 75px;
    margin: 0 20px;
  }

  @media only screen and (max-width: 900px) {
    .header {
      width: 100%;
      z-index: 5;
    }
  }

</style>
