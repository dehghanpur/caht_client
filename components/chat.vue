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
          if (this.page !== 0)
            this.firstMessageId = this.messages[0]._id; // for scroll to last message that seen

          const url = `${process.env.baseUrl}/getMessage?page=${parseInt(`${this.messages.length / 10}`)}&community=${this.$store.state.community.community}`;
          const response = await this.$axios.$get(url);
          response.message.forEach(m => {
            this.messages.unshift(m);
          });

          if (response.message.length !== 0)//if all message finished don't increase page number
            this.page = this.page + 1;


        } catch (e) {
          console.log(e)
        }
      },
      scrollToBottom() {
        const objDiv = document.getElementById("chat");

        objDiv.scrollTop = objDiv.scrollHeight;
      }

    },
    fetch() {
      this.fetchMessages();
    },
    updated() {
      //for scrool to last of message thst seen
      const objDiv = document.getElementById("chat");
      if (this.page === 1 || this.newmsg) {
        //scroll to bottom of div
        this.newmsg = false;
        objDiv.scrollTop = objDiv.scrollHeight;
      } else if (this.page > 1) {
        //scroll to last of message that seen
        const o = document.getElementById(this.firstMessageId);
        objDiv.scrollTop = o.offsetTop - 50;
      }

    },
    async mounted() {


      this.socket.on('getMessage', (msg) => {
        this.newmsg = true;
        this.messages.push(msg)
      });
      this.socket.on('online', (list) => {
        this.list = list;
      });


      const e = document.getElementById('chat');
      e.onscroll = () => {
        //if all message has seen then fetch older message from server
        if (e.scrollTop === 0) {
          this.fetchMessages()
        }

      }

    }
    ,
    data() {
      return {
        bottomCondition: false,
        newMsg: false,
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


  @media only screen and (max-width: 900px) {
    .wrapper {
      padding: 100px 10px 70px 10px;

    }

    .chat_wrapper {
      width: 100%;


    }
  }

</style>

