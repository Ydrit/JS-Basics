var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

//Find busca validar un true or false, crea un nuevo Array si existe
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//forEach busca toda la information asignada
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Some regresa una validacion de true o false, crea nuevo array indicando si existen articulos que cumplen requisitos
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});