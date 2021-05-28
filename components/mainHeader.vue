<template>
  <header id="header" :style="heightOfHeader">
    <div class="temp" style="min-height: 80px"></div>
    <div :style="headerContainer" class="container">
      <div :style="headerContainer" class="empty"></div>
      <div :style="headerContainer" class="description">
        <h1 :class="{'animation':animation}">.js community</h1>
        <h2 :class="{'animation':animation}">انجمن توسعه دهندگان جاواسکریپت</h2>
      </div>

    </div>
  </header>
</template>

<script>
  export default {
    name: "mainHeader",
    data() {
      return {
        heightOfHeader: 0,
        backgroundImage: '',
        headerContainer: 0,
        animation: false
      }
    },
    methods: {
      getHeaderHeight() {
        const width = document.body.offsetWidth;
        let height = width / 2;
        if (window.innerHeight < height) {
          height = window.innerHeight;
        }
        return height;
      },
      setHeader(img) {
        const height = this.getHeaderHeight();
        this.backgroundImage = img.src;
        if (window.innerWidth > 600) {
          this.heightOfHeader = `min-height:${height}px;background-image: url("${img.src}");`;
        } else {
          this.heightOfHeader = `min-height:${height}px`;
        }

        this.show = true;
        this.$store.dispatch('loading/loading', {payload: false})
      }
    },

    mounted() {

      // if (window.innerWidth > 650) {
      //
      //   this.headerContainer = `min-height:${this.getHeaderHeight() - 80}px`;
      // } else {
      //   this.headerContainer = `min-height:${this.getHeaderHeight()}px+`;
      // }

      window.addEventListener('resize', async () => {
        this.heightOfHeader = `min-height:${this.getHeaderHeight()}px`;
        if (window.innerWidth > 650) {
          this.headerContainer = `min-height:${this.getHeaderHeight() - 80}px`;
        } else {
          this.headerContainer = `min-height:${this.getHeaderHeight()}px`;
        }

      });


      this.headerContainer = `min-height:${this.getHeaderHeight()}px`;
      if (window.innerWidth > 650){
        this.headerContainer = `min-height:${this.getHeaderHeight() - 80}px`;

      }
      const img = new Image();
      img.onload = async () => {
        await this.setHeader(img);
        this.animation = true;
      };
      img.src = "/picture/header.jpg";


    }
  }
</script>

<style scoped>
  header {
    z-index: 9;
    max-width: 100%;
    min-width: 100%;
    background-image: url("static/picture/header.jpg");
    background-size: 100% auto;
  }


  header .container {
    min-width: 100%;
    padding: 0;
    display: flex;
  }

  .empty {
    width: 60%;
  }

  .description {
    width: 40%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

  }

  @keyframes x {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }


  h1 {
    margin-bottom: 50px;
    text-align: center;
    width: 100%;
    font-size: 30pt;
    font-font: Cursive;
    color: white;
    opacity: 0;
    transform: translateX(-100px);
    transition: all 2s;

  }

  .animation {
    opacity: 1;
    transform: translateX(0);

    /*animation-name: x;*/
    /*animation-delay: 0.5s;*/
    /*animation-duration: 1s;*/
  }

  h2 {
    text-align: center;
    width: 100%;
    font-size: 25pt;
    font-font: yekan;
    color: #ffeffa;
    opacity: 0;
    transform: translateX(+100px);
    transition: all 2s;
  }


  @media only screen and (max-width: 815px) {
    h1 {
      font-size: 20pt;
    }

    h2 {
      font-size: 16pt;
    }
  }

  @media only screen and (max-width: 650px) {
    .temp, .empty {
      display: none;
    }

    .description {
      display: flex;
      width: 100%;
      height: fit-content;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

</style>
