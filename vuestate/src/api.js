import axios from "axios";
 
export default axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json",
  }
});
// https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node
// https://gist.github.com/thebigredgeek/230368bd92aa19e3f6638b659edf5cef

// https://blog.bitsrc.io/understanding-json-web-token-authentication-a1febf0e15