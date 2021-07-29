// Constructor'lar, OOP'nin temelidir.
//This in a function inside an object
var student = {firstName: "Samet", lastName:"Şimşek", fullName:function(){
    return this.firstName + " " + this.lastName;
    }
    // this keyword'ünden bahsedilen, ait olduğu-içinde bulunduğu nesnenin ta kendisidir. (student)
}
alert(student.fullName());

//Object constructor = Nesne yapılandırıcı = bu nesneyi kullanan kişi, çağırdığı anda değerlerini kendisi atamak isterse kullanır.
// aşağıdaki Customer gibi mesela. yukarıdaki gibi sabit değil, fonksiyonu getiren kişi onun özelliklerine değer verebilir. (nesne değeri-özelliği)
// JavaScript'te aslında her şey nesnedir. fonksiyonu da nesne gibi kullanabilirim, atayabilirim vs.
//This in an object
// fonksiyon bir obje, constructor görevi görecekse pascalcase yazımı kullanılır
function Customer(first, last, city, country, age){  // burdaki parametreler nesnemizin özelliği değil.
    this.first = first;  // arka planda oluşan nesne değeri bunlardır.
    this.last = last;
    this.city = city;
    this.country = country;
    this.age = age;
}
// new Customer dediğimde arka planda Customer türünde bir nesne oluşur.
var someCustomer = new Customer("Samet", "Şimşek", "Samsun", "Turkey", 19);  // değişkenimi bir nesneye atadım.

alert(someCustomer.country)