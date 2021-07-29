var age = prompt("Your age ?")
var result = "";

// şart sağlansa da sağlanmasa da do çalışıcak.
do{
    result += age;
    result += "-";
    age--;
}
while(age > 0)
alert(result)