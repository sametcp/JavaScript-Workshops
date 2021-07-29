//değişken tanımlamada kullanılan keywordler örnek : var, let, const
let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}   // bu tanıma obje tanımı deniyor. 01:20:00 (keyword zaten zorunlu herhangi bir tanım yaparken)
//console.log(student)

// default parametreyi en sonda yazman gerekir. 01:33:30
function save(puan = 10, ogrenci) // yukarıdaki student ile alakası yok. isim benzerliği gibi düşün. student idi 01:25:00
{
    console.log(ogrenci.name + " : " + puan)
}
save(3, student)

// undefined değer = save fonksiyonuna göre : bana bir şey gönderilmedi, 
// o zaman default'unu işleme sokayım diyor. yani params kısmındaki verilen değer (01:37:00)



let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak"]

//console.log(students)

let students2 = [student, {id:2, name:"Samet"},"Samsun",{city:"İstanbul"}]
//obje, obje, string, obje

//console.log(students2)


// js'de bir değişkene fonksiyon atayabilirsin. dolayısıyla
// default gelen fonksiyon name'i vermene gerek yok. zaten isme, değişkene atıyosun onun adı o verdiğin değişken (01:59:45)

// rest = geriye kalan (02:01:00)
// rest operatörü ile parametreye istediğimiz kadar parametre, değer gönderebiliyoruz ve o, array olarak tutuluyor.
let showProducts = function (id,...products) {  // ...x array 02:05:30
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)  // typeof ile sonrasında yazılan değişkenin en son aldığı değerin türünü okuyabiliriz. s,i,f vs
//showProducts(10,"Elma","Armut","Karpuz") // array içinde array 02:08:00 (rest parametre)


//spread operatörü ile elimizdeki array'i ayrıştırıyoruz.
// spread = ayrıştırmak
let points = [1,2,3,4,5,60,14]
console.log(...points)  // bu şekilde mesela api'den aldığımız arraydeki değerleri spread yaparak okuyabiliyoruz. ...x
console.log(Math.max(...points))  // dizi şeklinde gönderirsen okuyamaz. çözüm bu. yoksa not a number hatası alırsın NaN.
console.log(..."ABC" , "D", ... "EFG", "H")  // stringler, bir char arrayidir.



//destruct = parçalamak
//Destructuring (çok önemli, reactte çok kullanılıyor)
// elindeki arrayin değerlerini değişkenlere atama yöntemidir.
let populations = [10000, 20000, 30000,[40000,100000]]
let [small, medium, high,[veryHigh,maximum]] = populations  // small medium high aslında bunlar benim değişkenlerim-değerlerim.
// dizi altındaki bu değişkenlere atamaları yapıyorum. zaten let'te tanımladım. değişkenin değerine bir fonksiyon da atanabilir
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)  // 4. parametreyi tekrar destructure ettim ve atamayı öyle yaptım.
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)  // dizinin diğer elemanlarını okumadı.
    //::console.log(number)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])  // category'nin name alanı anlamında. 


let {id,name} = category
console.log(id)
console.log(name) // 02:37:00

//bu yapıyı Redux mimarisinde çok kullanıcaz


let x = [10,20,30,[40,50]]
function y([a,b,d,e],c){
    console.log(a)
    console.log(b)
    console.log(d)
    console.log(e)
    console.log(c)
}
y(x);

//let a = [..."ABC" , "D", ... "EFG", "He"]
//let [x,y,z,t] = a