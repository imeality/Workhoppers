<template>
  <div class="Hello">
    <h1>{{ m }}</h1>
         <br><br>
            Username : <input type = "text" class="form-control" v-model ="userData.username"><br><br>
            password : <input type = "text" v-model ="userData.password">
         
      
          <div class="form-group">
            <label for="name">Your Email Address</label>
            <input type="text"
             id="name"
             class="form-control"
             v-model="userData.username">
          </div>
         <div class="form-group">
             <label for="password">Enter Password</label>
             <input type="password"
             id="password"
             class="form-control"
             v-model="userData.password">
          </div>         

   </div>  
</template>
<script>
    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                }
            }
        }
        
    }
</script>