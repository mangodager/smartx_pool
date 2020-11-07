<template>
  <div class="box">
    <div class="cont">
      <div class="footer">© 2020 SmartX Community.</div>
      <div>
        <ul class="social">
          <li><a target="_blank" href="https://twitter.com/SmartXOne"><i class="iconfont icon-twitter"></i> </a></li>
          <li><a target="_blank" href="https://www.facebook.com/SmartX.OneOfficial"><i class="iconfont icon-facebook"></i> </a></li>
          <li><a target="_blank" href="https://github.com/smartx-core"><i class="iconfont icon-github"></i></a></li>
          <li><a target="_blank" href="https://t.me/smartx_en"><i class="iconfont icon-telegram"></i></a></li>
          <li><a target="_blank" href="https://medium.com/smartx"><i class="iconfont icon-medium"></i></a></li>
          <li><a target="_blank" href="https://discord.gg/JymqJyS"><i class="iconfont icon-discord"></i></a></li>
          <li><a target="_blank" href="mailto:social@smartx.one"><i class="iconfont icon-email"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  height: 60px;
  background: #212832;
  color: #888;
  .cont {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    align-items: center;
  }
  .social {
    display: flex;
    justify-content: space-between;
    width: 270px;
    li a {
      .iconfont {
        color: #777;
        font-size: 20px;
      }
      &:hover {
        .iconfont {
          color: #000;
          font-size: 20px;
        }
      }
    }
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .box .cont {
    max-width: 1000px;
    padding: 0 20px;
  }
}
@media only screen and (max-width: 750px) {
  .box .social {
    display: none;
  }
  .footer {
    width: 100%;
    text-align: center;
  }
}
</style>
