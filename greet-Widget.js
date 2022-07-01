document.addEventListener('alpine:init', () => {
    Alpine.data('greetData',function(){
       return {
        show: false,
        name:'',
        greeting:'',
        greetMe(){
            this.greeting=greet(this.name)
            setTimeout(()=>{
                this.show=false;
                this.name=''
            },8000)
        }

    } 
    })
})