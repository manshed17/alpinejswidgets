document.addEventListener('alpine:init', () => {
    Alpine.data('WordgameWidjet', function(){
        return{
            show3:false,
            show4:false,
            show5:false,
            wordString:'',
            filteredWord:'',
            wordString1:'',
            filteredWord1:'',
            wordString2:'',
            filteredWord2:'',
            findLongestWord(){
                this.filteredWord = longestWord(this.wordString)
                setTimeout(()=>{
                    this.show3=false;
                    this.wordString=''
                },5000)
            
            },
            findShortestWord(){
                this.filteredWord1 = shortestWord(this.wordString1)
                setTimeout(()=>{
                    this.show4=false;
                    this.wordString1=''
                },5000)
            },
            findLength(){
                this.filteredWord2 = wordLengths(this.wordString2)
                setTimeout(()=>{
                    this.show5=false;
                    this.wordString2=''
                },5000)
            }
        


        }
    })
})