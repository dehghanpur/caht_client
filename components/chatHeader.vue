<template>
  <div class="wrapper">
    <div class="header" :style="{'border':border,'box-shadow':`0 0 5px ${color}`}">
      <img :src="image_src" alt="logo" class="logo">
      <h1 :style="{'color':color}">{{id}} community</h1>
    </div>

  </div>
</template>

<script>
  export default {
    name: "chatHeader",
    data() {
      return {
        image_src: '',
        id: '',
        border: '',
        color: ''
      }

    },
    mounted() {
      this.$store.dispatch('loading/loading', {condition: false});
      this.id = this.$store.state.community.community;
      this.image_src = '/picture/' + this.$store.state.community.community + '.png';
      this.color = this.$store.state.data.items[this.id].buttonColor;
      this.border = `1px solid ${this.color}`;

    }
  }
</script>

<style scoped>
  .wrapper {
    z-index: 100;
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
    width: 75%;
    height: 80px;
    margin: 10px;
    border: 1px solid red;
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
    }
  }

</style>
