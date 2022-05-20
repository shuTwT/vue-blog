<template>
   <div class="container">
       <div class="login-card">
           <span >登录</span>
           <input type="username" class="input-box" ref="input1" placeholder="请输入您的用户名" autocomplete="off">
           <input type="password" class="input-box" ref="input2" placeholder="请输入您的密码" autocomplete="off">
           <input type="submit" value="登录" class="login-btn" @click="loginBtn()">
       </div>
   </div>
</template>

<script setup >
function loginBtn(){
console.log(1);

}
</script>

<style scoped>
.container{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
}
.login-card{
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    border-radius: 30px;
}
@media (min-width: 768px) {
    .login-card{
    background-color: rgba(154, 205, 50, 0.8);
    height: 300px;
    width: 600px;
    }
    .input-box{
        height: 10%;
        width: 60%;
        margin: 1%;
    }
}
</style>