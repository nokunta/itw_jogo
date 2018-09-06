function rankings() {
    'use strict';
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("Nome", "Bruno Machado");
        localStorage.setItem("E-Mail", "bruno.machado.07@hotmail.com");
        localStorage.setItem("Data Nascimento", "07-06-1996");
        for (var i = 0; i < localStorage.length; i++){
            var info = localStorage.key(i);
            var data = localStorage.getItem(info);
            console.log(info + " : " + data);
        }
    }
}