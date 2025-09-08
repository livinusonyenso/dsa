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



class MyDataArray{
    constructor(){

        this.length = 0;
        this.data ={};
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.data


    }

}

const newArray = new MyDataArray()
console.log(newArray.push("kc"));
console.log(newArray.push("uc"));
console.log(newArray.push("mc"));
