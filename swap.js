  function swap (a,b) {
        var x = 0; 
        x = a;
        a = b;
        b = x;
      
        return [a,b] ;
    }

   function shuffle ( arr ) {
         var shuffle;
       //  shuffle = arr[1];
         //arr[2] = arr[3];
         //arr[3] = arr[0]
        //return arr ;
    
   
     for (var c = 0; c < arr.length; c++) {
          var t = Math.floor(Math.random ( ) *( arr.length-1) );
          var x;  
          x = arr[c];
          arr[c]=arr[t];
          arr[t]= x;
            
          console.log(t);
     }   
     return arr;
     }//  console.log(t);
