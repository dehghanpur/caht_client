<template>
  <transition name="fade">
    <div v-if="$store.state.community.form" class="container">
      <div class="form">
        <div class="close">
          <p @click="close()">بستن</p>
        </div>
        <h2>{{$store.state.community.community}} community</h2>
        <div :class="{'warning':true,'show':show}">
          <h4>لطفا نام خود را وارد كنيد</h4>

        </div>
        <input @keypress="enterCommunity()" type="text" placeholder="لطفا نام خود را وارد کنید" v-model="name">
        <button @click="enterCommunity()">ورود</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "getName",
    data() {
      return {
        name: '',
        show: false
      }
    },
    methods: {

      close() {
        this.$store.dispatch('community/toggleAction')
        this.$store.dispatch('community/communityAction', {community: ''})
        this.show = false;


      },
      async enterCommunity() {
        if (this.name !== '') {
          try {
            const response = await this.$axios.$post(`${process.env.baseUrl}/setUser`, {
              name: this.name
            });
            const user = response.user;
            console.log(user._id)
            this.$store.dispatch('auth/authenticateUser', {id: user._id, name: user.name});
            this.$store.dispatch('community/nameAction', {name: this.name});
            this.$store.dispatch('community/toggleAction')
            this.$router.push('/community')

          } catch (e) {
            console.log(e)
          }


        } else
          this.show = true
      },

    },
    mounted() {

    }
  }
</script>

<style scoped>
  .warning {
    width: 100%;
    text-align: center;
    margin-top: 10%;
    opacity: 0;
    transition: all 0.2s;
    transform: translateY(-10px);

  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }

  h4 {
    width: 60%;
    background-color: crimson;
    padding: 3px;
    margin: 0 auto;
    font-family: yekan;
    border-radius: 4px;
  }

  .container {
    z-index: 15;
    min-width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 500px;
    height: 400px;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0 0 20px red;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;

  }

  .close {
    width: 100%;
    text-align: center;
    font-size: 16pt;
    padding: 5px;
    font-weight: 600;
    font-family: yekan;


  }

  p:hover {
    transition: all 0.3s;
    color: red;
    cursor: pointer;

  }

  h2 {
    margin-top: 2%;
  }

  input {
    width: 95%;
    border: 1px solid black;
    padding: 10px;
    direction: rtl;
    border-radius: 7px;
    font-size: 12pt;
    font-family: yekan;
    text-align: center;
    margin: 7%;
  }

  button {
    width: 130px;
    border: 1px solid black;
    border-radius: 7px;
    padding: 4px;
    margin-top: 7%;
    background-color: orangered;
    font-family: yekan;
    font-size: 13pt;
  }

  button:hover {
    outline: none;
    box-shadow: 0 0 7px gray;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  @media only screen and (max-width: 750px) {
  .form{
    width: 450px;
  }
  }

</style>
