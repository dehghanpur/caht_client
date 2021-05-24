<template>
  <div class="wrapper">
    <div class="main" :style="{'border':border,'box-shadow':`0 0 2px ${color}`}">
      <div class="input">
          <textarea dir="auto"></textarea>
      </div>
      <div class="send">
        <img src="/picture/send.png">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "inputBox",
    data() {
      return {
        image_src: '',
        id: '',
        border: '',
        color: ''
      }

    },
    mounted() {
      this.id = this.$store.state.community.community;
      this.color = this.$store.state.data.items[this.id].buttonColor;
      this.border = `1px solid ${this.color}`;

    }

  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    position: fixed;
    z-index: 100;
    padding: 10px 0;
    bottom: 0;
    left: 0;

  }

  .main {
    width: 75%;
    height: 90%;
    border-radius: 7px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

  }
  .input{
    width: 95%;
    height: 100%;
  }
  .send{
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input textarea{
    width: 100%;
    height: 100%;
    font-family: yekan;
    font-size: 14pt;
    padding: 5px;
    resize: none;
    border: 1px solid black;
    border-radius: 8px;
  }
  .input textarea:focus{
    border-radius: 10px;

  }
  .send img{
    width: 35px;
    height: 35px;
    transition: all 0.4s;
    cursor: pointer;
  }
  .send img:hover{
    transform: translateX(4px);
  }

  @media only screen and (max-width: 900px) {
    .main {
      width: 100%;
    }
  }

</style>
