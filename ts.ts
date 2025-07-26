// function Identity <T>(Value : T) : T{
//     return Value
// }

// const result =Identity("hello")

//Generic constrainst

// function PrintName<T extends {name : string}>(data : T){
//     console.log(data.name)
// }


// //Default Generic
// function Identity<T = string>(Value : T) : T{
//     return Value
// }

// interface formFiled {
//     email : string;
//     password: string
// }

// const form = new FormHandler<formFiled>({email: "", password : "password"});
// form.update("email","@example@gmail.com");
// form.update("password","1234");
// console.log(form.data)

interface user {
    FirstName : string;
    LastNme : string;
    Addresses: string;
    Bvn : number;
    Age : number;
    accountType : boolean;
    password : string
    name: string;
    email: string;
}

// 1. partia
type UserDraft = Partial<user>;

2. //Required 
type StrictUser = Required<user>;

3. //Pick
type PublickApi = Pick<user, "name" | "email">

//4. Omit
type SafeUser = Omit<user, "password">