for (var i = 0; i <= 10; i++){
    if(i==5){
        //break  //ilgili döngü bloğunu orada bitirmeye yarar. i=5 olduğunda döngüyü kır. yani for'dan çıkar 5 old.
        continue  // belli bir şart sağlandığında sadece o şart için continue çalışır. döngünün
        // dışına çıkmayıp sadece döngünün 5 olduğu durumda çalışmaz. 4'den direkt 6'ya atlayıp 10'a kadar yazdırır
    }
    alert(i);
}
// break çalıştığında uygulama burdan devam eder.