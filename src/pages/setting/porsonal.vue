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
          line-height:23px;
          color:rgba(155, 155, 155, 1);
          letter-spacing:10px;
          margin-top: 50px;
          text-align: center;

          &:nth-child(1) {
            margin-top: 64px;
            color: rgba(29, 82, 116, 1);
          }
        }
      }

      .content2{
        text-align: center;
        .content2-item{
          text-align: center;
          font-size:30px;
          font-family:Helvetica;
          font-weight:400;
          color:rgba(34,34,34,1);
          .content2-btn-box{
            width:212px;
            height:48px;
            margin: 0 auto;
            text-align: center;
            line-height: 48px;
            background:rgba(28,29,29,1);
            opacity:1;
            border-radius:14px;
            font-size:22px;
            font-family:PingFang TC;
            font-weight:500;
            line-height:26px;
            color:rgba(255,255,255,1);
            img{
              width: 22px;
              height: 22px;
              margin-right: 16px;
            }
          }


        }
      }
    }
  }

  @media (min-width: 768px) {
    .box {
      border-top: 10px solid #383838;
    }

    .main {
      padding-top: 38px;
      .content {
        width: 1368px;
        height: 829px;
        position: relative;

        .content1 {
          width: 278px;
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
        }

        .content2 {
          width: 543px;
          height: 834px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(216, 216, 216, 1);
          box-shadow: 7px 3px 14px rgba(0, 0, 0, 0.16);
          opacity: 1;
          border-radius: 21px;
          position: absolute;
          left: 140px;
          top: -2px;
          z-index: 2;
          padding-left: 138px;
          box-sizing: border-box;
          .content2-item{
            &:first-child{
              margin-top: 196px;
              img{
                width:267px;
                height:267px;
                background:rgba(0,0,0,1);
                border-radius:50%;
                display: block;
                margin: 0 auto;
              }
            }
            &:nth-child(2){
              margin: 24px 0;
            }
          }

        }

        .content3 {
          float: right;
          padding-right: 84px;
          .content3-item{
            width: 502px;
            margin-top: 198px;
            p{
              font-size:48px;
              font-family:LiGothicMed;
              line-height:58px;
              color:rgba(58,57,58,1);
              opacity:1;
              margin-bottom: 44px;
            }
            .input-list{
              width: 100%;
              margin-top: 17px;
              p{
                margin-bottom: 0;
                font-size:20px;
                font-family:PingFang TC;
                font-weight:400;
                line-height:28px;
                color:rgba(49,49,49,1);
                opacity:0.62;
                input{
                  width: 100%;
                  border: none;
                  border-bottom:2px solid rgba(219,219,229,1);
                }
              }
              div{
                width: 48%;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .box{
      padding-top: 0;
    }
    .main{
      .content{
        width: 100vw;
        height: 100vh;
        position: relative;
      }
    }
  }
</style>
