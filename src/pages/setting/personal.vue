<template>
  <div class="box">
    <m-nav></m-nav>
    <div class="main flex-box flex-j-c flex-a-c">
      <div class="content-box">
        <div class="content">
          <div class="content1">
            <div class="content1-item">
              <img src="../../assets/images/circle_color.png" alt="">
              <span>個人資料</span>
            </div>
            <div class="content1-item">
              <img src="../../assets/images/circle.png" alt="">
              <span>更改密碼</span>
            </div>
            <div class="content1-item">
              <img src="../../assets/images/circle.png" alt="">
              <span>收貨資料</span>
            </div>
          </div>
          <div class="content2">
            <div class="content2-item">
              <img src="" alt="">
            </div>
            <div class="content2-item">
              <div>User Name</div>
            </div>
            <div class="content2-item">
              <div class="content2-btn-box flex-box flex-j-c flex-a-c">
                <img src="../../assets/images/edit.png" alt="">
                <span>修改資料</span>
              </div>
            </div>
          </div>
          <div class="content3">
            <div class="content3-person">
              <img src="" alt="">
              <div>
                <p>User:</p>
                <p>ID70624700</p>
              </div>
            </div>
            <div class="content3-item">
              <p>個人資料</p>

              <div class="input-list">
                <p>用戶名稱</p>
                <p><input type="text"></p>
              </div>

              <div class="input-list flex-box flex-j-s flex-a-c">
                <div>
                  <p>姓氏</p>
                  <p><input type="text"></p>
                </div>
                <div>
                  <p>名稱</p>
                  <p><input type="text"></p>
                </div>
              </div>

              <div class="input-list">
                <p>電郵地址</p>
                <p><input type="text"></p>
              </div>

              <div class="input-list">
                <p>性別</p>
                <p><input type="text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mNav from '@/components/nav.vue'
  import '../../../static/css/flex.css';
  export default {
    name: 'app',
    components: {
      mNav
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    background: #fff;
    width: 100vw;
    height: 100vh;
  }

  .main {
    background: #fff;

    .content {
      background: rgba(255, 255, 255, 1);
      border: 2px solid rgba(224, 224, 224, 1);
      box-shadow: 7px 7px 6px rgba(0, 0, 0, 0.16);
      opacity: 1;
      border-radius: 22px;

      .content1 {
        .content1-item {
          img {
            width: 28px;
            height: 28px;
            display: inline-block;
            vertical-align: middle;
          }

          font-size:20px;
          font-family:PingFang TC;
          font-weight:500;
          color:rgba(155, 155, 155, 1);
          text-align: center;

          &:nth-child(1) {
            color: rgba(29, 82, 116, 1);
          }
        }
      }


    }
  }

  @media (min-width: 770px) {
    .box {
      border-top: 10px solid #383838;
    }

    .main {
      padding-top: 38px;

      .content {
        width: 547px;
        height: 332px;
        position: relative;

        .content1 {
          width: 110px;
          height: 100%;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(216, 216, 216, 1);
          box-shadow: 7px 3px 14px rgba(0, 0, 0, 0.16);
          opacity: 1;
          border-radius: 21px;
          position: absolute;
          left: -2px;
          top: -2px;
          z-index: 3;
          background: #fff;
          .content1-item{
            font-size:8px;
            font-family:PingFang TC;
            font-weight:500;
            margin-top: 20px;
            img {
              width: 12px;
              height: 12px;
              display: inline-block;
              vertical-align: middle;
            }
          }
        }

        .content2 {
          text-align: center;
          width: 216px;
          height: 334px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(216, 216, 216, 1);
          box-shadow: 7px 3px 14px rgba(0, 0, 0, 0.16);
          opacity: 1;
          border-radius: 21px;
          position: absolute;
          left: 56px;
          top: -2px;
          z-index: 2;
          padding-left: 54px;
          box-sizing: border-box;

          .content2-item {
            text-align: center;
            font-size: 12px;
            font-family: Helvetica;
            font-weight: 400;
            color: rgba(34, 34, 34, 1);

            &:first-child {
              margin-top: 78px;

              img {
                width: 107px;
                height: 107px;
                background: rgba(0, 0, 0, 1);
                border-radius: 50%;
                display: block;
                margin: 0 auto;
              }
            }

            &:nth-child(2) {
              margin: 10px 0;
            }

            .content2-btn-box {
              width: 85px;
              height: 19px;
              margin: 0 auto;
              text-align: center;
              background: rgba(28, 29, 29, 1);
              opacity: 1;
              border-radius: 14px;
              font-size:9px;
              font-family:PingFang TC;
              font-weight:500;
              color: rgba(255, 255, 255, 1);

              img {
                width: 9px;
                height: 9px;
                margin-right: 4px;
              }
            }
          }

        }

        .content3 {
          float: right;
          padding-right: 34px;
          .content3-person{
            display: none;
          }
          .content3-item {
            width: 200px;
            margin-top: 58px;

            p {
              height:22px;
              font-size:19px;
              font-family:LiGothicMed;
              color: rgba(58, 57, 58, 1);
              opacity: 1;
              margin-bottom: 18px;
            }

            .input-list {
              width: 100%;
              margin-top: 6px;

              p {
                margin-bottom: 0;
                font-size:8px;
                font-family:PingFang TC;
                font-weight:400;
                color: rgba(49, 49, 49, 1);
                opacity: 0.62;

                input {
                  width: 100%;
                  border: none;
                  border-bottom: 1px solid rgba(137, 137, 137, 1);
                }
              }

              div {
                width: 48%;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .box {
      padding-top: 0;
    }

    .main {
      .content {
        width: 100vw;
        height: 100vh;
        position: relative;

        .content1 {
          position: relative;
          height: 144px;
          width: 100%;

          .content1-item {
            position: absolute;

            img {
              width: 28px;
              height: 28px;
              display: inline-block;
              vertical-align: middle;
            }

            font-size:20px;
            font-family:PingFang TC;
            font-weight:500;
            line-height:23px;
            color:rgba(155, 155, 155, 1);
            letter-spacing:10px;
            width: 100%;
            height: 144px;
            line-height: 144px;
            text-align: center;
            box-sizing: border-box;
            margin-top: 0;

            &:nth-child(1) {
              width: 33%;
              top: 0;
              left: 0;
              box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
              opacity: 1;
              border-radius: 0 0 44px 0;
              background: #fff;
              z-index: 3;
              margin-top: 0;
            }

            &:nth-child(2) {
              width: 66%;
              padding-left: 33%;
              box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
              opacity: 1;
              border-radius: 0 0 44px 0;
              background-color: #fff;
              z-index: 1;
            }

            &:nth-child(3) {
              padding-left: 60%;
              border: 2px solid rgba(216, 216, 216, 1);
              box-shadow: 14px 6px 28px rgba(0, 0, 0, 0.16);
            }
          }


        }

        .content2 {
          display: none;
        }

        .content3 {
          margin: 30px;
          position: relative;
          .content3-person {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 200px;
            background: rgba(255, 255, 255, 1);
            border: 4px solid rgba(232, 232, 232, 1);
            box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
            opacity: 1;
            border-radius: 44px;

            img {
              width: 130px;
              height: 132px;
              display: block;
              float: left;
              margin: 0 auto;
            }

            div {
              float: left;
              margin: 0 auto;
            }
          }

          .content3-item {
            padding: 252px 50px 50px;
            background: rgba(255, 255, 255, 1);
            border: 4px solid rgba(232, 232, 232, 1);
            box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
            opacity: 1;
            border-radius: 44px;
            font-size: 32px;

            .input-list {
              p {
                box-sizing: border-box;
                padding: 10px;

                &:last-child {
                  height: 80px;
                }

                input {
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
