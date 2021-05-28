<template>
  <div class="wrapper">
    <!--    list of online person -->
    <online-list @closeList="showOnlineList = false" :list="list" v-if="showOnlineList"></online-list>
    <div class="chat_wrapper">
      <div class="chat" id="chat">
        <!--        show number of person that is online now-->
        <div class="online">
          <h1 @click="showOnlineList  = true" :style="{'text-shadow':`0 0 2px ${info.color}`}">online person
            ({{list.length}})</h1>
        </div>
        <div @click="scrollToBottom()" :class="{'bottom':true,'showBottom':!this.isBottom}">
          <img src="/picture/bottom.png">
        </div>
        <!--        messages-->
        <message v-for="i in messages" :key="i._id" :message="i" :id="i._id"></message>
      </div>

    </div>

  </div>

</template>

<script>
  import OnlineList from "./onlineList";

  export default {
    name: "chat",
    components: {OnlineList},
    props: {
      info: Object,
      socket: {
        default: {},
        type: Object
      }
    },
    methods: {
      async fetchMessages() {
        try {
          if (!this.finish) {
            if (this.page !== 0)
              this.firstMessageId = this.messages[0]._id; // for scroll to last message that seen

            const url = `${process.env.baseUrl}/getMessage?page=${parseInt(`${this.messages.length / 10}`)}&community=${this.$store.state.community.community}`;
            const response = await this.$axios.$get(url);
            response.message.forEach(m => {
              this.messages.unshift(m);
            });
            this.toggleMessage = !this.toggleMessage;
            this.load = true;
            if (response.message.length === 10)//if all message finished don't increase page number
              this.page = this.page + 1;
            if (response.message.length < 10)
              this.finish = true
          }


        } catch (e) {
          console.log(e)
        }
      },
      scrollToBottom() {
        const objDiv = document.getElementById("chat");

        objDiv.scrollTop = objDiv.scrollHeight;
      }

    }
    ,
    async fetch() {
      await this.fetchMessages();
    }
    ,
    updated() {
      if (this.change < 3){
        this.change++;
        this.scrollToBottom();
      }
    }
    ,
    watch: {
      toggleMessage: async function (newMsg, oldMsg) {
        //for scrool to last of message thst seen
        const objDiv = await document.getElementById("chat");
        if ((this.page === 1 && (!this.newmsg || !this.load)) || (this.newmsg && this.isBottom)) {

          //scroll to bottom of div
          objDiv.scrollTop = objDiv.scrollHeight;
        } else if (this.page > 1 && !this.newmsg) {
          //scroll to last of message that seen
          const o = await document.getElementById(this.firstMessageId);
          objDiv.scrollTop = o.offsetTop - 50;
        }
        this.newmsg = false;
      }
    },
    async mounted() {
      const e = await document.getElementById('chat');
      this.socket.on('getMessage', (msg) => {
        this.newmsg = true;
        this.toggleMessage = !this.toggleMessage;
        this.messages.push(msg)
      });
      this.socket.on('online', (list) => {
        this.list = list;
      });


      e.onscroll = () => {
        this.isBottom = e.scrollTop + e.offsetHeight + 10 > e.scrollHeight;
        //if all message has seen then fetch older message from server
        if (e.scrollTop === 0) {
          this.fetchMessages()
        }

      };


    }
    ,
    data() {
      return {
        change: 0,
        isBottom: true,
        toggleMessage: false,
        bottomCondition: false,
        finish: false,
        newmsg: false,
        socket: null,
        page: 0, //save page number of message
        list: [{name: 'mohammad', _id: 'fdfdfssd'}],
        showOnlineList: false, // flag for show online list or not
        messages: [], // array of message that show
        firstMessageId: '' // save id of last message that seen for scroll it

      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 100px 0 70px 0;
    background-color: rgba(0, 0, 0, 0);
  }

  .chat_wrapper {
    width: 75%;
    height: 100%;
    background-image: url("/picture/hero-bg.jpg");
    background-size: 100% 100%;
    position: relative;
    border-radius: 10px;

  }

  .chat {
    padding: 25px 20px 20px 20px;
    width: 100%;
    height: 100%;
    direction: rtl;
    background-color: rgba(0, 0, 0, 0.6);;
    border-radius: 10px;
    overflow-y: scroll;

  }

  .online {
    width: 96%;
    color: black;
    text-align: center;
    font-size: 9pt;
z-index: 100;
    position: absolute;
    top: 0;
    left: 50%;
  }

  .online h1 {
    position: relative;
    background-color: white;
    left: -50%;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border: 2px solid black;
    cursor: pointer;
  }

  .bottom {
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    bottom: 11px;
    left: 15px;
    background-color: white;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    opacity: 0;
    transform: translateY(10px);
  }

  .bottom img {
    width: 60%;
    height: 60%;
  }

  .showBottom {
    opacity: 1;
    transform: translateY(0);
  }


  @media only screen and (max-width: 900px) {
    .wrapper {
      padding: 100px 10px 70px 10px;

    }

    .chat_wrapper {
      width: 100%;


    }
  }

</style>

