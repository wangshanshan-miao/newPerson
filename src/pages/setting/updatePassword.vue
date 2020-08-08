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
      <div class="content3-item">
        <p>更改密碼</p>

        <div class="input-list">
          <p>原本的密碼</p>
          <p class="flex-box flex-j-t flex-a-c">
            <img src="../../assets/images/update-password.png" alt="">
            <input type="password" placeholder="Original password">
          </p>
        </div>

        <div class="input-list">
          <p>新密碼</p>
          <p class="flex-box flex-j-t flex-a-c">
            <img src="../../assets/images/update-password.png" alt="">
            <input type="password" placeholder="New Password">
          </p>
        </div>

        <div class="input-list">
          <p>確定新密碼</p>
          <p class="flex-box flex-j-t flex-a-c">
            <img src="../../assets/images/update-password.png" alt="">
            <input type="password" placeholder="New Password">
          </p>
        </div>

        <div class="tips">
          <img src="../../assets/images/warn.png" alt="">
          <span>*密碼錯誤，請重新輸入</span>
        </div>

        <div class="flex-box flex-j-e">
          <div class="submit-box flex-box flex-j-c flex-a-c">
            <img src="../../assets/images/save.png" alt="">
            <div>儲存資料</div>
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
    components: {
      mNav
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/flex.css';

  @media (min-width: 770px) {
    .box {
      border-top: 10px solid #383838;
    }

    .main {
      padding-top: 38px;

      .content {
        position: relative;
        .content3 {
          padding-left: 97px;

          .content3-person {
            display: none;
          }

          .content3-item {
            width: 200px;
            margin-top: 63px;

            p {
              font-size: 19px;
              font-family: LiGothicMed;
              color: rgba(58, 57, 58, 1);
              opacity: 1;
              margin-bottom: 12px;
            }

            .input-list {
              width: 100%;
              margin-top: 8px;
              
              p {
                margin-bottom: 0;
                font-size: 8px;
                font-family: PingFang TC;
                font-weight: 400;
                color: rgba(49, 49, 49, 1);
                opacity: 0.62;

                input {
                  width: 100%;
                  border: none;
                }

                &:last-child {
                  border: 1px solid rgba(137, 137, 137, 1);
                  opacity: 0.25;
                  border-radius: 5px;
                  height: 18px;
                  margin-top: 4px;
                  padding-left: 6px;

                  img {
                    width: 7px;
                    height: 9px;
                    margin-right: 6px;
                  }
                }
              }
            }

            .tips {
              font-size: 6px;
              font-family: AdobeFanHeitiStd-Bold-B5pc-H;
              color: rgba(150, 14, 32, 1);
              opacity: 0.57;
              margin-top: 6px;

              img {
                width: 7px;
                height: 7px;
                display: inline-block;
                vertical-align: middle;
              }
            }

            .submit-box {
              position: absolute;
              bottom: 22px;
              right: 21px;
              width:65px;
              height:20px;
              background:rgba(90,119,134,1);
              box-shadow:0px 2px 4px rgba(0,0,0,0.16);
              opacity:1;
              border-radius:4px;
              font-size:7px;
              font-family:PingFang TC;
              font-weight:500;
              line-height:10px;
              color:rgba(255,255,255,1);
              img{
                width: 7px;
                height: 7px;
                display: block;
                margin-right: 6px;
              }

            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .main {
      .content {
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
            width: 100%;
            padding: 252px 50px 50px;
            background: rgba(255, 255, 255, 1);
            border: 4px solid rgba(232, 232, 232, 1);
            box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
            opacity: 1;
            border-radius: 44px;
            font-size: 32px;

            p {
              font-size: 60px;
              font-family: LiGothicMed;
              color: rgba(58, 57, 58, 1);
              margin-bottom: 55px;
            }

            .input-list {
              margin-top: 42px;

              &:first-child {
                margin-top: 0;
              }

              p {
                box-sizing: border-box;
                font-size: 32px;
                font-family: PingFang TC;
                font-weight: 400;
                color: rgba(87, 87, 87, 1);
                margin: 0;

                &:last-child {
                  margin-bottom: 0;
                  margin-top: 28px;
                  height: 87px;
                  background: rgba(255, 255, 255, 1);
                  border: 4px solid rgba(137, 137, 137, 1);
                  opacity: 0.25;
                  border-radius: 10px;
                  padding: 0 10px;

                  img {
                    width: 36px;
                    height: 43px;
                    margin-right: 10px;
                  }

                }

                input {
                  height: 50px;
                  width: 100%;
                  border: none;
                  font-size: 36px;
                  font-family: PingFang TC;
                  font-weight: 400;
                  color: rgba(49, 49, 49, 1);
                }
              }
            }

            .tips {
              font-size: 28px;
              font-family: AdobeFanHeitiStd-Bold-B5pc-H;
              color: rgba(150, 14, 32, 1);
              opacity: 0.57;
              margin-top: 30px;
              margin-bottom: 124px;

              img {
                width: 36px;
                height: 36px;
                margin-right: 12px;
                display: inline-block;
                vertical-align: middle;
              }
            }

            .submit-box {
              width: 239px;
              height: 70px;
              background: rgba(90, 119, 134, 1);
              opacity: 1;
              border-radius: 28px;
              font-size: 26px;
              font-family: PingFang TC;
              font-weight: 500;
              line-height: 53px;
              color: rgba(255, 255, 255, 1);

              img {
                width: 28px;
                height: 28px;
                margin-right: 16px;
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>
