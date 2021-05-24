<template>
  <div class="wrapper">
    <online-list @closeList="showOnlineList = false" :list="list" v-if="showOnlineList"></online-list>
    <div class="chat_wrapper">

      <div class="chat">
        <div class="online">
          <h1 @click="showOnlineList  = true" :style="{'text-shadow':`0 0 2px ${info.color}`}">online person ({{list.length}})</h1>
        </div>
       <message :message="one"></message>
       <message :message="two"></message>
       <message :message="two"></message>
       <message :message="two"></message>
       <message :message="two"></message>
       <message :message="two"></message>
       <message :message="two"></message>
      </div>

    </div>

  </div>

</template>

<script>
    import OnlineList from "./onlineList";
    export default {
        name: "chat",
      components: {OnlineList},
      props:{
          info:Object
      },
      data(){
          return{
            list:[{name:'mohammad',_id:'fdfdfd'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfds'},{name:'mohammad',_id:'fdfdfssd'}],
            showOnlineList:false,
            one:{
              author:'mohammad',
              content:'خب دوستان فرم زیر برای جمع اوری امضا نسبت به این نامه هست.\n' +
                'لطفا در صورت موافقت با موارد درج شده در نامه، نام و نام خانوادگیتون رو در فرم درج کنید تا پیوست به ایمیلی شود که برای دکتر میرروشندل ارسال میشه.\n' +
                'متشکرم.',
              date:'7:40 pm'
            },
            two:{
              author:'محمد',
              content:
                'خب دوستان فرم زیر برای جمع اوری امضا نسبت به این نامه هست.\n' +
                'لطفا در صورت موافقت با موارد درج شده در نامه، نام و نام خانوادگیتون رو در فرم درج کنید تا پیوست به ایمیلی شود که برای دکتر میرروشندل ارسال میشه.\n' +
                'متشکرم.',
              date:'7:51 pm'
            }
          }
      }
    }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 100px 0 70px 0;
    background-color: rgba(0,0,0,0);
  }
  .chat_wrapper{
    width: 75%;
    height: 100%;
    background-image: url("/picture/hero-bg.jpg");
    background-size: 100% 100%;
    position: relative;
    border-radius: 10px;

  }
  .chat{
    padding: 25px 20px 20px 20px;
    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0,0.6);;
    border-radius: 10px;
    overflow-y:scroll ;

  }
  .online{
    width: 96%;
    color: black;
    text-align: center;
    font-size: 9pt;

    position: absolute;
    top: 0;
    left: 50%;
  }
  .online h1{
    position: relative;
    background-color: white;
    left: -50%;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border: 2px solid black;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    .wrapper{
      padding: 100px 10px 70px 10px;

    }
    .chat_wrapper{
      width: 100%;


    }
  }

</style>

