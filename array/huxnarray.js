class MyArray{
    constructor(){
        this.length = 0;
        this.data ={}
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data
        
       
    }
}

const myNewArray = new MyArray();
console.log(myNewArray.push(1));
console.log(myNewArray.push(2));
console.log(myNewArray.push("Ekene"));

