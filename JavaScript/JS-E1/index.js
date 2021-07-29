var kullanicilar = [
    {email: "sametberk.simsek@gmail.com", sifre: "12345"},
    {email: "kerem.gokdemir@gmail.com", sifre: "12345"}
]

var tivitler = [
    {email :"sametberk.simsek@gmail.com", tivit:"Bugün hava çok güzel"},
    {email :"sametberk.simsek@gmail.com", tivit:"Ekonomi bitmiş"},
    {email :"kerem.gokdemir@gmail.com", tivit:"Derslerime çalışmam gerek"}
]

var email = prompt("E-mail adresinizi giriniz")
var sifre = prompt("Şifrenizi giriniz")

function girisYap(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)
    || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre))
    {
        console.log("Giriş işlemi başarılı...")
        console.log(tivitler)
    }
    else
    {
        console.log("Kullanıcı adı veya şifresi hatalı");
    }
}

girisYap() // fonksiyonu yukarıda sadece tanımladık. fonksiyonu çalıştırmak için onu parametresizse bu şekilde çağırmamız
// gerek. parametreli falansa ona göre çalıştırıp işlemleri yaparız.