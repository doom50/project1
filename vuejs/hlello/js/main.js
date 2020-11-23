new Vue({
    el: '#app',
    data: {
            now: ''
        },
        methods:{
            onclic: function() {
               // alert('onclick!!')
               this.now = new Date().toLocaleString();
            
        }
    } 
})