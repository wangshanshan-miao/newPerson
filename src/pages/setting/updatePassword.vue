<template>
  <div>
    <div class="content3 flex-box flex-j-c flex-a-c">
      <div class="content3-person">
        <img src="" alt="">
        <div>
          <p>User:</p>
          <p>ID70624700</p>
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
  @import '../../../static/css/flex.css';
  .content3 {
    .content3-person {
      display: none;
    }

    .content3-item {
      p {
        font-size:19px;
        font-family:LiGothicMed;
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
            margin-top: 10px;
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
    }
  }
  @media (min-width: 770px) {
    .content3 {
      padding-left: 97px;
      .content3-item {
        width: 200px;
        margin-top: 63px;
      }
    }
  }

  @media (max-width: 768px) {
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
        width: 100%;
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
</style>
