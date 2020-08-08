<template>
    <div class="box">
        <m-nav></m-nav>
        <div class="content">
            <div class="page-con">
                <div class="title">
                    <span :class="active == 0 ? 'title-name active' : 'title-name'" @click="login(0)">登入</span>
                    <span class="middle">or</span>
                    <span  :class="active == 1 ? 'title-name active' : 'title-name'" @click="login(1)">註冊</span>
                </div>
                <m-login v-if="active == 0"></m-login>
                <m-register v-if="active == 1"></m-register>
            </div>
        </div>
    </div>
</template>

<script>
import '../../lib-flexible/flexible'
import mNav from '@/components/nav.vue'
import mLogin from './login.vue'
import mRegister from './register.vue'
export default {
  name: 'header',
  data () {
      return {
          active: 0
      }
  },
  methods: {
      login (index) {
          this.active = index
      }
  },
  mounted () {
      console.log(this.active)
  },
  components: { mNav, mLogin, mRegister }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .box {
    padding-top: 0px;
    .content {
      width: 100%;
      background: #fff;
      opacity:0.89;
      .page-con {
          width: 92%;
          padding-bottom: 140px;
          border-radius: 44px;
          border:4px solid rgba(232,232,232,1);
          box-shadow:0px 14px 12px rgba(0,0,0,0.16);
          .title {
              padding: 102px 0 62px;
              .title-name {
                font-size: 60px;
              }
              .middle {
                   font-size: 38px;
                   margin: 0 26px;
              }
          }
      }
    }
  }
}
@media (min-width: 769px) {
  .box {
    padding-top: 10px;
    .content {
      width: 80%;
      background: rgba(255, 255, 255, .85) url('../../assets/images/bg.png') no-repeat;
      .page-con {
          width: 65%;
          padding-bottom: 24px;
          border-radius: 9px;
          border: 1px solid rgba(195,195,195,1);
          box-shadow: 3px 3px 2px rgba(0,0,0,0.16);
          .title {
              padding: 25px 0 21px;
              .title-name {
                  font-size: 25px;
              }
              .middle {
                   font-size: 19px;
                   margin: 0 13px;
              }
          }
      }
    }
  }
    
}
.box {
    background: #fff;
    // padding-top: 10px;
    .content {
       margin: 3.5px auto 0;
       padding: 8px 0 13px;
       text-align: center;
       background-size: 100% 100%;
       position: relative;
       .page-con {
           background:rgba(255,255,255,1);
           display: inline-block;
           margin: 0 auto;
           text-align: center;
           .title {
               width: 100%;
               text-align: center;
               .middle {
                   color: #1C1D1D;
               }
               .title-name {
                   font-family: PingFang TC;
                   font-weight: 500;
                   line-height: 35px;
                   color:#747474;
                   cursor: pointer;
               }
               .active {
                   color: #5A7786;
               }
           }
       }
    }
}
</style>
