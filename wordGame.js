function longestWord(x){
    var y = x.split(" ");
      var longWord = 0;
      
      for(var i = 0; i < y.length; i++){
        if(y[i].length >= longWord){
        longWord = y[i].length;
         var word = y[i];
          
         }
      }
        return word;
    }
    
    function shortestWord (sht){
    var l = sht.split(" ");
      var shortWord = l[0];
      
      for(var i = 0; i < l.length; i++){
        var y = l[i]
        if(y.length <= shortWord.length){
        shortWord = y;
         
         }
      }
      return shortWord;
    }
    function wordLengths(sum){
    var strSplt = sum.split(' ');
      var wordlength = strSplt.map(c => c.length);
      let total = 0;
      for (var i = 0; i < wordlength.length; i++){
      total += wordlength[i]
      }
      return total;
    }
    