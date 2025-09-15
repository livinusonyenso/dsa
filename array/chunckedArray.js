// const chunck = (arr,size)=>{
//     let chunked = [];
//     let index = 0

//     while (index < arr.length ){
//     const chunk = arr.slice(index, index + size)
//     console.log("................",chunk);
//     chunked.push(chunk) 
//     index += size
//     }

//     return chunked

// }
// const item = [1,2,3,4,5,7,8]
// console.log(chunck(item,2));


const chunck = (item,size) =>{

    let chunked = [];
    let index = 0;
    while(index < item.length){
        const chunck = item.slice(index, index + size)
        chunked.push(chunck)
        index += size
        console.log("................",chunck);
        
    }
    return chunked
}

const ItemArrays = [1,4,5,6,7,8,92,3,4,5,6,7,8,94,54,5,6,7,8,9,6,7,8,9]
chunck(ItemArrays,4)


//for Loop

const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
