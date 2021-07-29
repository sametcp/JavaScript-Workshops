var language = prompt("What is your language ?");

switch (language){
    case "fr":
        alert("French");
        break;
        case "tr":
            alert("Turkish");
            break;
            default:  // 2 durum da olmazsa (hiçbiri değilse) default değer :
                alert("English")
                break;
}