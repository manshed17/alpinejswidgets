document.addEventListener('alpine:init', () => {
    Alpine.data('transportFeeWidget', function(){
        return {
            show1:false,
            shiftTime: '',
            fee: '',
            displayFee(){
            this.fee = transportFee(this.shiftTime)
            setTimeout(()=>{
                this.show1=false;
                this.shiftTime=''
            },5000)
        
            }
        
        }
    });
})