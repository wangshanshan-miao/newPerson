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
              <div class="content3-person-item flex-box flex-j-t flex-a-c">
                <img src="" alt="">
                <div>
                  <p>User:</p>
                  <p>ID70624700</p>
                </div>
              </div>

            </div>
            <div class="content3-item">
              <p>個人資料</p>
              <div>
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

  .box {
    background: #fff;
    width: 100vw;
    height: 100vh;
  }

  .main {
    background: #fff;

    .content {

      @media (min-width: 770px) {
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
              font-size: 9px;
              font-family: PingFang TC;
              font-weight: 500;
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

          .content3-person {
            display: none;
          }

          .content3-item {
            width: 200px;
            margin-top: 58px;

            p {
              height: 22px;
              font-size: 19px;
              font-family: LiGothicMed;
              color: rgba(58, 57, 58, 1);
              opacity: 1;
              border-radius: 21px;
              position: absolute;
              left: -2px;
              top: -2px;
              z-index: 3;
              background: #fff;

              .content1-item {
                font-size: 8px;
                font-family: PingFang TC;
                font-weight: 500;
                margin-top: 20px;

                img {
                  width: 12px;
                  height: 12px;
                  display: inline-block;
                  vertical-align: middle;
                }
              }

              margin-bottom: 18px;
            }

            .input-list {
              width: 100%;
              margin-top: 6px;

              .content2-btn-box {
                width: 85px;
                height: 19px;
                margin: 0 auto;
                text-align: center;
                background: rgba(28, 29, 29, 1);
                opacity: 1;
                border-radius: 14px;
                font-size: 9px;
                font-family: PingFang TC;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);

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
                    border-bottom: 1px solid rgba(137, 137, 137, 1);
                  }
                }

              }

              .content3 {
                float: right;
                padding-right: 34px;

                .content3-person {
                  display: none;
                }

                .content3-item {
                  width: 200px;
                  margin-top: 58px;

                  p {
                    height: 22px;
                    font-size: 19px;
                    font-family: LiGothicMed;
                    color: rgba(58, 57, 58, 1);
                    opacity: 1;
                    margin-bottom: 18px;
                  }

                  .input-list {
                    width: 100%;
                    margin-top: 6px;

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
                        border-bottom: 1px solid rgba(137, 137, 137, 1);
                      }
                    }

                    div {
                      width: 48%;
                    }
                  }

                  div {
                    width: 48%;
                  }
                }
              }
            }
          }

          @media (max-width: 768px) {
            .content2 {
              display: none;
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
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                      width: 30px;
                      height: 30px;
                      display: block;
                      margin-right: 10px;
                    }

                    font-size:28px;
                    font-family:PingFang TC;
                    font-weight:500;
                    color:rgba(155, 155, 155, 1);
                    letter-spacing:6px;
                    width: 100%;
                    height: 144px;
                    text-align: center;

                    margin-top: 0;

                    &:nth-child(1) {
                      width: 283px;
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
                      width: 503px;
                      padding-left: 283px;
                      box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
                      opacity: 1;
                      border-radius: 0 0 44px 0;
                      background-color: #fff;
                      z-index: 1;
                    }

                    &:nth-child(3) {
                      padding-left: 503px;
                      border: 2px solid rgba(216, 216, 216, 1);
                      box-shadow: 14px 6px 28px rgba(0, 0, 0, 0.16);
                    }
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

                        }
                      }



                      .content3-item {
                        padding: 252px 53px 50px 43px;
                        background: rgba(255, 255, 255, 1);
                        border: 4px solid rgba(232, 232, 232, 1);
                        box-shadow: 0px 14px 12px rgba(0, 0, 0, 0.16);
                        opacity: 1;
                        border-radius: 44px;
                        font-size: 32px;

                        p {
                          font-size: 60px;
                          font-family: LiGothicMed;
                          color: #3A393A;
                          margin-bottom: 53px;
                        }

                        .input-list {

                          p {
                            font-size: 32px;
                            font-family: PingFang TC;
                            font-weight: 400;
                            color: rgba(87, 87, 87, 1);
                            opacity: 0.62;
                            margin-bottom: 20px;

                            &:last-child {
                              height: 87px;

                              input {
                                width: 100%;
                                height: 100%;
                                border: 4px solid rgba(137, 137, 137, 1);
                                border-radius: 10px;
                              }
                            }

                            &:nth-child(2) {
                              div {
                                width: 50%;

                                &:first-child {
                                  width: 46%;
                                }
                              }
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
</style>
