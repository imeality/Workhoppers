import Vue from 'vue'
import Vuex from 'vuex'
import { async } from 'q';
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
            title:'My Title',
            //message:'Admin_Dashboard'

   accessToken:localStorage.getItem('access_token') ||  '',
      currentUser : {}  
             },
  getters:{
    
 
  },
  mutations: {
   
  },
  actions: {
    
 

    // login () {
    //         http
    //             .post("/admin/login",Data)
    //             .then(response=>{
    //             // this.$router.replace(this.$route.redirect || '/Admin_dashboard');
    //             console.log(response);
    //             console.log(response.data.token);
    //              localStorage.setItem('logged-in', true)
    //               this.$router.push('/Admin_dashboard')
    //             localStorage.set('login', response.data.token)
             
    //             })
    //             .catch(function (error) {
    //             console.error(error.response);
    //                       });
    //         console.log(this.email)
    //         console.log(this.password)
            
    //       }
    
        
     
              
      //       http
      //           .post("/admin/login",Data)
      //           .then(response=>{
      //           // this.$router.replace(this.$route.redirect || '/Admin_dashboard');
      //           console.log(response);
      //           console.log(response.data.token);
      //            localStorage.setItem('logged-in', true)
      //             this.$router.push('/Admin_dashboard')
      //           //Vue.localStorage.set('login', response.data.token)
             
      //           })
      //           .catch(function (error) {
      //           console.error(error.response);
      //                     });
      //       console.log(this.email)
      //       console.log(this.password)
            
      //     }


    //     register() {
        
//       Vue.localStorage.get('login');
//         console.log(token);
//         var token = req.headers['login'];
// http
//     .post("/admin/user/register",Data)
//     .then(response=>{
//       console.log("success");
      
//     })

// console.log(this.name);
// console.log(this.mobile);
//  console.log(this.username);
// console.log(this.password);   
// } 

  }
})
