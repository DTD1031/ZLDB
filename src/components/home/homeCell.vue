<template>
    <div id="HomeC" style="font-family: 'Avenir',Helvetica, Arial, sans-serif">
      <div class="imgDiv" v-bind:style="{'background-image':imgURL}">
        <div style="float: left">
          <p class="titleL" style="margin-top: 10px">Name:{{name}}</p>
          <p class="titleL">ID:{{title}}</p>
          <p class="titleL">AvgMark:{{mark}}</p>
        </div>
        <div style="float: right">
          <p class="titleR" style="margin-top: 10px"></p>
        </div>
        <button id="bottomBt">立即观看</button>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'HomeCell',
      props:['item','title','name','mark','imgsrc'],
      computed:{

          imgURL(){

              return 'url(' + this.imgsrc + ')'
          }
      }
    };
</script>

<style>
  #HomeC{

    margin-top: 20px;
  }
  .titleL{
    text-align: left;
    color: white;
    margin-top: 20px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
  }
  .titleR{
    text-align: right;
    color: white;
    margin-top: 20px;
    margin-right: 10px;
    font-weight: bold;
    font-size: 15px;
  }
  .imgDiv{
    height: 200px;
  }

  #bottomBt{

    height: 40px;
    position: relative;
    margin: 0px auto;
    width: 90%;
    top: 8px;
    border: none;
    background-color: #42b983;
    color: white;
    font-family: "Apple Braille";
    font-size: 17px;
    font-weight: 600;
  }
</style>
