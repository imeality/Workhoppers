<template>
       
  <div class="login-wrapper border border-light">
     <h1>{{mg}}</h1>
    <form class="form-signin" @submit.prevent="login" action="">
    
      <h2 class="form-signin-heading">Please sign in</h2>
     
      <label for="inputusername" class="sr-only">username</label>
     
      <input v-model="username" type="text" id="inputusername" class="form-control" placeholder="username" required autofocus>
     
      <label for="inputPassword" class="sr-only">Password</label>
    
      <input v-model="password" type="text" id="inputPassword" class="form-control" placeholder="Password" required>
    
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              
    </form>
  </div>
</template>

<script>
import http from "@/api"
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
      
    }
  },
  props: {
    mg: String
  }, 
 methods: {
    login () {
        
     var Data={
           username:this.username,
           password:this.password
      }
console.log(Data);
        
      http
          .post("/admin/login",Data)
          .then(response=>{
          // this.$router.replace(this.$route.redirect || '/Admin_dashboard');
          console.log(response);
          console.log(response.data.token);
          console.log(response.config.xsrfHeaderName);
           localStorage.setItem('token',response.data.token)
            var dat= localStorage.getItem('token');
         console.log("Arpit"+dat);
       this.$router.push('/Admin_dashboard')
          })
          .catch(function (error) {
          console.error(error.response);
                    });
      console.log(this.email)
      console.log(this.password)
      alert("login successfull");
    }
    
 }
}
</script>

<!--style lang="css">
body {
  background: #605B56;
}

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style!-->

