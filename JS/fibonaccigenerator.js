function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        var a = 0;
        var b =1;
        var series= [];
        for(var i=0;i<n;i++){
            if(i===0){
                series.push(a);
            }
            else if(i===1){
                series.push(b);
            }
            else {
                var c = a+b;
                series.push(c);
                a = b;
                b =c;
            }
        }
    
        return series;
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    