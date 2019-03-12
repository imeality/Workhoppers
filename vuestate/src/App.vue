<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
       <router-link  to="/Admin_login">Admin Login</router-link> 
                  
    </div>
    <router-view/>
     
  </div>
</template>
<script>

// export default {
 
//   data () {
//     return {
//       isLogged: this.checkIfIsLogged()
//     }
//   },
//   created () {
//     this.$bus.$on('logged', () => {
//       this.isLogged = this.checkIfIsLogged()
//     })
//   },
//   methods: {
//     singout () {
//       this.$localStorage.removeItem('token')
//       this.isLogged = this.checkIfIsLogged()
//       this.$router.push('/')
//     },
//     checkIfIsLogged () {
//       let token = this.$localStorage.getItem('token')
//       if (token) {
//         return true
//       } else {
//         return false
//       }
//     }
//   }
// }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#extra{float:left; 
         background-color:green;}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
