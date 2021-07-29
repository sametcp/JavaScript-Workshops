// prototyping desteği ile nesnelerime daha sonradan özellikler ekleyebilirim. mesela framework'leri de olabilir onlara
// dokunmadan tabiki ama onlara ek özellikler eklemek için bu yöntemi kullanabilirim.


function Customer(first, last, city, country, age) {
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country
}
var someCustomer = new Customer("Samet", "Şimşek", "Samsun", "Turkey", 19)

// eklediğim özelliklere her yerde ihtiyacım yoksa veya bu özellikleri her yerde kullanmak istemiyorsam prototype
// deseninden-özelliğinden yararlanabilirim. eğer istersem Customer'i çağırırım zaten diğer yerlerden gerçi paramtere fazlası veya eksiği problemi yok.
Customer.prototype.eMail = "sametberk.simsek@gmail.com";
Customer.prototype.fullName = function (){
    return this.first + " " + this.last;
}

alert(someCustomer.first)
alert(someCustomer.city)
alert(someCustomer.eMail)
alert(someCustomer.fullName())