//Class members --> Constructors, Fields(Public or Private), Functions, static members

// cons. sınıf gibi kullanacağım için pascalcase
function Customer(firstName, lastName) { //constructor
    this.firstName = firstName; //public
    this.lastName = lastName;

    var someField = "some value"; //private (this değil) dışarıdan değişken ile nesnesini oluştursak ulaşamayız.
    // sadece bu nesne içerisinde kullanılabilir. bu da var
    // keywordü ile yapılır. sadece bu fonk. içindeki diğer özellikler, nesneler, fonksiyonlar vs. kullanabilsin diye tanımlanır

    this.sendProduct = function () { //operation
        alert("Product sent!");
    }
}

var samet = new Customer("Samet", "Şimşek")  // firstName, lastName nesne üretildiği anda kullanılabiliyor.
samet.sendProduct();