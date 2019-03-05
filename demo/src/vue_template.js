Vue.component('testcomponent',{
    template: '<div><h1>This is coming from component.</h1></div>'
});

var vm=new Vue({
    el:'#componen_test'
});
var vm1=new Vue({
    el:'#component_test1'
});