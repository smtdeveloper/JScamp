console.log("Hello World")

// JS type safe değildir.



let  USDToday = 3.20
let  USDYesterday = 3.10


console.log("USD BUGÜN : "  + USDToday)
console.log("USD Dün : "  + USDYesterday)

if(USDToday > USDYesterday){
  console.log("Dolar artdı img")
    }
    else if (USDToday < USDYesterday) {
        console.log("Dolar düştü img")

    } else {
        
        console.log("Dolar aynı img")
    }

    const EuroDun = 4.20
    
    console.log( "Euro Dun : "  + EuroDun)

    // Array
    // camelCasing
    // PascalCasing

    
    let konutKredileri = ["A Kredisi" ," B Kredisi" , " C Kredisi "]
    
    for (let i =0 ;  i < konutKredileri.length; i++) {

        console.log(konutKredileri[i])

        }
    
        console.log("Samet")

        function Save(){
            console.log("save metotu calısdı ")
        }

       

        function Delete(){
            console.log("Delete metotu calısdı ")
        }

        function Update(){
            console.log("Update metotu calısdı ")
        }

        function GetAll(){
            console.log("GetAll metotu calısdı ")
        }

        // CRUD İŞLEMLERİ
        // create 
        // read
        // update
        // Delete

        let User1 =  {Id:1 , Name: "Engin" , Phone: "444444" , TC: "9999999" , Maas:"8000" }
        let User2 =  {Id:2 , Name: "Samet" , Phone: "555555" , TC: "66666" , Maas:"15000" }
       

        function Save(user){
            console.log(user.Name + " : " + user.Maas + " TL ")
        }

        Save(User2); 

        let users = ["Samet","Engin"]
       console.log(users)
      
      
      
        let users2 = [ User1, {Id:4 , Name: "Eslem" } , "Aydın" , {city: "İstanbul" } ]
        console.log(users2)

        console.log("---------------")

       
        //Rest
        console.log("Rest")

        let showProducts = function (id,...products) {
            console.log(id)
            console.log(products)
        }

       //console.log(typeof showProducts)
       showProducts(11,["Elma","Armut"] , ["Cilek", "kiraz" ,"cxc"]);
        
      
        //Spread
        console.log("Spread")

        let points = [10,20,30,40,50,60,25,15]
        console.log(...points)
        console.log( "En en yüksek puan : "  + Math.max(...points))

      
          //Destructring
          console.log("Destructring")
          
          let fun1 = function () {
              console.log("fun1 calıstı")
          }

          let Array1 = [10,20,fun1,"samet"]
          let [sayı1,sayı2,metot,string] = Array1

          console.log(string)

          let blog = {id:1 , BlogTitle:"yazılım"}
          console.log(blog.id)
          console.log(blog["BlogTitle"]) // yorum satırı

          




