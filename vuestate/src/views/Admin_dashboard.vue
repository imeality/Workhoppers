<template >
   <div class="Admin_dashboard">
         
      <forms/>
      <toggle-button :value="false"
               color="#82C7EB"
               :sync="true"
               :labels="true"/>
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

       toggle: function(){
            this.isOpen = !this.isOpen
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

