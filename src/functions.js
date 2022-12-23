function AddToCart ( quantity,productName = "Elma ") {
    console.log( productName + " Sepete Eklendi - " 
    +" Adet : " , quantity )
}

//AddToCart();
AddToCart(10);
//AddToCart("Game Klavye");

let sayHello = function() {
    console.log("Hello")
}

sayHello();

let sayHello2 = ()=> { 
    console.log("Hello2")
} 

sayHello2()



function AddToCart2(productName, quantity, UnitPrice) {

    console.log( " -ürün : " + productName
                + " -adet : " + quantity
                + " -Fiyatı : " + UnitPrice)

}

AddToCart2("Elma",5,10)
AddToCart2("limon",8,12)


let product1 = {productName:"Elma",quantity:5,UnitPrice:8}



function AddToCart3(product) {

    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.UnitPrice)

}

AddToCart3(product1)

// referans tip : “string”, “object”, “class”, “interface”, “array”, “delegate”, “pointer”
let product2 = {productName:"limon",quantity:8,UnitPrice:9}
let product3 = {productName:"armut",quantity:8,UnitPrice:15}
product2 = product3
product2.productName = "Karpuz"

console.log(product3.productName)

// değer tip : “int”, “long”, “float”, “double”, “decimal”, “char”, “bool”, “byte”, “short”, “struct”, “enum”

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

//  istisna: “string”  referans olmasına rağmen değer tip gibi olur !
let name1 = "a"
let name2 = "b"
name1 = name2
name2 = "c"
console.log(name1)


function AddToCart4(products) {
    console.log(products)
}

let products = [
    {id:1, Name:"Alaptop", UnitPrice:5000},
    {id:2, Name:"Blaptop", UnitPrice:8000},
    {id:3, Name:"Claptop", UnitPrice:14000}
]

AddToCart4(products)

// rest ... toparlar
function add(...numbers) {
    let total = 0;
   for (let i = 0; i< numbers.length; i++) {
      total = total + numbers[i]
    }
    console.log(total)
}

add(10,20)
add(10,20,50)

// spread - ... ayrılır
let numbers = [10,20,44,22,55,11,88,99,17,52,44,24]
console.log(Math.max(...numbers))

//destructuring  - Atama
let city = [
    {plaka:"43", bolge:"Ege", nufus:"300K"},
    {plaka:"34", bolge:"Marmara", nufus:"2M"},
    {plaka:"09", bolge:"Ege", nufus:"980K"},
    [
        ["Ankara","Konya"]
    ]
]

let [kütahya,istanbul,aydın,[icAnadoluCities]] = city

console.log(kütahya)
console.log(icAnadoluCities)



let newproductName, newunitPrice, newquantity
({productName:newproductName, unitPrice:newunitPrice , quantity:newquantity}
    ={productName:"Elma",unitPrice:10,quantity:5})

    console.log(newproductName)
    console.log(newunitPrice)
    console.log(newquantity)


