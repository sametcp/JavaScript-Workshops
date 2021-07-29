//Function Signature
function functionName(parameter1, parameter2){
    //Do Something
    return parameter1 * parameter2;
}

alert(functionName(2,3));

//Function without "return"
function functionWithOutReturn(parameter1, parameter2){
    alert("This is a function without 'return' statement")

    // fonksiyon istenilen işi yapmış (void). return etmemiş.
}

functionWithOutReturn();
functionWithOutReturn(2,3,4,5,6);

//Parameter Defaults
function functionName2(x,y){
    // functionName olsa da çalışır. farklı js. dosyalarında bu functionName gibi bir isim geçiyorsa sıkıntı yaşanabilir.
    // editör son gördüğü değişken, fonksiyonun değerini okur. burda da dönüş olmadığından sonuç undefined olur 
    // alert(functionName(2,3)); değerinin. fonk. değeri undefined yani. return eden bir şey yok veya bir değer yok. 
    // aşağıdaki if bloğu zaten bir şey döndürmüyor. boş
    if(y === undefined){
        // parametrelerin default hali undefined. yani alert(functionName(2)) dersem burdaki y değeri = olur. burdakinden
        // kastım fonksiyon içinde. fonk. dışında ulaşılamaz (scope). kullanıcı sadece x değerini gönderip y'yi göndermek
        // istemeyebilir. y undefined değer ise aşağıdaki gibi y'ye default değeri verebilirim (burda 0 verilmiş)
        y=0;
    }
    alert(y)
}
functionName2(3) // olursa y = 0.


//The Arguments Object - argüman nesnesi
x = findMax(1, 123, 500, 115, 44, 88);  // 6 elemandan oluşan obje array'i

function findMax(){
    var i, max = 0;
    for(i=0; i < arguments.length; i++){  // arguments.length parametrelerin length'i 
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
// ???????????????????????????????????????????????