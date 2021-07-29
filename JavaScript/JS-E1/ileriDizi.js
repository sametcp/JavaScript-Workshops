const dizi = [1,2,3,4]

const kareDizisi = []

dizi.forEach(sayi1 =>{
    kareDizisi.push(sayi1*sayi1)
})

console.log(kareDizisi)

//map
// map ile yeni bir dizi ortaya çıkarabiliyoruz.

const mapDizi = dizi.map(sayi => sayi*3)  // işlem kısa olduğundan işlemleri süslü parantez içine yazamıyorum map
// fonksiyonunu kullanırken. 07:30. tek satırlık bir işlemse süslü parantezsiz yazmam gerek. aşağıda da öyle. map
// filter ve bazı fonksiyonlarda durum böyle. reduce'nin işleyişi bunlardan farklı mesela.

console.log(mapDizi)


//filter
// isteğe göre filtrelenmiş yeni bir dizi oluşturuyor.

const filtreliDizi = dizi.filter(sayi => sayi>2)
console.log(filtreliDizi)

//reduce

const toplam = dizi.reduce((acc,sayi)=>{
    return acc + sayi;
},10)

// burada sayi, gezdiğim ve kendisine atadığım değişkenim. acc ise başlangıç değer default'u sıfırdır. başlangıç
// değerini istersek süslü parantezden sonra normal parantezden önce virgül ile ayırarak değerini verebiliriz
// 10 + 1 + 2 + 3 + 4. normalde 0 + 1 + 2 + 3 + 4. acc accumulator'den gelir

console.log(toplam)