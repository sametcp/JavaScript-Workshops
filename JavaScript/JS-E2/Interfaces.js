// interface'ler SOLID yazılım geliştirme prensibinin hemen hemen tamamını kapsayan yapı taşıdır. katmanlar arasındaki
// bağımlılığı kaldırmak için veya yazılan operasyonlar arasında, interface'leri kullanabilmeliyiz. JS'de interface'lere
// benzer yapıları kurabiliriz. interfaceler aslında bize bir şablon, arayüz sunar. bu şablon vasıtasıyla çeşitli ortam-
// lara bağımlılıklar kurarız ve o bağımlılıkların içerisine bu arayüzü implemente eden concrete dediğimiz sınıflara
// implement özelliği sunarız. interfaceler newlenemezler, tek başlarına bir anlamı yoktur.

function sendEmail(personInterface) {  // interface burda fonksiyon değil de parametredeki personInterface değişkenini implemente ettik gibi düşünebilirsin
    // ara sınıfım bu fonk. buraya interface'imi monte ediyorum
    var to = personInterface.eMail; // bu 2 değişkeni, newlenemeyecek bir şekilde oluşturduk. newlendiğinde constructor gibi çalışmayacak yani
    var name = personInterface.name // bu 2 değişken aslında soyut bir yapı. tek başına bir anlamı yok. dışarıdan buraya Customer vs. göndericez

    var send = function () {
        alert("Mail sent to : " + name + "/" + to);
    }

    send();
}

//Concrete - somut sınıfım
function Customer(name,eMail) {
    this.name = name; // sendEmail'de bu değişkenler olduğundan burada implemente edilmesi gerek bu değişkenlerin ki şu an öyle.
    this.eMail = eMail; // constructor vasıtasıyla set ediyoruz
    //Other staff
}

// Yukarıdaki Customer gibi başka bir fonksiyon eklemek istesem mesela, yapıyı bozmadan nasıl eklerim ?
function Employee(name,eMail,saddadad) {
    this.name = name;
    this.eMail = eMail;
    //Other staff
}

var someCustomer = new Customer("Samet", "sametberk.simsek@gmail.com")
var someEmployee = new Employee("Berk", "sametberk55@hotmail.com")
sendEmail(someCustomer)
sendEmail(someEmployee)