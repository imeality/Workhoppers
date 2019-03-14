<template>
     <div class="login-wrapper border border-light">
     
    <form class="form-signin" @submit.prevent="passwordreset" action="">
    
      <h2 class="form-signin-heading">Reset-Password</h2>
      <input v-model="password" type="text" id="password" class="form-control" placeholder="Newpassword" required autofocus>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Reset Password</button>
              
    </form>
  </div>
</template>
<script>
import http from "@/api"
import  axios  from  'axios'
   export default
   {

data()
{
    return{
        password:'',      
          
    }
},
methods:
       {
            passwordreset() {
           const token = localStorage.getItem('token')
        var reset={
             pass:localStorage.getItem('Pass_token'),
             password:this.password
         }
         console.log(reset);
      http
          .post("/admin/reset_password",reset,{headers:{'x-access-token':token}})
          .then(response=>{
              console.log(reset);
          console.log(response);
           conaole.log("Success",Heloooooooooooooooooooooooooooooooo);
           this.$router.push('/Admin_dashboard');
})
            }
       }
   }    
       
</script>
