<template >
   <div class="Admin_dashboard">
        
        <router-link id="extra" to="/forms"><button >Add-User</button></router-link> 
         <button @click='logout'>logout</button> 
      
  </div>
</template>

<script>
// @ is an alias to /src
import forms from '@/components/forms.vue'

 export default {
  name: 'Admin_dashboard',
  components: {
    forms
  },
  data: {
        isOpen: false
    },
methods:{
  
    logout:function(){
        
       localStorage.removeItem('login');
    console.log(dat+"hy"+logout);
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