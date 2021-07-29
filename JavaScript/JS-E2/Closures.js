// var counter = 0  // bu şekilde tanımlamam, diğer js dosyalarından da erişilebildiği anlamına geliyor. yani bu değişkene
// // herkes erişebilir. ben bu counter'ın closures vasıtasıyla sadece add fonk. için geçerli olmasını istiyorsam bir 
// // clouser yazmam gerek. burda global, fonk'da private çünkü normalde. sadece add için global davranmasını istiyorum.

// function add() {
//     // fonksiyon içinde tanımlanan bir değişken, fonksiyon başladığında oluşturulur ve görevini tamamladıktan
//     // sonra işlevi biter. o yüzden fonk'a her bastığımda çalışır. burda da yeniden tanımlanıp 0 oluyor yani.
//     //o yüzden dışarıdan(private scope değil de global scope'da) tanımlamam gerek artmasını istiyorsam burda.
//     //var counter = 0;

//     counter += 1;
//     return counter;
// }



// function someOtherFunction() {
//     counter +=10;
// }


// add değişkeni fonksiyona atanmış, o fonksiyon da fonksiyon return ediyor. kod derlendiğinde bu bu değişken kendi
// kendine çalışıyor, 1 kereliğine invoke(çağırmak) ediliyor ve bir daha çalışmamak üzere aslında yazılıyor. kendisi
// 1 kere çalışıyor eğer daha çok çalıştırmak istiyorsan add'i senin çağırman gerek. click ile vs. add'i çağırdığımda
// add fonksiyonunun kendisi değil, içindeki return olan fonksiyon çalışır. var counter = 0 çalışmaz mesela. o değişken
// başta 1 kere çalıştı. dışarıdan da erişemiyoruz. burdaki değişken add için sadece add metodu için global. add için
// protect edilen bir değişken bir nevi.
var add = (function () {
    var counter = 0;
    return function () 
    {
        return counter += 1;
    }
})();