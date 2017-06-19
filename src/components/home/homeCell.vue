<template>
    <div id="HomeC" style="font-family: 'Avenir',Helvetica, Arial, sans-serif">
        <div class="itemTop">
          <p class="title">{{name}}</p>
          <p class="theId">{{original_title}}</p>
          <div class="itemMidLeft">
            <p class="markNum">{{mark}}</p>
            <p class="markTitle">豆瓣平均分</p>
          </div>
          <div class="itemMidRight">
            <p class="rightText"><span class="rightTitle">上映时间</span> <span class="rightNum">{{year}}年</span></p>
            <p class="rightText"><span class="rightTitle">豆瓣ID</span> <span class="rightNum">{{title}}</span></p>
          </div>
          <div id="progressBackground">
           <div id="progressLine" v-bind:style="{width:progressPersent + '%'}"></div>
          </div>
        </div>
          <button id="bottomBt">立即观看</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'HomeCell',
      props:['item','title','name','mark','imgsrc','year','original_title'],
      computed:{

          imgURL(){

              return 'url(' + this.imgsrc + ')'
          },

          progressPersent(){

              return this.mark/10 * 100;
          }
      }
    };
</script>

<style>
  #HomeC{

    height: 200px;
    margin-top: 15px;
    background-color: darkseagreen;
  }
  .itemTop{

    padding-top: 10px;
  }
  .title{

    margin-top: 0px;
    margin-left: 15px;
    margin-bottom: 0px;
    color: #222222;
    font-size: 18px;
    font-family: "Songti TC";
  }
  .theId{

    margin-top: 0px;
    margin-left: 15px;
    margin-bottom: 0px;

    font-size: 14px;
    color: grey;

    clear: both;
  }
  .itemMidLeft{

    float: left;
    padding-top: 15px;
    margin-left: 15px;
  }
  .markNum{

    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    font: 30px bolder;
    font-family: "Arial Black";

  }
  .markTitle{

    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    color: grey;
    font-family: "Songti TC";
  }
  .itemMidRight{

    float: right;
    padding-top: 10px;
    margin-right: 15px;

  }

  .rightText{

    margin-top: 5px;
    margin-bottom: 0px;
  }
  .rightTitle{

    color: grey;
    font-size: 12px;

  }
  .rightNum{

    color: #222222;
    font-size: 16px;

  }
  #progressBackground{

    margin: 0px auto;
    position: relative;
    top: 10px;
    clear: both;
    background-color: grey;
    width: 94%;
    height: 2px;
  }
  #progressLine{

    background-color: white;
    height: 2px;
  }
  #bottomBt{

    height: 40px;
    position: relative;
    margin: 0px auto;
    width: 94%;
    top: 20px;
    border: none;
    background-color: #42b983;
    color: white;
    font-family: "Apple Braille";
    font-size: 17px;
    font-weight: 600;
    clear: both;
    display: block;
  }
</style>
