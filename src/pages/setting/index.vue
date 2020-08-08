<template>
  <div class="personal-box">
    <m-nav></m-nav>
    <img id="contact" src="../../assets/images/contact.png" alt="">
    <div class="main flex-box flex-j-c flex-a-c">
      <div class="content-box">
        <div class="content">
          <div class="content1">
            <div class="content1-item" v-for="(item, index) in leftMenu" :key="index" @click='jumpPage(index)'>
              <img :src="active == index ? src1 : src2" alt="">
              <span :class="active == index ? 'active' : ''">{{ item.name }}</span>
            </div>
          </div>
          <m-personal v-if="active == '0'"></m-personal>
          <m-update-password v-else-if="active == '1'"></m-update-password>
          <m-address v-else></m-address>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mNav from '@/components/nav.vue'
  import mPersonal from './personal.vue'
  import mUpdatePassword from './updatePassword.vue'
  import mAddress from './address.vue'
  import '../../lib-flexible/flexible'
  export default {
    name: 'app',
    data() {
      return {
        leftMenu: [{
          name: '個人資料'
        }, {
          name: '更改密碼'
        }, {
          name: '收貨資料'
        }],
        src1: require('../../assets/images/circle_color.png'),
        src2: require('../../assets/images/circle.png'),
        active: 0
      }
    },
    methods: {
      jumpPage(index) {
        console.log(index)
        this.active = index
      }
    },
    components: {
      mNav,
      mPersonal,
      mUpdatePassword,
      mAddress
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/flex.css';

  .personal-box {
    background: #fff;
    width: 100vw;
    min-height: 100vh;
    position: relative;
    #contact{
      position: absolute;
      width: 84px;
      height: 18px;
      bottom: 0;
      right: 100px;
    }
  }

  .main {
    background: #fff;

    .content {
      background: rgba(255, 255, 255, 1);


      .content1 {
        .content1-item {
          img {
            width: 28px;
            height: 28px;
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
          }

          font-size:20px;
          font-family:PingFang TC;
          font-weight:500;
          color:rgba(155, 155, 155, 1);
          text-align: center;

          .active {
            color: rgba(29, 82, 116, 1);
          }
        }
      }


    }
  }

  @media (min-width: 770px) {
    .personal-box {
      border-top: 10px solid #383838;
    }

    .main {
      padding-top: 15px;

      .content {
        width: 547px;
        min-height: 332px;
        position: relative;
        border: 1px solid rgba(224, 224, 224, 1);
        box-shadow: 7px 7px 6px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 22px;

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

          .content1-item:nth-of-type(1) {
            margin-top: 26px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .personal-box {
      padding-top: 0;
      #contact{
        display: none;
      }
    }

    .main {
      .content {
        width: 100vw;
        // height: 100vh;
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
      }
    }
  }
</style>
