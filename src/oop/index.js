class Customer{
    
    constructor(id , number){
        this.id = id;
        this.number = number
    }
}

let customer = new Customer(1 , "147")

// Prototyping

console.log(customer.number)

class IndıvidualCustomer extends Customer {
    constructor(firstName,id,number){
        super(id,number)
        this.firstName = firstName
    }
}

let ındıvidualCustomer = new IndıvidualCustomer("Samet")
console.log(ındıvidualCustomer.firstName)

class CorprateCustomer extends Customer {
    constructor(companyName,id,number){
        super(id,number)
        this.companyName = companyName
    }
}

