var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

//Filer permite validar si algo es nuevo o falso y crea un nuevo Array con el valor que utilizamos
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//Map permite que regree todos los nombres de los aritclos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});