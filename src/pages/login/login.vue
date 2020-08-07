<template>
  <div class="login-box">
    <div class="email row">
      <img src="../../assets/images/email.png">
      <input type="text" placeholder="電郵地址" />
    </div>
    <div class="password row">
      <img src="../../assets/images/password.png">
      <input type="text" placeholder="帳戶密碼" />
    </div>
    <p class="checkbox checkbox-primary">
      <input id="agree_check" type="checkbox">
      <label for="agree_check">記住我</label>
    </p>
    <button class="login-btn button">登入</button>
    <p class="forget">忘記您的密碼？</p>
    <div class="or">
      <fieldset>
        <legend>或</legend>
      </fieldset>
    </div>
    <div class="facebook button">
      <img src="../../assets/images/facebook.png" />
      使用Facebook帳號登入
    </div>
    <div class="google button">
      <img src="../../assets/images/google.png" />
      使用Google帳號登入
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/login.scss';

   @media (max-width: 768px) {
     .login-box {
        width: 89%;
         .checkbox {
            margin-top: 34px;
            height: 60px;
             label {
                font-size: 28px;
                line-height: 60px;
                padding-left: 60px;
             }
            label::before {
                width: 59px;
                height: 59px;
                line-height: 59px;
                border-radius: 14px;
            }
            label::after {
                width: 59px;
                height: 59px;
                line-height: 59px;
                border-radius: 14px;
            }
         }
         .forget {
            font-size: 28px;
            color: #878787;
            line-height: 58px;
            margin: 34px 0 38px;
        }
        .or{
            fieldset{
                height: 56px;
                border-top: 4px solid;
                legend{
                    padding: 0 40px;
                    font-size: 40px;
                }
            }
         }
     }
 }
 @media (min-width: 769px) {
     .login-box {
        width: 70%;
         .checkbox {
             margin-top: 8px;
             height: 18px;
             label {
                font-size: 8px;
                line-height: 17px;
             }
            label::before {
                width: 17px;
                height: 17px;
                line-height: 17px;
            }
            label::after {
                width: 17px;
                height: 17px;
                line-height: 17px;
            }
         }
         .forget {
             font-size: 10px;
             line-height: 6px;
             margin: 10px 0;
         }
        .or{
            fieldset{
                height:20px;
                border-top: 1px solid;
                legend{
                    padding: 0 10px;
                    font-size: 12px;
               }
            }
        }
     }
 }
 .login-box {
     margin: 0 auto;
    color: #99999A;
     .facebook {
        background: #3966B8;
        border-right: none;
        border-bottom: none;
        color: #DBDBE5;
        border-color: #DBDBE5;
        legend{
            text-align: center;
            color: #747474;
            opacity:0.49;
        }
    }
    .email {
      margin-top: 0;
    }
    .checkbox {
      text-align: left;
      display: flex;
      align-items: center;
      color: #99999A;
    }
    .facebook {
      background: #3966B8;
    }
    .google {
      background: #DEDEDE;
    }

    .forget {
      color: #878787;
    }
    .or {
      fieldset {
        border-left: none;
        border-right: none;
        border-bottom: none;
        color: #DBDBE5;
        border-color: #DBDBE5;
        legend {
          text-align: center;
          color: #747474;
          opacity: 0.49;
        }
      }
    }
  }
</style>
