console.log(" -------- 2.GÜN ödevleri --------")

console.log("  1.ödev  ")
//  1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
// Araştırma konusu : şart blokları : if )


function sayilar(...sayilar) {
    let sayac 
    for (let i = 0; i < sayilar.length; i++) {
        
        sayac = 0;
        for(let a =1; a<=sayilar[i]; a++) 
		{			
			if((sayilar[i]%a)==0) 
			{
				sayac++;				
			}
		}
		if(sayac == 2 )
		{ 
			console.log(sayilar[i] + " asal sayıdır");

		}
    }

}

sayilar(1,10,5,1,2,8,11,52);

//v2
function checkPrimes(...numbers) {
    for (let number of numbers) {
      if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
      } else {
        console.log(`${number} is not a prime number.`);
      }
    }
  }
  
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Örnek kullanım
  checkPrimes(1,2, 3, 4, 5, 6, 7, 8, 9, 10);
  

console.log("  2.ödev  ")
// 2 - Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
// (Arkadaş sayılar için google)

function NumberOfFriends(sayi1,sayi2) {

    let sayi1Top=0;
    let sayi2Top=0;
    for(let i=1;i<sayi1;i++){

        if(sayi1%i==0)
        sayi1Top +=i;
    }
    for(let i=1;i<sayi2;i++){

        if(sayi2%i==0)

        sayi2Top +=i;
        }

        if(sayi1==sayi2Top && sayi2==sayi1Top) 
        { 

           console.log("Arkadaş Sayılardır.")
        }
    else   console.log("Arkadaş Sayı Değildir.")

}


NumberOfFriends(220,284)

//V2
function areFriendly(x, y) {
    // Karekökünü alın ve tam sayı olup olmadığına bakın
    const root = Math.sqrt(x + y);
    if (Number.isInteger(root)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Örnek kullanım
  console.log(areFriendly(220, 284)); // true
  console.log(areFriendly(1184, 1210)); // true
  console.log(areFriendly(500, 500)); // false
  console.log(areFriendly(1, 2)); // false
  

console.log("  3.ödev  ")
// 3 - 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
 
function isNumberPerfect(number){
	let toplam = 0;
	for (let i = 1; i < number; i++) {
		if (number % i == 0){
			toplam += i;
		}
	}
	if (toplam == number){
		return true;
	}
}

function getPerfectNumbers(sınır){
	let mukosayi = [];
	for (let i = 1; i < sınır; i++) {
		if (isNumberPerfect(i)){
			mukosayi.push(i);
		}
	}
	return mukosayi;
}
console.log(getPerfectNumbers(1000));

console.log("  4.ödev  ")
// 4 - 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

 function asalSayilar(n) {
    let sayac = 0;
  
    for (let sayi = 2; sayi < n; sayi++) {
    
        let kontrol = 0;
        for (let i = 2; i < sayi; i++)
            {
               if (sayi % i == 0)
                {
                    kontrol = 1;
                    break;
                } 
            }
            if(kontrol==0)
            {
                console.log(sayi + " Asal Sayı");
                sayac++; 
            }
    }
 }

 asalSayilar(10);


//  Kodlarınızı github'da paylaşınız.

// Yoruma github adresini bırakınız.

// Diğer arkadaşlarınızın kodlarını inceleyiniz. Beğenirseniz yıldızlayınız.