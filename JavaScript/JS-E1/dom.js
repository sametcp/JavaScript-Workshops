// document.getElementById("bio").innerHTML = "Samet Berk Şimşek : 2001"

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj")

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0]

// tumElemanlar = sehirler.getElementsByTagName("li");

// for(i=0; i<tumElemanlar.length; i++){
//     alert(tumElemanlar[i].innerHTML);
// }

// var classElemanları = document.getElementsByClassName("intro1");
// // intro1 classını kullananların hepsini veriyor

// alert(classElemanları[1].innerHTML) // innerHTML ile html içeriğini alıyoruz
// alert(classElemanları.length)

// var queryElemanları = document.querySelectorAll("p.intro1");
// // query = sorgu, p.intro1 ise p tag'inin içinde class intro1 varsa bunu kulananları getiriyor. p'lerden intro1
// kullananları bana ver dedik.
// alert(queryElemanları.length)

// var isimElemanları = document.getElementsByName("musteriAdi")
// alert(isimElemanları[0].value) // objemin değerini aldım.

// var samet = document.getElementById("samet").addEventListener("click",rengiDegistir);
// // samet isimli nesneye tıkladığımda, tıklayınca("click") rengiDegistir çalışıcak.
// // "mouseover" belirlenen nesnenin üzerine mouse geldiğinde rengiDegistir çalışıcak.
// function rengiDegistir()
// {
//     document.getElementById("div1").style.color = "red";
//     // div1'in içeriğindekilerin yazı rengini değişicek
//     var isimElemanları = document.getElementsByName("musteriAdi")
//     isimElemanları[0].value="Samet"
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h4")  // ='den sonrası = document'te hangi element türünde bir şey oluşturucam, h2.
var node = document.createTextNode("Merhaba Javascript")

baslik.appendChild(node)  // append = eklemek, katmak.
// burda önce document'a h2 ekledik sonra node'u appendChild ile baslik'in alt node'u olarak değerini ekledik
var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");

div1.insertBefore(baslik,p2)  // div1'in içerisine bir baslik elementi ekle onu da p2'den önce ekle dedik. insert = eklemek
// baslik elementini ve tabiki değerini de insertBefore ile p2'den önce ekledik. (= baslik'i ekleyecek nereye p2'nin önüne)
// (= div1'in(id) içinde, p2'den(id) önce, baslik'i ekle dedik. id'nin önemi)
alert("p2 siliniyor...")
div1.removeChild(p2)  // = div1'in içinden neyi kaldırmak istiyorum, p2'yi. (yukarıda p2 id'li olanın değerini atadığım 
// değişken) //alert(p2.innerHTML)

alert("Değiştiriliyor...");
var p1 = document.getElementById("p1")
div1.replaceChild(baslik,p1)  // baslik'i p1'in yerine koy dedik

// bu kodların hepsi dom.html içerisinde yapılıyor. dom manipulation