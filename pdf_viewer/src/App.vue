<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><br><br><br>
      <router-link to="/pdf_download"><span id="generic">PDF Download</span></router-link>
    </div>
    <router-view/>
      
</div>
</template>
<script>
import pdf from 'vue-pdf'

// var options = {
//    width: "20rem",
//    height: "20rem"
// };
// PDFObject.embed("@/pdf/vuejs_tutorial.pdf", "#my-container", options);

//PDFObject.embed("myfile.pdf", "#my-container");

var loadingTask = pdf.createLoadingTask('./vuejs_tutorial.pdf');
export default {
    components: {
        pdf
    },
    data() {
        return {
            currentPage: 0,
            pageCount: 0,
        }
    }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#generic{
  background-color:#42b983;

}
</style>
