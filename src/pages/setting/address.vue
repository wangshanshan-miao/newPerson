<template>
  <div>
    <div class="content3 flex-box flex-j-c flex-a-c">
      <div class="content3-item" :style="{padding: isOld ?  '10px 0 70px' : '10px 0 30px'}">
        <div class="oldAddress" v-show="isOld">
          <div class="title">
            <div class="left">
              <img src="../../assets/images/address.png" />
              默認收貨地址
            </div>
            <div class="right">
              <div class="right-item">
                <img src="../../assets/images/edit.png" />
                編輯資料
              </div>
              <div class="right-item">
                <img src="../../assets/images/delete.png" />
                刪除
              </div>
            </div>
          </div>
          <div class="info">
            <p class="info-item">
              <label>收件人姓氏：</label>
              <span>LAU</span>
              <label>收件人名稱：</label>
              <span>WAI KIN</span>
            </p>
            <p class="info-item">
              <label>聯絡電郵：</label>
              <span>lauwaikin195@gmail.cpm</span>
            </p>
            <p class="info-item">
              <label>聯絡電話：</label>
              <span>94204422</span>
            </p>
            <p class="info-item">
              <label>區域：</label>
              <span>香港島</span>
              <label>地區：</label>
              <span>東區</span>
              <label>分區：</label>
              <span>小西灣</span>
            </p>
            <p class="info-item">
              <label>送貨地址：</label>
              <span>香港小西灣村唔知乜嘢樓15樓1501室</span>
            </p>
          </div>
          <div class="btn-box">
            <button class="s-btn">使用默認收貨資料</button>
          </div>
        </div>
        <div class="newAddress">
          <p class="title" :style="{margin: isOld ?  '0 0 5px' : '20px 0 26px'}">收件人資料</p>
          <div class="new-box">
            <div class="address-item">
              <p>收件人姓氏</p>
              <input type="text" placeholder="Username2047">
            </div>
            <div class="address-item">
              <p>收件人名字</p>
              <input type="text" placeholder="Username2047">
            </div>
          </div>
          <div class="new-box">
            <div class="address-item">
              <p>聯絡電郵</p>
              <input type="text" placeholder="輸入email">
            </div>
            <div class="address-item">
              <p>聯絡電話</p>
              <input type="text" placeholder="Username2047">
            </div>
          </div>
          <div class="new-box">
            <div class="address-item">
              <p>聯絡電郵</p>
              <input type="text" placeholder="輸入email">
            </div>
            <div class="address-item">
              <p>聯絡電話</p>
              <input type="text" placeholder="Username2047">
            </div>
          </div>
          <div class="new-box">
            <div class="address-item">
              <p>地址</p>
              <input type="text" placeholder="自行輸入詳細地址">
            </div>
            <div class="address-item">
              <p>備注</p>
              <input type="text" placeholder="輸入備注內容">
            </div>
          </div>
          <p class="checkbox checkbox-primary">
            <input id="agree_check" type="checkbox">
            <label for="agree_check">*存取成為默認收貨資料</label>
          </p>
          <div class="btn-box">
            <button class="s-btn" :style="{margin: isOld ?  '5px 10px 0 0' : '32px 10px 0 0'}">
              <img src="../../assets/images/save.png" />
              儲存資料
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mNav from '@/components/nav.vue'
  export default {
    name: 'app',
    data () {
      return {
        isOld: false
      }
    },
    mounted () {
    },
    components: {
      mNav
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/flex.css';
  @import '../../assets/scss/login.scss';

  @media (max-width: 768px) {
    .content3 {
      margin: 30px;
      position: relative;
      .content3-item {
        width: 200px;
        margin-top: 63px;
      }
    }
  }

  @media (min-width: 769px) {
    .content3 {
      padding-left: 97px;
      .content3-item {
        width: 402px;
        padding: 10px 0 30px;
        .oldAddress {
          .title {
            height: 24px;
            box-shadow: 0px 1px 2px rgba(0,0,0,0.16);
            border-radius:11px 11px 0px 0px;
            color: #fff;
          }
          .left {
            font-size: 8px;
            img {
              margin: 0 6px 0 17px;
              width: 8px;
            }
          }
          .right {
            font-size: 8px;
            .right-item {
              margin-right: 20px;
              img {
                width: 8px;
                margin-right: 2px;
              }
            }
          }
          .info {
            padding: 12.4px 12.4px 7px 12.4px;
            .info-item {
              font-size: 8px;
              color: #747474;
              line-height: 11px;
              margin-bottom: 8px;
              label {
                font-weight: 400;
              }
              span {
                font-weight: 600;
                margin-right: 13px;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
        .newAddress {
          .title {
            font-size:19px;
            line-height:23px;
            color: #3A393A;
            margin-bottom: 5px;
          }
          .new-box {
            margin-bottom: 10px;
            .address-item {
              width: 48%;
              p {
                font-size: 8px;
              }
              input {
                height: 17px;
              }
              &:last-child {
                margin-left: 2%;
              }
            }
          }
        }
        .btn-box {
          button {
            img {
              width: 7px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  .content3 {
    .content3-item {
      margin: 0 auto;
      .oldAddress {
        width: 100%;
        .title {
          background: #29394B;
          width: 100%;
          .left {
            height: 100%;
            display: inline-flex;
            align-items: center;
            img {
                display: inline-block;
            }
          }
          .right {
            float: right;
            height: 100%;
            .right-item {
              height: 100%;
              display: inline-flex;
              align-items: center;
              img {
                display: inline-block;
              }
            }
          }
        }
        .info {
          border: 2px dashed #D8D8D8;
          border-top: none;
          border-radius:0 0 11px 11px;
        }
      }
      .btn-box {
        text-align: right;
        button {
          display: inline-flex;
          align-items: center;
          img {
            display: inline-block;
            width: 7px;
            margin-right: 5px;
          }
        }
      }
      .newAddress {
          .title {
            color: #3A393A;
          }
          .new-box {
            .address-item {
              display: inline-block;
              p {
                color: #313131;
                margin-bottom: 2px;
              }
              input {
                display: inline-block;
                width: 100%;
                border:1px solid rgba(137,137,137,1);
                border-radius:2px;
                opacity:0.25;
              }
              input::placeholder {
                font-size: 9px;
              }
            }
          }
          .checkbox {
            padding-left: 8px;
            label {
              color: #313131;
              font-weight: 600;
              opacity:0.68;
            }
          }
        }
    }
  }
</style>
