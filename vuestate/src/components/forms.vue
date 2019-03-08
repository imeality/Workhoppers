<template>
       
  <div class="login-wrapper border border-light">
     <h1>{{mg}}</h1>
    <form class="form-signin" @submit.prevent="login">
    
      <h2 class="form-signin-heading">Please sign in</h2>
     
      <label for="inputname" class="sr-only">name</label>
     
      <input v-model="name" type="text" id="inputEmail" class="form-control" placeholder="name" required autofocus>
     
      <label for="inputmobile" class="sr-only">mobile</label>
    
      <input v-model="mobile" type="text" id="inputmobile" class="form-control" placeholder="mobile" required>

      <label for="inputusername" class="sr-only">username</label>
     
      <input v-model="username" type="text" id="inputusername" class="form-control" placeholder="username" required autofocus>
     
      <label for="inputpassword" class="sr-only">Password</label>
    
      <input v-model="password" type="text" id="inputpassword" class="form-control" placeholder="password" required>
    
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
      id:0,
      name: '',
      mobile: '',
      username:'',
      password:''
    }
  },
  props: {
    mg: String
  },
  methods: {

    login () {
        var   Data={ name: this.name,     
                   mobile: this.mobile,
             username: this.username,
             password:this.password};
             console.log(Data);
      http
          .post("/admin/user/register",Data)
          .then(response=>{
            console.log("success");
          })
      
      console.log(this.name);
      console.log(this.mobile);
       console.log(this.username);
      console.log(this.password);   
    }
    
  }
}
</script>

<style lang="css">
body{
  text-align:center;
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
</style>

