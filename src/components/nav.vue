<template>
  <div class="nav-model">
    <div class="content">
      <div class="logo-box"></div>
      <ul class="nav-box">
        <li v-for="(item, index) in menuList" :key="index">{{ item.name }}</li>
      </ul>
      <div class="btn-box">
        <button class="btn">自助页面</button>
      </div>
      <div class="book img">
        <img src="../assets/images/book.png" >
      </div>
      <div class="car img">
        <img src="../assets/images/car.png" >
      </div>
      <div class="touxiang img">
        <img src="../assets/images/timg.jpg" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      menuList: [{
        name: '關於我們'
      }, {
        name: '產品目錄'
      }, {
        name: '風格圖庫'
      }, {
        name: '留言評價'
      }, {
        name: '過往作品'
      }, {
        name: '合作機構'
      }, {
        name: '聯絡我們'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) {

}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {

}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: 1200px) {

}
@media (min-width: 1200px) and (max-width: 1300px) {
  .nav-box {
    width: 70%;
  }
  .touxiang {
    width: 6% !important;
  }
}
@media (min-width: 1300px) {
  .nav-box {
    width: 45%;
  }
}
  .nav-model {
    width: 100%;
    padding-bottom: 6%;
    box-shadow:3.5px 3.5px 2.5px rgba(35,24,21,0.15);
    background: #fff;
    position: relative;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      padding: 0 8% 0 12%;
      display: flex;
      align-items: center;
    }
    .logo-box {
      width: 16%;
      padding-bottom: 5%;
      background: url('../assets/images/logo.png') no-repeat;
      margin-right: 2%;
      background-size: 100% 100%;
      display: inline-block;
      float: left;
    }
    .nav-box {
      display: inline-block;
      li {
        margin-right: 3%;
        font-size: 8px;
        float: left;
        color: #6A6A6A;
      }
    }
    .btn-box {
      width: 12%;
      padding-bottom: 4%;
      position: relative;
      margin-right: 3%;
      .btn {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background:rgba(227,89,104,1);
        opacity:1;
        border-radius: 26px;
        font-size: 6px;
        color: #fff;
        border: none;
      }
    }
    .img {
      display: inline-block;
      margin-right: 1%;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
    .book {
      width: 2.5%;
      padding-bottom: 2.5%;
    }
    .car {
      width: 2.5%;
      padding-bottom: 2.5%;
    }
    .touxiang {
      width: 5%;
      padding-bottom: 5%;
      img {
        border-radius: 50px;
      }
    }
  }
</style>
