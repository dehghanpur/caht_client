<template>
<div class="wrapper">
  <chat-header :info="info"></chat-header>
  <chat v-if="showChat" :info="info" :socket="socket"></chat>

  <input-box v-if="showChat" :info="info" :socket="socket"></input-box>
</div>
</template>

<script>
  import {io} from "socket.io-client";

  export default {
    name: "index",
    middleware:'check',
    data(){
      return{
        socket:{},
        showChat:false,
        info:{
          id:'',
          color:'',
          border:'',
          image_src:''
        }
      }
    },
    methods:{
      init(){
        this.info.id = this.$store.state.community.community;
        this.info.image_src = '/picture/' + this.$store.state.community.community + '.png';
        this.info.color = this.$store.state.data.items[this.info.id].buttonColor;
        this.info.border = `1px solid ${this.color}`;
      }
    },
    async mounted() {
      this.socket = await io('https://dehghanpour10-chat-server.herokuapp.com/'); //conncet the socke server
      this.showChat = true; //show chat div

      this.socket.on('connect',()=>{
        this.socket.emit('setRoom',{ //set room of chat
          room:this.$store.state.community.community,
          userId:this.$store.state.auth.id,
          name:this.$store.state.auth.name
        });
      });

      this.init();


    },
    destroyed() {
      this.socket.disconnect();
      this.showChat = false;
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
