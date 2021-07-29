class Personel{

    constructor(ad,soyad){
        this.ad = ad // aşağıda personel.ad = "Samet" gibi class'ın içerisine ad diye bir değişken ekliyor.
        // parametredeki ad ile alakası yok isim benzerliği. eşitliğin sağındaki kısım parametredeki ad.
        // this.ad = Personelin adı, this.soyad = Personelin soyadı
        this.soyad = soyad;
    }

    kaydet(){
        console.log("Personel kaydedildi." + " " + this.ad)
        // = console.log(`Personel kaydedildi : ${this.ad}`);  (bu işaret Alt Gr + enterin yanındaki tuş)
    }
}

const personel = new Personel("Samet","Şimşek")

personel.kaydet()
// personel. dersen ad ve soyad geliyor. constructor'daki this.ad'a hitap ediyor direkt.

 personel.adi = "Samet3"  // burdaki personel.ad ile personel değişkeninin türü olan class'daki ad ile alakası yok.
// // sınıftan istediğim kadar değişken tarafından özellik tanımlayabilirim. (prototype araştır)
 console.log(personel.adi)