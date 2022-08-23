var miAuto = {
    marca: "Nissan",
    modelo: "Tida",
    annio: 2020
};

miAuto.marca

var miAuto = {
    marca: "Nissan",
    modelo: "Tida",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};
