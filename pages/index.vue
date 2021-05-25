<template>
  <div class="main">


    <get-name></get-name>

    <main-nav></main-nav>
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
</template>

<script>
  import MainNav from "../components/mainNav";
  import MainHeader from "../components/mainHeader";
  import GetName from "../components/getName";

  export default {
    name: "index",
    scrollToTop: true,
    components: {GetName, MainHeader, MainNav},
    middleware:['initAuth']


  }


</script>

<style scoped>
  .main {
    max-width: 100%;
    min-width: 100%;
  }

  .item_wrapper {
    padding-top: 20px;
    padding-bottom: 10px;
    max-width: 100%;
    background-image: url("/picture/hero-bg.jpg");
    background-size: 100% 100%;
    background-attachment: fixed;
  }


</style>
