<template>
    <div>
      <!--banner-->
      <div style="height: 50px;width: 100%;background-color: #42b983"></div>
      <h1>豆瓣电影 Top {{result}} </h1>
      <img style="width: 80%;height: 130px;margin-left: auto" src="http://bannerdesign.cn/wp-content/uploads/2015/12/2015121211243866.jpeg">
      <!--list-->
      <div>
        <HomeCell
          v-for="item of movies"
          v-bind:item="item"
          v-bind:title="item['id']"
          v-bind:name="item['title']"
          v-bind:mark="item['rating'].average"
          v-bind:imgsrc="item['images'].large"
        >
        </HomeCell>
        <!--<ul>-->
          <!--<li v-for="article in articles">-->
            <!--{{article.title}}-->
          <!--</li>-->
        <!--</ul>-->
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
          result:'??',
          movies:[]

        }
      },
      mounted() {

        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
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
  .topBt{
    position: absolute;
    right: 50px;
    top: 70px;
    border: none;
    background-color: darkseagreen;
    border-width: 0px 0px 1px 1px;
    border-color: grey;
    border-style: solid;
  }
  h1, h2 {
    font-weight: normal;
  }
  .mainList{

    list-style: none;
    width: 90%;
    margin: auto;
    padding-left: 0px;
    margin-top: 20px;
  }

  .mainListItem{

    margin-top: 10px;
    margin-left: 0px;
    padding-top: 6px;
    width: 100%;
  }
</style>
