// inheritance = miras

function Person(firstName, lastName,asd) {
    this.firstName = firstName;
    this.lastName = lastName;

    //Ekle (operasyonu diye bir şey eklersem mesela samet'in bir operasyonu da olacak)
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Samet", "Şimşek")
//Student.prototype = new Person("asd","asd") dersem yeni inherit nesnem bu olur. üstteki nesnemi kullanıyorum aşağıda. inherit ile 1 obje alıyorum yani
// Person içinde this ile 1 tane obje oluşturuyorum gibi. bu ojeyi de Student'a miras olarak verdim. o da kullanıyor özelliklerini. student sınıfından tanımlanan her nesne bu nesneyi kullanabilir
// burda Student miras alıyor. miras alacağı istenen nesneyi ise Student'a atıyorum. this.firstName gibi

var samet = new Student("Programming")

// bu şekilde öğrencime firstName'i lastName'i kullandırabiliyorum. yani samet'in ismini soyismini aslında başka class'dan
// tanımladım ve kullandım. miras aldım
alert(samet.firstName + " " + samet.lastName + " loves" + samet.favoriteCourse)