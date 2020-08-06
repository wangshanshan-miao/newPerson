<template>
    <div class="register-box">
        <div class="speRow">
            <div class="name row">
                <img src="../../assets/images/name.png">
                <input type="text" placeholder="姓氏"/>
            </div>
            <div class="row">
                <input type="text" placeholder="名稱"/>
            </div>
        </div>
        <div class="email row">
            <img src="../../assets/images/email.png">
            <input type="text" placeholder="電郵地址"/>
        </div>
        <div class="password row">
            <img src="../../assets/images/password.png">
            <input type="text" placeholder="帳戶密碼"/>
        </div>
        <div class="password row">
            <img src="../../assets/images/password.png">
            <input type="text" placeholder="確認密碼"/>
        </div>
        <button class="register login-btn button">註冊</button>
    </div>
</template>

<script>
export default {
    name: 'register'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/login.scss';

@media (max-width: 768px) {
    .register-box {
        width: 89%;
        padding-top: 90px;
        .speRow {
            .row {
                img {
                    width: 18%;
                }
                input {
                    width: 62%;
                }
            }
            .row:nth-of-type(1) {
                padding-top: 0px;
            }
        }
    }
}

@media (min-width: 769px) {
    .register-box {
        width: 70%;
        .speRow {
            .row {
                img {
                    width: 12%;
                }
                input {
                    width: 70%;
                }
            }
        }
    }
    .register {
        width: 60%;
        border-radius: 18px;
        margin-top: 46px;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
    }
}
.register-box {
    margin: 0 auto;
    .speRow {
        width: 95%;
        margin: 0 auto;
        text-align: left;
        display: inline-flex;
        .row {
            width: 49%;
        }
        .row:nth-of-type(1) {
            margin-right: 10%;
            width: 40%;
        }
    }
}
</style>