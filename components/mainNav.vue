<template>
  <nav :class="{setNav:scroll}">
    <div class="logo">
      <h1> .js community</h1>
    </div>
    <div class="nav">
      <ul>
        <li>VueJs</li>
        <li>ReactJs</li>
        <li>angularJs</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>NestJs</li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "mainNav",
        data(){
          return{
            scroll:false
          }
        },
        mounted() {
          window.onscroll = () => {
            this.scroll = window.scrollY > 0;
          };
        }
    }
</script>

<style scoped>
  /* nav bar scrolling*/
  .setNav{
    background-color: rgba(252, 252, 252, 0.9);
    min-height: 70px;
    color: black;
  }
  .setNav  .logo,.setNav .nav ul{
    color: #000;
    text-shadow: 0 0 1px #000;
    transition: all 0.5s;
  }


  nav {
    min-width: 100%;
    min-height: 80px;
    display: flex;
    transition: all 0.5s;
    position: fixed;
    top: 0;

  }

  nav .logo {
    width: 20%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 0 0 2px white;
    font-family: Cursive, serif;

  }

  nav .nav {
    width: 80%;
    min-height: 100%;


  }

  nav .nav ul {
    display: flex;
    min-width: 100%;
    min-height: 100%;
    list-style-type: none;
    justify-content: flex-start;
    align-items: center;
    font-size: 16pt;
    color: white;
    padding-left: 100px;
  }

  ul li {
    margin: 0 10px;
  }

  ul li:hover {
    text-shadow: 0px 0px 2px white;
    cursor: pointer;
  }

</style>
