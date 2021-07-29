// Person, soyut sınıf gibi. tek başına bir anlamı yok ve newlenemiyor. abstract sınıfı görevi gören bir nesne-obje
var Person = {name: "None", email: "None", sendEmail: function(){
    alert("Mail sent to :" + this.name + "/" + this.email);
}}

// bu 2 fonk. aslında this ile Person'ı inherit(implement) ediyor.
function Customer(name, email) {
    this.name = name;  // yukarıdaki objenin(abstract class) name'i . burdan name'i set edebiliyoruz.
    this.email = email;
    //Other staff
}

function Employee(name, email) {
    this.name = name;
    this.email = email;
    //Other staff
}

Customer.prototype = Person;  // inheritance işlemi. müşteri artık kişi sınıfından inherit(implement) edilmiş, kişi oldu.
// Person, newlenebilir bir nesne değil.
// Müşteri, bir Kişidir dedik burda. objeyi aldık.
var someCustomer = new Customer("Samet", "sametberk.simsek@gmail.com");
someCustomer.sendEmail();

Employee.prototype = Person;  // ile Person objemi buraya da gönderdim
var someEmployee = new Employee("Berk", "sametberk55@hotmail.com");
someEmployee.sendEmail();