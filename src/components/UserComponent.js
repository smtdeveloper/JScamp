import { AbcLogger, BaseLogger, MongoLogger } from "../crossCuttingConcerns/Logging/Logger.js";
import Customer from "../Models/Customer.js";
import User from "../Models/User.js";
import UserService from "../Services/userService.js"

console.log("User Component Yüklendi")

let baseLogger = new BaseLogger()
let mongoLogger = new MongoLogger()
let abcLogger = new AbcLogger()


let userService = new UserService(mongoLogger);

let user1 = new User(1, "Samet", "Akca", "Kütahya",23);
let user2 = new User(2, "Codi", "Kedi", "Kütahya" , 1);
let user3 = new User(3, "Engin", "Demirog", "Ankara", 37);


userService.add(user1);
userService.add(user2);
userService.add(user3);

//console.log(userService.listCustomers())
//console.log(userService.getCustomerByIdId(1))


console.log( "---------")

userService.load()

let customerToAdd = new Customer(1, "Ahmet", "Kara", "Bolu" , 88 , "558825") 
customerToAdd.type = "customer"

userService.add(customerToAdd)

console.log(userService.employees)
console.log(userService.customers)
console.log(userService.errors)

console.log(userService.getCustomersSorted())