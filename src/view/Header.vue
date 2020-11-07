<template>
  <div class="header">
    <div class="content">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <div></div>
      <div></div>
      <div class="search">
        <el-input placeholder="Address ..." v-model="value">
          <template slot="prepend">{{language1 ? zh.acount : en.acount}}</template>
          <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
        </el-input>
      </div>
      <div class="right">
        <img class="language" src="../assets/images/icon_laug.png" alt="">
        <el-dropdown @command="handleClick">
          <span class="el-dropdown-link text">
            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="中文">中文</el-dropdown-item>
            <el-dropdown-item command="English">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ["input"],
  data() {
    return {
      value: this.input || "",
      language: "中文",
      language1: true, // true 中文 false 英文
      zh: {
        acount: "账户",
      },
      en: {
        acount: "Acount",
      },
    };
  },
  watch: {
    input: function (val) {
      this.value = val;
    },
  },
  methods: {
    handleSearch() {
      this.$emit("searchData", this.value);
    },
    handleClick(command) {
      this.language = command;
      if (command == "中文") {
        this.language1 = true;
      } else {
        this.language1 = false;
      }
      this.$emit("switchLanguage", command);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 90px;
  background: #222832;
  .content {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      display: flex;
      align-items: center;
    }
  }
  .logo {
    width: 210px;
    height: 24px;
  }
  .language {
    width: 20px;
    height: 20px;
  }
  .text {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #f5f6fa;
    margin-left: 15px;
  }
  .search {
    display: block;
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .header .search {
    display: block;
  }
  .header .content {
    max-width: 1000px;
    padding: 0 20px;
  }
}
@media only screen and (max-width: 750px) {
  .header .search {
    display: none;
  }
}
</style>
<style lang="less">
.header {
  .el-input-group {
    width: 516px;
  }
  .el-input-group__append,
  .el-input-group__append button.el-button {
    background-color: #ffc421;
    color: #fff;
    border: none;
  }
  .el-input-group__prepend,
  .el-input__inner {
    background: #2b343f;
    border: none;
    color: #f5f6fa;
  }
  .el-input-group__prepend {
    border-right: 1px solid #323b48;
  }
}
</style>