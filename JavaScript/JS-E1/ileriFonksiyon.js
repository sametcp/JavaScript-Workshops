var selamFonksiyonu = function selam(){
    console.log("Merhaba")
}

selamFonksiyonu()


const selamFonksiyonu2 = () =>{
     console.log("Merhaba 2")
     console.log(12)
}

selamFonksiyonu2()


const selamFonksiyonu3 = (mesaj,mesaj2) =>{
    console.log(mesaj,mesaj2)
}

selamFonksiyonu3("Hello World!",2)

// js'de fonksiyonlar referans tip olduğundan değişkene atanabilir.

var topla = (sayi1,sayi2) =>{
    return sayi1+sayi2
}
let toplam = topla(3,4)
console.log(toplam)
