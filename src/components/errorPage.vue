<template>
  <div class="error-page" id="error-page">
    <div class="content-box">
      <van-notice-bar wrapable :scrollable="false">{{$route.query.msg}}</van-notice-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorPage",
  data() {
    return {
      msg: "errorPage 错误页面"
    };
  },
  methods: {},
  mounted() {
    console.log(this.msg);
    document.title = "error";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.error-page {
  .content-box {
    background-color: #fff;
    padding: 10px;
    height: 100vh;
  }
}
</style>