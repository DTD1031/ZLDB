<template>
    <div>
      <!--banner-->
      <div style="height: 55px;width: 100%;text-align: left;background-color: #42b983">
        <input id="searchInput" v-model="searchString"></input>
        <button id="searchBt">搜索</button>
      </div>
      <!--Loading-->
      <h1 id="loading" v-if="!result">页面加载中...</h1>
      <!--Title-->
      <h1 v-if="result" style="text-align: center;">豆瓣电影 Top {{result}} </h1>
      <!--list-->
      <div>
        <HomeCell
          v-for="item of movies"
          v-bind:item="item"
          v-bind:title="item['id']"
          v-bind:name="item['title']"
          v-bind:mark="item['rating'].average"
          v-bind:imgsrc="item['images'].large"
          v-bind:year="item['year']"
          v-bind:original_title="item['original_title']"
        >
        </HomeCell>
      </div>
      <div style="height: 40px;"></div>
    </div>
</template>
<script type="text/ecmascript-6">

    import HomeCell from './home/homeCell.vue'

    export default {

      name: 'home',
      data () {
        return {
          cellData: [
            {title: 'V1',name:'a1'},
            {title: 'V2',name:'a2'},
            {title: 'V3',name:'a3'},
            {title: 'V4',name:'a4'},
            {title: 'V5',name:'a5'},
            {title: 'V6',name:'a6'}],
          result:'',
          searchString:'',
          movies:[]

        }
      },
      mounted() {

        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=15', {}, {
          headers: {

          },
          emulateJSON: true
        }).then(function(response) {
          // 这里是处理正确的回调

          this.movies = response.data.subjects
          this.result = response.data['count']

          // this.articles = response.data["subjects"] 也可以

        }, function(response) {
          // 这里是处理错误的回调
          console.log(response)
        });
      },
      components: {
        'HomeCell':HomeCell
      },
    }



</script>

<style>
  #searchInput{

    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 3%;
    height: 20px;
    width: 70%;
    float: left;
  }
  #searchBt{
    margin-top: 17px;
    margin-left: 3%;
    margin-right: 3%;
    width: 15%;
    float: left;
  }
  h1, h2 {
    font-weight: normal;
  }
  #loading{

      width: 100%;
      margin-top: 100px;
      font: "Songti TC" bold 40px;
      text-align: center;

  }

</style>
