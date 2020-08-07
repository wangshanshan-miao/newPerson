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
    data: {
      return () {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/login.scss';

  @media (max-width: 768px) {
    .login-box {
      width: 100%;

      .checkbox {
        text-align: left;
        margin-top: 8px;
        display: flex;
        align-items: center;
        color: #99999A;
        height: 18px;

        label {
          font-size: 14px;
          line-height: 29px;
        }
      }

      .button {
        display: inline-block;
        width: 89%;
        height: 52px;
        line-height: 52px;
        border-radius: 16px;
        background: #5A7786;
        border: none;
        margin-top: 8px;
        color: #fff;
        font-size: 12px;

        img {
          width: 7%;
          top: 15%;
        }
      }

      .forget {
        font-size: 8px;
        color: #878787;
        line-height: 6px;
        margin: 10px 0 43px;
      }
    }
  }

  @media (min-width: 769px) {
    .login-box {
      width: 73%;

      .checkbox {
        margin-top: 8px;
        height: 18px;

        label {
          font-size: 8px;
          line-height: 17px;
        }
      }

      .button {
        width: 100%;
        height: 27px;
        line-height: 27px;
        border-radius: 3px;
        margin-top: 8px;
        font-size: 10px;

        img {
          width: 7%;
          top: 15%;
        }
      }

      .login-btn {
        font-size: 12px;
      }

      .forget {
        font-size: 10px;
        line-height: 6px;
        margin: 10px 0;
      }
    }
  }

  .login-box {
    margin: 0 auto;

    .email {
      margin-top: 0;
    }

    .checkbox {
      text-align: left;
      display: flex;
      align-items: center;
      color: #99999A;

      label {}
    }

    .button {
      display: inline-block;
      border: none;
      color: #fff;
      position: relative;

      img {
        display: inline-block;
        float: left;
        position: absolute;
        left: 4%;
      }
    }

    .login-btn {
      background: #5A7786;
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
        border-color: #defffc;
        height: 20px;
        border-top: 1px solid;

        legend {
          text-align: center;
          padding: 0 10px;
          font-size: 12px;
          color: #747474;
          opacity: 0.49;
        }
      }
    }
  }
</style>
