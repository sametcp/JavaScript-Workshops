var customer = {id:1, contactName: "Samet Berk Şimşek"}

customer.country = "Turkey"

// obje içinde fonksiyon tanımlarken function(){}.

// const urunServis = {
//     ekle: function () {
//         console.log(this);
//     }
// }

// const urunServis = {ekle : function(){console.log(this);}}

// gibi.

customer.sayHello = function () {
    alert("Hello " + this.contactName)
    // this = bu fonksiyonu barındıran nesnedir. o kim customer. customer'in contactName'i. içinde olduğu için böyle
    // belirtebilirim. başka bir yöntem customer.contactName
}
customer.sayHello();