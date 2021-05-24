<template>
<div class="wrapper">
  <chat-header :info="info"></chat-header>
  <chat :info="info"></chat>

  <input-box :info="info"></input-box>
</div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        info:{
          id:'',
          color:'',
          border:'',
          image_src:''
        }
      }
    },
    mounted() {
      this.info.id = this.$store.state.community.community;
      this.info.image_src = '/picture/' + this.$store.state.community.community + '.png';
      this.info.color = this.$store.state.data.items[this.info.id].buttonColor;
      this.info.border = `1px solid ${this.color}`;
      console.log(5)

    }


  }
</script>

<style scoped>
  .wrapper {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: flex-start;z-index: 1;
  }

</style>
