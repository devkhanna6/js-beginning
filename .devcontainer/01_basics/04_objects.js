// Objects Basics
const mySym = Symbol("Key1")

const JsUser = {
    name: "Dev",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "dev@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(typeof JsUser[mySym])

JsUser.greeting = function(){
    console.log("Hello User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`)
}

// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const course = {
    courseName: "JsHindi",
    price: 999,
    courseTeacher: "Dev"
}

const {courseTeacher: Teacher} = course
// console.log(Teacher);

// {
//     "name": "dev",
//     "courseName": "Js",
//     "price": "free"
// }

