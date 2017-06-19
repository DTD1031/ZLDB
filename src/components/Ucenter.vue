<template>
    <div id="Ucenter">
      <!--head-->
      <div id="headerView">
        <!--icon&msg-->
        <div style="height: 60px">
          <img src="../assets/69.png" id="icon">
          <div style="float: left">
              <p class="username" style="margin-top: 8px">userName</p>
              <p class="username" style="margin-top: 0px">userType</p>
          </div>
          <img id="msgBt" src="../assets/chat.png"/>
        </div>
        <!--countInfo-->
        <div style="height: 64px;padding-top: 50px">
            <p id="mainCount">100,000,00<span style="font-size: 15px">元</span></p>
            <p style="margin: 0px auto;text-align: center;font-size: 14px;">总金额</p>
          </div>
        <div style="height: 60px;padding-top: 40px">
          <div id="LeftCountDiv">
            <p class="smallCountNum">300<span style="font-size: 12px">元</span></p>
            <p class="smallCount" style="clear: left">代金券</p>
          </div>
          <div id="RightCountDiv">
            <p class="smallCountNum">500<span style="font-size: 12px">元</span></p>
            <p class="smallCount" style="clear: right">冻结金额</p>
          </div>
        </div>
      </div>
      <!--mid-->
      <div id="midView">
        <button id="moneyBt" style="float: left">充值</button>
        <button id="moneyBt" style="float: right">提现</button>
      </div>
      <!--menu-->
      <div id="menu">
        <ul id="userMenu" v-for="item in menuTitles">
          <li class="menuCell">
            <img class="itemIcon" v-bind:src="item.imgsrc">
            {{item.title}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Ucenter',
        data () {
            return {
              menuTitles:[
                {title:"我的发帖",imgsrc:require('../assets/20.png')},
                {title:"我的收藏",imgsrc:require('../assets/24.png')},
                {title:"我的订单",imgsrc:require('../assets/31.png')},
                {title:"我的订阅",imgsrc:require('../assets/45.png')},
                {title:"今日推荐",imgsrc:require('../assets/73.png')}
                ]
            }
        }
    }
</script>

<style>

  #headerView{

    background-color: lightgreen;
    height: 300px;
    width: 100%;
  }
  #icon{

    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-left: 10px;
    float: left;
    margin-right: 10px;
  }
  .username{

    font-family: "Songti TC";
    margin-bottom: 0px;
  }
  #msgBt{

    background-color: inherit;
    border-style: none;
    margin-right: 18px;
    margin-top: 18px;
    width: 25px;
    height: 25px;
    float: right;
  }
  #mainCount{

    font-weight: bold;
    font-size: 32px;

    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
    text-align: center;
  }
  #LeftCountDiv{

    float: left;
    margin-left: 13%;
    text-align: center;
  }
  #RightCountDiv{

    float: right;
    margin-right: 13%;
    text-align: center;
  }
  .smallCount{

    margin: 0px auto;
    font-size: 12px;
  }
  .smallCountNum{

    font-weight: bold;
    font-size: 26px;
    font-family: "Apple Braille";
    margin: 0px auto;
  }
  #moneyBt{

    border-style: none;
    background-color: darkseagreen;
    text-align: center;
    width: 49.7%;
    height: inherit;

    color: white;
    font-size: 14px;
  }
  #midView{

    height: 40px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  #menu{

    height: 300px;
    width: 100%;
    float: left;
    border-top: solid lightgray 1px;

  }
  #userMenu{
    margin: 0px auto;
    list-style: none;
    padding-left: 0px;

  }
  .menuCell{
    text-align: left;
    background-color: white;
    border-style: none;
    border-bottom: solid lightgray 1px;
    height: 30px;
    padding-top: 3px;
    padding-left: 10px;
    padding-bottom: 3px;
  }
  .itemIcon{

    position: relative;
    top: 3px;
    width: 20px;
    height: 20px;
  }
</style>
