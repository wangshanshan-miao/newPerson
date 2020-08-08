<template>
  <div>
    <div class="content3 flex-box flex-j-c flex-a-c">
      <div class="content3-person">
        <div class="content3-person-item flex-box flex-j-t flex-a-c">
          <img src="" alt="">
          <div>
            <p>User:</p>
            <p>ID70624700</p>
          </div>
        </div>

      </div>
      <div class="content3-item" :style="{padding: isOld ?  '10px 0 70px' : '10px 0 30px'}">
        <div class="oldAddress" v-show="isOld">
          <div class="title">
            <div class="left">
              <img src="../../assets/images/address.png" />
              <span>默認收貨地址</span>
            </div>
            <div class="right">
              <div class="right-item">
                <img src="../../assets/images/edit.png" />
                <span>編輯資料</span>
              </div>
              <div class="right-item">
                <img src="../../assets/images/delete.png" />
                <span>刪除</span>
              </div>
            </div>
          </div>
          <div class="info">
            <p class="info-item">
              <span class="dot"></span>
              <label>收件人姓氏:</label>
              <span>LAU</span>
              <span class="dot"></span>
              <label>收件人名稱:</label>
              <span>WAI KIN</span>
            </p>
            <p class="info-item">
              <span class="dot"></span>
              <label>聯絡電郵:</label>
              <span>lauwaikin195@gmail.cpm</span>
            </p>
            <p class="info-item">
              <span class="dot"></span>
              <label>聯絡電話:</label>
              <span>94204422</span>
            </p>
            <p class="info-item">
              <span class="dot"></span>
              <label>區域:</label>
              <span>香港島</span>
              <span class="dot"></span>
              <label>地區:</label>
              <span>東區</span>
              <span class="dot"></span>
              <label>分區:</label>
              <span>小西灣</span>
            </p>
            <p class="info-item flex-box flex-a-t" style="align-items: flex-start;">
              <span class="flex-box flex-j-t flex-a-c">
                <span class="dot"></span>
                <label>送貨地址:</label>
              </span>
              <span>香港小西灣村唔知乜嘢樓15樓1501室</span>
            </p>
          </div>
          <div class="btn-box">
            <button class="s-btn">使用默認收貨資料</button>
          </div>
        </div>
        <div class="newAddress">
          <p class="title" :style="{margin: isOld ?  '0 0 5px' : '20px 0 26px'}">收貨人資料</p>
          <div class="new-box flex-box flex-j-s flex-a-c">
            <div class="address-item spe-item">
              <p>收件人姓氏</p>
              <input type="text" placeholder="Lau">
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
              <div>
                <p>區域</p>
                <select></select>
              </div>
              <div>
                <p>地區</p>
                <select></select>
              </div>
              <div>
                <p>分區</p>
                <select></select>
              </div>
            </div>
            <div class="address-item">
              <p>聯絡電話</p>
              <input type="text" placeholder="Username2047">
            </div>
          </div>
          <div class="new-box">
            <div class="address-item">
              <p>地址</p>
              <textarea type="text" placeholder="自行輸入詳細地址"></textarea>
            </div>
            <div class="address-item">
              <p>備注</p>
              <textarea type="text" placeholder="輸入備注內容"></textarea>
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
        isOld: true
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
      .content3-person {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 200px;
        background: rgba(255, 255, 255, 1);
        border: 4px solid rgba(232, 232, 232, 1);
        box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 44px;
        z-index: 100;
        .content3-person-item {
          margin-top: 32px;
          margin-left: 54px;
          img {
            width: 130px;
            height: 132px;
            display: block;
            background: rgba(0, 0, 0, 1);
            border-radius: 50%;
            margin-right: 39px;
          }

          font-size:28px;
          font-family:PingFang HK;
          font-weight:500;
          color:rgba(116, 116, 116, 1);
          opacity:1;
        }
      }
      .content3-item {
        background: rgba(255, 255, 255, 1);
        border: 4px solid rgba(232, 232, 232, 1);
        box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 44px;
        font-size: 32px;
        padding: 198px 0px 0px !important;
        .oldAddress {
          margin: -30px 0 40px;
          .title {
            height: 148px;
            box-shadow: 0px 1px 2px rgba(0,0,0,0.16);
            border-radius:0px 0px 30px 30px;
            line-height: 178px;
          }
          .left {
            font-size: 28px;
            height: 120%;
            img {
              margin: 0 16px 0 50px;
              width: 40px;
            }
          }
          .right {
            font-size: 8px;
            height: 120%;
            .right-item {
              margin-right: 20px;
              img {
                width: 30px;
                margin-right: 2px;
              }
              span {
                display: none;
              }
            }
          }
          .dot {
            display: inline-block;
          }
          .info {
            padding: 34px 14px 30px 24px;
            box-shadow:0px 14px 12px rgba(0,0,0,0.16);
            border-radius:0px 0px 30px 30px;
            border: 4px dashed #D8D8D8;
            .info-item {
              color: #747474;
              line-height: 40px;
              margin-bottom: 24px;
              opacity:0.62;
              display: inline-flex;
              align-items: center;
              label {
                font-weight: 400;
                font-size: 28px;
                margin-right: 13px;
                white-space: nowrap;
              }
              span {
                font-weight: 600;
                font-size: 30px;
                margin-right: 13px;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
          .btn-box {
            display: none;
          }
        }
        .newAddress {
          padding: 0 50px;
          .title {
            font-size: 60px;
            font-family: LiGothicMed;
            color: rgba(58, 57, 58, 1);
            margin-bottom: 55px;
          }
          .new-box {
            .address-item {
              width: 100%;
              margin-top: 42px;
              p {
                box-sizing: border-box;
                font-size: 32px;
                font-family: PingFang TC;
                font-weight: 400;
                color: rgba(87, 87, 87, 1);
                margin-bottom: 28px;
                &:last-child {
                  margin-bottom: 0;
                  margin-top: 28px;
                  height: 87px;
                }

              }
              input, textarea, select {
                width: 98%;
                height: 87px;
                border: 4px solid rgba(137, 137, 137, 0.25);
                border-radius: 10px;
                padding: 0 0 0 2%;
                font-size:36px;
                font-family:PingFang TC;
                font-weight:400;
                color:rgba(49,49,49,1);
                opacity:0.49;
                box-sizing: border-box;
                line-height: 87px;
              }
              textarea {
                width: 96%;
                padding-left: 4%;
                min-height: 143px;
                line-height: 67px;
              }
            }
            .spe-item {
              width: 42%;
              margin-right: 30px;
            }
          }
        }
        .btn-box {
          margin: 54px 0 110px;
          button {
            padding: 0 54px;
            height: 67px;
            line-height: 67px;
            border-radius:28px;
            img {
              width: 28px;
              height: 28px;
              margin-right: 16px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
    .content3 {
      padding-left: 97px;
      .content3-person{
        display: none;
      }
      .content3-item {
        width: 402px;
        padding: 10px 0 30px;
        .oldAddress {
          .title {
            height: 24px;
            box-shadow: 0px 1px 2px rgba(0,0,0,0.16);
            border-radius:11px 11px 0px 0px;
          }
          .left {
            font-size: 8px;
            height: 100%;
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
          .dot {
            display: none;
          }
          .info {
            padding: 12.4px 12.4px 7px 12.4px;
            border: 2px dashed #D8D8D8;
            border-radius:0 0 11px 11px;
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
                margin-bottom: 2px;
              }
              input, textarea, select {
                width: 98%;
                height: 17px;
                border:1px solid rgba(137,137,137,1);
                border-radius:2px;
                font-size: 9px;
                padding-left: 2%;
                line-height: 17px;
              }
              textarea {
                width: 96%;
                padding-left: 4%;
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
          color: #fff;
          .left {
            display: inline-flex;
            align-items: center;
            img {
                display: inline-block;
            }
          }
          .right {
            float: right;
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
          border-top: none;
        }
        .dot {
          width:14px;
          height:14px;
          background:rgba(177,177,177,1);
          border-radius:50%;
        }
      }
      .btn-box {
        text-align: right;
        button {
          display: inline-flex;
          align-items: center;
          img {
            display: inline-block;
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
              div {
                display: inline-block;
                width: 32%;
              }
              p {
                color: #313131;
              }
              input, textarea, select {
                display: inline-block;
                opacity:0.25;
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
