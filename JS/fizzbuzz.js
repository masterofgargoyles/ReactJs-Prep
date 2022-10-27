var output = [];
var i = 0;

function fizzBuzz() {
    if(i%3===0){
        if(i%5===0){
            output.push("fizzBuzz");
        }
        else{
            output.push("fizz");
        }  
    }
    else if(i%5===0){
        output.push("buzz");
    }
    else{
       output.push(i); 
    }
    
    i = i+1;
    console.log(output);
}