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

function kullaniciVarMi(email,sifre){
    console.log(email);
    console.log(sifre);
    for(i=0; i<kullanicilar.length;i++){
        if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre){
            return true;
        }
    }
    return false
}

function girisYap(){
    if(kullaniciVarMi(email,sifre))
    {
        console.log("Giriş işlemi başarılı...")
        console.log(tivitler)
    }
    else
    {
        console.log("Kullanıcı adı veya şifresi hatalı");
    }
}

girisYap()