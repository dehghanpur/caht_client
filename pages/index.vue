<template>
  <div class="a">


    <get-name></get-name>

    <main-nav></main-nav>
    <div style="max-width: 100%; overflow-x: hidden" >
      <main-header></main-header>


    <div class="item_wrapper">
      <item :data="$store.state.data.items.vue" :revers="true"></item>
      <item :data="$store.state.data.items.react" :revers="false"></item>
      <item :data="$store.state.data.items.angular" :revers="true"></item>
      <item :data="$store.state.data.items.node" :revers="false"></item>
      <item :data="$store.state.data.items.express" :revers="true"></item>
      <item :data="$store.state.data.items.nest" :revers="false"></item>
    </div>
    <main-footer></main-footer>

    </div>
  </div>
</template>

<script>
  import MainNav from "../components/mainNav";
  import MainHeader from "../components/mainHeader";
  import GetName from "../components/getName";

  export default {
    name: "index",
    components: {GetName, MainHeader, MainNav},
    middleware:['initAuth']


  }


</script>

<style scoped>
  .a {
    width: 100%;
    height: 100vh;
  }

  .item_wrapper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    background-image: url("/picture/hero-bg.jpg");
    background-size: 100% 100%;
    background-attachment: fixed;
  }


</style>
