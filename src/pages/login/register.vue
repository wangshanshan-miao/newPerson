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
        <button class="register">註冊</button>
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
    }
}

@media (min-width: 769px) {
    .register-box {
        width: 70%;
        .register {
            width: 89%;
        }
    }
}
.register-box {
    margin: 0 auto;
    .speRow {
        width: 100%;
        .row {
            display: inline-block;
            width: 40%;
            img {
                width: 12%;
            }
            input {
                width: 70%;
            }
        }
        .row:nth-of-type(1) {
            margin-right: 10%;
        }
    }
    .register {
        width: 89%;
        background: #5A7786;
        border-radius: 18px;
        color: #fff;
        font-size:16px;
        height: 36px;
        border: none;
        margin-top: 36px;
    }
}
</style>