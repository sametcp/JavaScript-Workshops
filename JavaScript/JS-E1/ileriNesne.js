const urunServis = {
    ekle: function () {
        console.log(this);
    }
}

// const urunServis = {ekle : function(){console.log(this);}}

urunServis.ekle();

// this ile içerisinde bulunduğu objeyi döndürür. this burda fonksiyonun ta kendisidir.