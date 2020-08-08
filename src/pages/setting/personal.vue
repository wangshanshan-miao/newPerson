<template>
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
        <div class="content3-person-item flex-box flex-j-t flex-a-c">
          <img src="" alt="">
          <div>
            <p>User:</p>
            <p>ID70624700</p>
          </div>

          <div v-if="hasMsg == 1" class="edit-btn flex-box flex-j-c flex-a-c" @click="editMsg">
            <img src="../../assets/images/edit.png" alt="">
            <div>修改資料</div>
          </div>
        </div>

      </div>
      <div class="content3-item">
        <p>個人資料</p>
        <div class="noMsg" v-if="hasMsg == 0">
          <div class="input-list">
            <p>用戶名稱</p>
            <p><input type="text" placeholder="Username2047"></p>
          </div>

          <div class="input-list flex-box flex-j-s flex-a-c">
            <div>
              <p>姓氏</p>
              <p><input type="text" placeholder="Chung"></p>
            </div>
            <div>
              <p>名稱</p>
              <p><input type="text" placeholder="Ka Wai"></p>
            </div>
          </div>

          <div class="input-list">
            <p>電郵地址</p>
            <p><input type="text" placeholder="Chungkawai2047@gmail.com"></p>
          </div>

          <div class="input-list">
            <p>性別</p>
            <p><select class="sex-box" id="sex">
                <option>男</option>
                <option>女</option>
              </select></p>
          </div>

          <div style="margin-top: 46px;" class="flex-box flex-j-e" @click="saveMsg">
            <div class="submit-box flex-box flex-j-c flex-a-c">
              <img src="../../assets/images/save.png" alt="">
              <div>儲存資料</div>
            </div>
          </div>
        </div>

        <div class="hasMsg" v-if="hasMsg == 1">
          <div class="input-list">
            <p>用戶名稱</p>
            <p>Username2047</p>
          </div>

          <div class="input-list flex-box flex-j-s flex-a-c">
            <div>
              <p>姓氏</p>
              <p>Chung</p>
            </div>
            <div>
              <p>名稱</p>
              <p>Ka Wai</p>
            </div>
          </div>

          <div class="input-list">
            <p>電郵地址</p>
            <p>Chungkawai2047@gmail.com</p>
          </div>

          <div class="input-list">
            <p>性別</p>
            <p>女</p>
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
    data(){
      return{
        hasMsg: 1
      }
    },
    components: {
      mNav
    },
    methods:{
      editMsg(){
        this.hasMsg = 0
      },
      saveMsg(){
        this.hasMsg = 1
      }
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
        width: 547px;
        height: 332px;
        position: relative;

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
              font-size: 19px;
              font-family: LiGothicMed;
              color: rgba(58, 57, 58, 1);
              opacity: 1;
              margin-bottom: 18px;
            }
            .hasMsg{
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
                  line-height: 22px;
                  &:last-child{
                    height: 22px;
                    border-bottom: 1px solid rgba(137, 137, 137, 1);

                  }


                }

                div {
                  width: 48%;
                }
              }

              .submit-box {
                display: none;
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
                margin-right: 38px;
              }

              font-size:28px;
              font-family:PingFang HK;
              font-weight:500;
              color:rgba(116, 116, 116, 1);
              opacity:1;

              .edit-btn{
                margin-left: 17px;
                width:239px;
                height:70px;
                background:rgba(28,29,29,1);
                opacity:1;
                border-radius:28px;
                font-size:26px;
                font-family:PingFang TC;
                font-weight:500;
                color:rgba(255,255,255,1);
                img{
                  width: 24px;
                  height: 24px;
                  display: block;
                  margin-right: 18px;
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

            p {
              font-size: 60px;
              font-family: LiGothicMed;
              color: #3A393A;
              margin-bottom: 55px;
            }
            .noMsg{
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

                    input {
                      width: 100%;
                      height: 100%;
                      border: 4px solid rgba(137, 137, 137, 0.25);
                      border-radius: 10px;
                      padding: 0 10px;
                      font-size:36px;
                      font-family:PingFang TC;
                      font-weight:400;
                      color:rgba(49,49,49,1);
                      opacity:0.49;
                      box-sizing: border-box;
                    }
                  }

                }

                &:nth-child(2) {
                  div {
                    width: 68%;
                    &:first-child {
                      width: 30%;
                    }
                  }
                }
                #sex {
                  width: 117px;
                  height: 87px;
                  background: rgba(255, 255, 255, 1);
                  border: 4px solid rgba(137, 137, 137, 1);
                  opacity: 0.25;
                  border-radius: 10px;
                  text-align: center;
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

            .hasMsg{
              .input-list {
                margin-top: 30px;

                &:first-child {
                  margin-top: 0;
                }

                &:last-child{
                  p{
                    &:last-child{
                      border-bottom: none;
                    }
                  }
                }
                &:nth-child(2){
                  div{
                    width: 50%;
                  }
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
                    border-bottom: 4px solid rgba(137, 137, 137, 0.25);
                    line-height: 87px;
                  }

                }

              }


            }

          }

        }
      }
    }
  }
</style>
