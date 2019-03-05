<template>
  <div id="app">
  <div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/information">information</router-link>                      
 </div>
<router-view/>    
</div>



<div class="left" >
<h1>{{ custom }}</h1>
</div>
</template>







<script>
import { mapState } from 'vuex'

export default
{
    name:'HelloWorld',
   computed: mapState({

       custom:'title'

   });
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
#information_Route{
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
  text_align:center; 
  float: left;
  margin-left: 536px; 
  }



</style>