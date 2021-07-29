class Customer // 02:54:30 es6    // public olursa dışarıdan ulaşabilirsin. jsde export.
{   // id = 2 dersen customer(undefined,x)
    constructor(id,customerNumber)
    {
        // this, instance'a karşılık gelir
        this.id = id  // instance'ın id'si = id (params'daki)
        this.asdasd = id
        this.customerNumber = customerNumber  // aşağıda customer.name'de name eklemenle aynı şey.
    }
}

// Customer customer = new Customer(,) yok.
let customer = new Customer(1,"12345")

//prototyping 03:00:00 (yani sen bir nesneye bambaşka bir özellik ekleyerek onu kullanabilirsin)
customer.name = "Samet Berk Şimşek" // newlenmişe, instance'a yapılan prototyping
console.log(customer.name)

console.log(customer.asdasd)

Customer.bisey = "Bişey" // class'a yapılan prototyping
console.log(Customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer
{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}
// fonksiyonlar da referans tiptir.
class CorporateCustomer extends Customer
{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}


let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},
]

console.log("<ul>")   // unordered list - html'deki liste
products.map(product=>console.log(`<li>${product.name}</li>`))   // list item - liste elemanları
console.log("</ul>")
// map, bizim için array'i dönüyor ve takma isim olan product'a atıyor. foreach-for döngüsü mantığı gibi
// product'a elemanları atıyor yani map. listedeki her bir ürün için.

// yukarıdaki gibi tek satırlık bir işlemse paranteze gerek yok. burda süslü parantez içinde olmalı.
products.map(product=>{ 
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})



// elimizdeki array'i filtrelemeye yarıyor ve sonucunda yepyeni bir array ortaya çıkartır. 0 elemanlı bile
// olsa sonuç bizim için yeni bir array'dir.
let filteredProducts = products.filter(product=>product.unitPrice>12000)
// her bir product için eğer ki unitPrice 12000'den büyükse, o elemanı, product'ı yeni bir array'e at
// ve o array'i bana ver demek. sırayla oku kodun anlamı bu. burdaki sonuçtan 4 elemanlı bir array'in
// olur.

console.log(filteredProducts)



// mesela sepetin totalini göstermek istiyorum. products, sepete eklenen ürünler olarak düşün bu örnekte
// acc akumulatorden geliyor.) acc'ye fiyatı ekle. acc(!) 0 başlangıç değeri.
let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice, 0)

console.log(cartTotal)

let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)  // önce ilk arrayi filtreledim. mesela apiden gelen bir data
                .map(p=>{            // her bir ürün için kdv hesapladı (foreach)
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)    // reduce uygulandı.

console.log(cartTotal2)