<template>
  <div class="main">
    <main-nav></main-nav>
    <main-header></main-header>
    <div class="item_wrapper">
      <item :data="items.vue" :revers="true"></item>
      <item :data="items.react" :revers="false"></item>
      <item :data="items.angular" :revers="true"></item>
      <item :data="items.node" :revers="false"></item>
      <item :data="items.express" :revers="true"></item>
      <item :data="items.nest" :revers="false"></item>
    </div>
    <main-footer></main-footer>

  </div>
</template>

<script>
  import MainNav from "../components/mainNav";
  import MainHeader from "../components/mainHeader";

  export default {
    name: "index",
    scrollToTop:true,
    components: {MainHeader, MainNav},
    data() {
      return {
        items: {
          vue: {
            id: 'vue',
            image_src: '/picture/vue.png',
            title: 'Vue Js',
            description: 'ورود به صفحه انجمن توسعه دهنگان ویو جی اس',
            buttonColor: '#41B883'
          },
          react: {
            id: 'react',
            image_src: '/picture/react.png',
            title: 'React Js',
            description: 'ورود به صفحه انجمن توسعه دهنگان  ری اکت جی اس',
            buttonColor: '#60d8f8'
          },
          angular: {
            id: 'angular',
            image_src: '/picture/angular.png',
            title: 'Angular Js',
            description: 'ورود به صفحه انجمن توسعه دهنگان انگولار جی اس',
            buttonColor: '#de0031'

          },
          node:{
            id: 'node',
            image_src: '/picture/node.png',
            title: 'Node Js',
            description: 'ورود به صفحه انجمن توسعه دهنگان نود جی اس',
            buttonColor: '#7fc041'

          },
          express:{
            id: 'express',
            image_src: '/picture/express.png',
            title: 'Express Js',
            description: 'ورود به صفحه انجمن توسعه دهنگان اکسپرس جی اس',
            buttonColor: '#6f28c0'

          },
          nest:{
            id: 'nest',
            image_src: '/picture/nest.png',
            title: 'Nest Js',
            description: 'ورود به صفحه انجمن توسعه دهنگان نست جی اس',
            buttonColor: '#de0031'

          }
        }

      }
    }
  }


</script>

<style scoped>
  .main{
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
