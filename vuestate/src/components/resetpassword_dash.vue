<template>
     <div>
         <h1>Welcome to mail service</h1>
         <table border="1px" align="center" >
           <span style="float:left;"> 
           <tr><td>Dear sir,</td></tr>
           <tr><td>greeting of the day!!!!!!!!!!!!!!!!!!</td></tr>
             <tr><td>Your resetpassword link is<br><h6 style="color:blue;">{{link}}{{pass}}</h6> press the button and reset you password.
             <button @click='resetpassword'>Reset_Password</button></td></tr> 
           <tr><td>Regards,<br>Imeality Infotech</td></tr>
           </span>
           
        </table>
     </div>
</template>
<script>
export default
{
  data()
  {
    return{
      pass: localStorage.getItem('Pass_token'),
      link: localStorage.getItem('link')
    }
  },
  methods:{
   resetpassword:function()
{
    alert("resetpassword");
    this.$router.push('/resetpassword')
}
  }
}
</script>