<template>
    <div class="list_wrapper">
      <div class="list">
        <h1  @click="$emit('closeList')" style="position: sticky;top: 0;left: 150px">بستن</h1>
        <h3 v-for="i in list" :key="i._id">{{i.name}}</h3>
      </div>
    </div>
</template>

<script>
    export default {
        name: "onlineList",
        props:{
          list:Array
        }
    }
</script>

<style scoped>
  .list_wrapper{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list{
    width: 350px;
    height: 70%;
    background-color: white;
    box-shadow: 0 0 7px red;
    overflow-y: scroll;
    border-radius: 7px;
    position: relative;
    z-index: 10;
  }
  .list h3{
    text-align: center;
    padding: 6px;
    margin: 3px;
    border-bottom: 2px solid black;


  }
  h1{
    font-size: 15pt;
    background-color: #ff6a3f;
    position: absolute;
    text-align: center;
    cursor: pointer;
    font-family: yekan;
    z-index: 100;
  }

</style>
