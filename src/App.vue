<script src="../../smartx_dotnet/wwwroot/js/Login.js"></script>
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  name: "App",
  created() {},
  mounted() {},
};
</script>

<style>
@import url("./assets/css/reset.css");
@import url("//at.alicdn.com/t/font_2096457_02fjrzwol5mt.css");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: #eee;
}
</style>
