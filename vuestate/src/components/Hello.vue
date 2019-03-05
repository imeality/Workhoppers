<template>
  <div class="Hello">
    <h1>{{ m }}</h1>

     <h1>{{firstname}}</h1>
     <h1>{{lastname}}</h1>
         <br><br>
         Username : <input type = "text" v-model = "username"><br><br>
         password : <input type = "text" v-model = "password">


 </div>  
</template>

<script>
export default {
  name: 'Hello',
  props: {
    m: String,
        firstname : "Ria",
      lastname  : "Singh"
    },
 data: {
               username : String,
               password:String
            },
   watch : {
               user:function(val) {
                  console.log(this.username) ;
                  console.log(this.password) ;
               }
              


   }
  }
</script>