// Tomando en cuenta este arreglo:
// ```
const books = [
    {
        titulo: "Metro 2033",
        autor: "Unrusovsky",
        fecha: 2023,
        enStock: false
    },
    {
        titulo: "Twilight",
        autor: "Unaemo",
        fecha: 2021,
        enStock: true
    },
    {
        titulo: "Qiubole con las morras",
        autor: "Undios",
        fecha: 2020,
        enStock: false
    }
]

const indice = 0;
// ```
// Generar los siguientes métodos:

// - **getBook** - Recibe un índice, y regresa el título del libro correspondiente
// - **addBook** - Recibe un objeto con titulo, nombre, autor, fecha, y existencia en stock, y lo agrega al arreglo.
// - **deleteBook** - Recibe un índice y borra dicho libro del arreglo
// borrar 1 elemento del array con base en el indice.





//Print getBook method.
function getBook(books, indice){
    return books[indice].titulo
}
console.log(getBook(books, 1))


//Print addBook method.
const newBook = 
    {
        titulo: "Atomic Habits",
        autor: "James Clear",
        fecha: 2018,
        enStock: true
    }


function addBook(books, newBook){
    
    books.push(newBook)
    return books
}
console.log(addBook(books, newBook))


//Print LastIndexBook method.
function deleteLastIndexBook(books){
    return books.pop();
}
console.log(deleteLastIndexBook(books))


function deleteBookByIndex(indice){
    books.splice(indice,1)
    return books //eliminar elemento con base al indice.
                                  // El primer parametro es el indice donde empieza a eliminar.
                                  // El segundo parametro es la cantidad de elementos a borrar.
}
console.log(deleteBookByIndex(1))
