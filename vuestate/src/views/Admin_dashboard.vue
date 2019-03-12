<template >
   <div class="Admin_dashboard">
        
         <!-- <router-link id="extra" to="/forms"><button >Add-User</button></router-link>  -->
         <button @click='adduser'>Add-User</button>
         <button @click='resetpassword'>Reset_Password</button>
         <button @click='logout'>logout</button> 
           
      
  </div>
</template>

<script>
// @ is an alias to /src
import forms from '@/components/forms.vue'
import resetpassword from '@/components/resetpassword.vue'
 export default {
  name: 'Admin_dashboard',
  components: {
    resetpassword,forms
  },
  data: {
        
    },
methods:{
  
resetpassword:function()
{
    alert("resetpassword");
    this.$router.push('/resetpassword');
},
    adduser:function(){
       this.$router.push('/forms');
    },

    logout:function(){
    const toke= localStorage.getItem('token');
    console.log("hy",toke,"free");

    const token = localStorage.removeItem('token');
    console.log(token+"###@Aprit@###");
    alert("You have successfull logout");
    this.$router.push('/');
    //   const token= localStorage.removeItem('token');
    // console.log("hy",token,"free");
                
  },
    Hello(){
        if(t)
        {
            console.log("Right");
        }
        else
        {
             console.log("wrong");
        }
    }
}
}
</script> 

<style>
button{
   text-align:center;
}
</style>