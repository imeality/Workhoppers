<template >
   <div class="Hello">
    <Hello m="Welcome Admin_dashboard/login"/>
     <Hello/>
     <form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import form from '@/components/form.vue'

export default {
  name: 'Admin_dash',
  components: {
    Hello,form
    
  }
}
</script>