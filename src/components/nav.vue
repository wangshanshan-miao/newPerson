<template>
  <div class="nav-model">
    <div class="top"></div>
    <div class="content">
      <img class="menu phone" src="../assets/images/menu.png">
      <div class="logo-box pc"></div>
      <ul class="nav-box pc">
        <li v-for="(item, index) in menuList" :key="index">{{ item.name }}</li>
      </ul>
      <div class="right phone">
        <img src="../assets/phone_images/book.png" >
        <img src="../assets/phone_images/car.png" >
      </div>
      <div class="btn-box pc">
        <button class="btn">自助页面</button>
      </div>
      <div class="book img pc">
        <img src="../assets/images/book.png" >
      </div>
      <div class="car img pc">
        <img src="../assets/images/car.png" >
      </div>
      <div class="touxiang img pc">
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
@media (max-width: 768px) {
  .nav-model {
    background: #383838;
    .top {
      height: 0;
    }
    .content {
      width: 92%;
      padding: 0 4%;
      height: 110px;
    }
    .pc {
      display: none;
    }
    .right {
      display: inline-block;
      img {
        display: inline-block;
        width: 42px;
        height: 42px;
      }
    }
    .menu {
      display: inline-block;
    }
    .logo-box {
      background: url('../assets/phone_images/logo1.png') no-repeat;
      width: 26%;
      margin-right: 17%;
    }
  }
}

@media (min-width: 769px) {
  .nav-model {
    background: #fff;
    .top {
      height: 10px;
    }
    .content {
      width: 80%;
      padding: 0 8% 0 12%;
      height: 50px;
    }
    .logo-box {
      background: url('../assets/images/logo.png') no-repeat;
      width: 16%;
      margin-right: 2%;
    }
    .pc {
      display: inline-block;
    }
    .nav-box {
      display: inline-flex ;
    }
    .phone {
      display: none;
    }
  }
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
  box-shadow:3.5px 3.5px 2.5px rgba(35,24,21,0.15);
  // background: #fff;
  position: relative;
  .top {
    background: #383838;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-box {
    // width: 16%;
    padding-bottom: 5%;
    background-size: 100% 100%;
    display: inline-block;
    float: left;
  }
  .nav-box {
    justify-content: center;
    width: 70%;
    li {
      margin-right: 3%;
      font-size: 8.5px;
      float: left;
      color: #6A6A6A;
    }
  }
  .menu {
    float: left;
    width: 34px;
    height: 21px;
    margin-right: 19%;
  }
  .btn-box {
    width: 12%;
    padding-bottom: 3%;
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
    padding-bottom: 2%;
  }
  .car {
    width: 3%;
    padding-bottom: 2.5%;
  }
  .touxiang {
    width: 6%;
    padding-bottom: 5%;
    img {
      border-radius: 50px;
    }
  }
}
</style>
