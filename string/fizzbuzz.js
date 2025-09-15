// const fizzbuzz = (n) => {
//     for(let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz"); 
            
//         } else if(i % 3 === 0){
//              console.log("fizz");  
//         } else  if(i % 5 === 0){
//                console.log("buzz");  
//         }else{
//             console.log(i);
            
//         }
    
//     }
// }

// fizzbuzz(15)

const fuzzibuzz = (n) =>{
    for(let i = 0; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fuzzibuzz');
            
        }

      else  if( i  % 3 === 0 ) {
            console.log("fuzz");
            
        }

       else if( i  % 5 === 0 ) {
            console.log("fuzz");
            
        }

        else {
            console.log(i);
            
        }
    }
}
fuzzibuzz(20)