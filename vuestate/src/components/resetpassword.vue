<template>
     <div>     
        <h2>Reset-Password</h2>
          <form>
              <input type="text" placeholder="New-password">
              <input type="text" placeholder="Conform-newpassword">
          </form>
              <button class="Button" @click="buttonClicked">hy</button>
    </div>
</template>
<script>
   export default
   {
      methods:
       {
             reset:function()
             {
                 alert("Reset");
             }      ,
             buttonClicked() {
    this.$emit('button-clicked')
  }
      }  
       }
</script>
