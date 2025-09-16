function reverseString1(str) {
  let reversed = '';
  console.log(`📦 Original: ${str}`);

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(`🔁 Adding: ${str[i]} → ${reversed + str[i]}`);
    reversed += str[i];
  }

  console.log(`✅ Reversed: ${reversed}`);
  return reversed;
}

reverseString1("Nigeria");


function Reversedstring2 (str){
    const splite = str.split('');
    console.log('splite items',splite)

    const reverse = splite.reverse();
    console.log("item reversed",reverse)

    const result = reverse.join('');

    console.log("result",result)
    return result;
}

const rverseItem = Reversedstring2("nigeria")
console.log('final result',rverseItem)

function reverseString3(string){
  let reverse = '';
  for(let a = 0;string.length - 1; a--){
    reverse += string[a];
    reverse--;
  }

return reverse;
}

 const reverse3 = reverseString3("livinus")
 console.log('reverse3',reverse3)

function loop(num){
  l
   for (let i= 0; num <= 10; i++){
  console.log(`loop iteration : ${i}`)
 }
}

const loopitem = loop([10])
console.log(loopitem)
