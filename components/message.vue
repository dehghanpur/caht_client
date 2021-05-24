<template>
  <div class="message_wrapper">
    <div class="author">
      <h6 dir="auto">{{message.author}}</h6>
    </div>
    <div class="content">
      <pre dir="auto">
        {{message.content}}
      </pre>
    </div>
    <div class="date">
        <p dir="rtl">{{message.date}}</p>
    </div>

  </div>

</template>

<script>
    export default {
        name: "message",
        props:{
          message:Object,
        }
    }
</script>

<style scoped>
  .message_wrapper{
    width: 600px;
    background-color: white;
    border-radius: 7px;
    padding: 7px;
    margin: 8px;
    box-shadow: 0 0 5px gray;

  }

  .author{
    background-color: white;

    width: 100%;

  }
  .author h6{
    font-size: 12pt;
    font-family: yekan;
    font-weight: 600;
  }
  .content{
    padding: 5px;

  }
  .content pre{
    font-family: yekan;
    text-align: justify;
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;

  }
  .date{
    padding: 5px;
  }
  @media only screen and (max-width: 700px) {
    .message_wrapper{
      width: 350px;
    }
    pre{
      font-size: 10pt;
    }
  }
  @media only screen and (max-width: 500px) {
    .message_wrapper{
      width: 300px;
    }
  }
  @media only screen and (max-width: 400px) {
    .message_wrapper{
      width: 270px;
    }
  }

</style>
