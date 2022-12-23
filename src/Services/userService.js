import { Users } from "../Data/Users.js";
import DataError from "../Models/DataError.js";

export default class UserService {
  constructor(loggerService) {
    this.customers = [];
    this.employees = [];
    this.errors = [];

    this.loggerService = loggerService;
  }

  load() {
    for (const user of Users) {
      switch (user.type) {
        case "customer":
          if (!this.CheckValidateCustomer(user)) {
            this.customers.push(user);
          }
          break;

        case "employee":
          if (!this.CheckValidateEmployee(user)) {
            this.employees.push(user);
          }

          break;

        default:
          this.errors.push(new DataError("Hatalı kullanıcı tipi", user));
          break;
      }
    }
  }

  CheckValidateCustomer(user) {
    let requiredFields = "id firstName lastName age city type".split(" ");
    let hasErrors = false;
    for (const item of requiredFields) {
      if (!user[item]) {
        let hasErrors = true;
        this.errors.push(new DataError(`Gerekli alan  :  ${item}`, user));
      }
    }

    if (Number.isNaN(Number.parseInt(+user.age))) {
      this.errors.push(
        new DataError(`Dogrulama hatası :  ${user.age} Number tipinde değil. `)
      );
      let hasErrors = true;
    }

    return hasErrors;
  }

  CheckValidateEmployee(user) {
    let requiredFields = "id firstName lastName salary".split(" ");
    let hasErrors = false;
    for (const item of requiredFields) {
      if (!user[item]) {
        let hasErrors = true;
        this.errors.push(new DataError(`Gerekli alan  :  ${item}`, user));
      }
    }
    if (Number.isNaN(Number.parseInt(+user.age))) {
      let hasErrors = true;
      this.errors.push(
        new DataError(`Dogrulama hatası :  ${user.age} Number tipinde değil. `)
      );
    }
    return hasErrors;
  }

  add(user) {
    switch (user.type) {
      case "customer":
        if (!this.CheckValidateCustomer(user)) {
            this.customers.push(user);
          }
        break;

      case "employee":
        if (!this.CheckValidateEmployee(user)) {
            this.employees.push(user);
          }
        break;

      default:
        this.errors.push(new DataError("kullanıcı eklenmedi ! ", user));
        break;
    }
    this.loggerService.log(user);
  }

  listCustomers() {
     return this.customers
  }
  getCustomerById(id) {
     return this.customers.find( x=> x.id === id)
  }

  getCustomersSorted(){
    return this.customers.sort((customer1 , customer2)=>{
        if(customer1.firstName < customer2.firstName){
            return -1;
        }else if(customer1.firstName === customer2.firstName){
            return 0;
        }
        else{
            return 1;
        }
    })
  }

}
