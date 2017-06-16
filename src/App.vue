<template>
  <div id="app">
    <router-view></router-view>
    <div id="bottomDiv">
      <router-link class="routClick" to="/home">页面1</router-link>
      <router-link class="routClick" to="/bar">页面2</router-link>
      <router-link class="routClick" to="/">页面3</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}


  .routClick{
    color: #42b983;
    float: left;
    width: 33.3%;
    padding-top: 10px;
    height: inherit;
    background-color: #2c3e50;
    text-decoration: none;
  }
  #bottomDiv{

    position: fixed;
    background-color:lavender;
    bottom: 0px;
    width: 100%;
    height: 40px;
  }
</style>
