<template>
  <div :id="data.id" class="container" :class="{'revers':revers}">
    <div :class="{'icon':true , 'icon_appear':appear}">
      <img :src="data.image_src">
    </div>
    <div class="title">
      <h1 :class="{'title_appear':appear}">{{data.title}}</h1>
      <h2 :class="{'title_appear':appear}">{{data.description}}</h2>
      <button @click="enter()"
              :class="{'title_appear':appear}"
              :style="`background-color:${data.buttonColor}`">ورود به صفحه
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "item",
    props: {
      data: Object,
      revers: Boolean
    },
    methods: {
      enter() {
        this.$store.dispatch('community/communityAction', {community: this.data.id});
        this.$store.dispatch('community/toggleAction');
      }
    },
    data() {
      return {
        appear: false
      }
    },
    mounted() {
      const topHeight = document.getElementById(this.data.id).offsetTop;
      const heightDiv = document.getElementById(this.data.id).offsetHeight;
      const windowHeight = window.innerHeight;
      if (window.scrollY > topHeight - 100 || window.scrollY + windowHeight > topHeight + heightDiv) {
        this.appear = true;
      }


      const scrollFunction = () => {
        const topHeight = document.getElementById(this.data.id).offsetTop;
        const heightDiv = document.getElementById(this.data.id).offsetHeight;
        const windowHeight = window.innerHeight;
        if (window.scrollY > topHeight - 100 || window.scrollY + windowHeight > topHeight + heightDiv) {
          this.appear = true;
          window.removeEventListener("scroll", scrollFunction);
        }
      };
      window.addEventListener('scroll', scrollFunction)
    }
  }
</script>

<style scoped>
  .container {
    min-width: 100%;
    min-height: 300px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    align-content: center;
    padding: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;

  }

  .revers {
    flex-direction: row-reverse;
  }

  .icon {
    width: 30%;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    transition: all 0.5s;
    opacity: 0;
  }

  .icon_appear {
    opacity: 1;
  }

  img {
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2%;
  }

  .title {
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

  }

  h1, h2 {
    transition: all 0.5s;
    color: white;
    width: 100%;
    text-align: center;
    margin: 20px;
    font-family: yekan;
    opacity: 0;

  }

  h1 {
    transform: translateX(-100px);
  }

  h2 {
    transform: translateX(+100px);
  }

  button {
    z-index: 2;
    width: 150px;
    background-color: #ff6a3f;
    padding: 5px;
    border-radius: 7px;
    font-family: yekan;
    font-size: 16pt;
    transition: all 0.75s;
    opacity: 0;
    transform: translatey(-50px);


  }

  .title_appear {
    transform: translate(0);


    opacity: 1;
  }

  button:hover {
    box-shadow: 0 0 8px gray;

  }

  @media only screen and (max-width: 1100px) {
    .icon {
      width: 20%;
    }

    .title {
      width: 70%;
    }

    img {
      width: 250px;
      height: 250px;
    }
  }

  @media only screen and (max-width: 800px) {
    .icon {
      width: 20%;
    }

    .title {
      width: 75%;
    }

    img {
      width: 200px;
      height: 200px;
    }

  }

  @media only screen and (max-width: 750px) {
    .icon {
      width: 20%;
    }

    .title {
      width: 100%;
    }

    img {
      width: 200px;
      height: 200px;
    }

  }
</style>
