const libros = [
    {
      titulo: "Metro 2033",
      autor: "Unrusovsky",
      fecha: 2023,
      enStock: false,
    },
    {
      titulo: "Twilight",
      autor: "Unaemo",
      fecha: 2021,
      enStock: true,
    },
    {
      titulo: "Qiubole con las morras",
      autor: "Undios",
      fecha: 2020,
      enStock: false,
    },
  ];
  

//#region 
  function getTitulo(indice) {
    return libros[indice].titulo;
  }
  
  console.log(getTitulo(1));
  
  function addLibro(newLibro) {
    libros.push({
      titulo: newLibro.titulo,
      autor: newLibro.autor,
      fecha: newLibro.fecha,
      enStock: newLibro.enStock,
    });
  }
  
  addLibro({
    titulo: "Nuevo Libro",
    autor: "Unautor",
    fecha: 2021,
    enStock: true,
  });
 //#endregion 
  console.log(libros);
  
  function deleteBookByIndex(indice) {
    libros.splice(indice-1, 1);
    return libros;
  }
  // loop borre los libros en ordern reverso

  function deteleBook(){
    libros.pop()
    return libros;
  }

  for(libro of libros){
    console.log(deleteBook());
    console.log(libro.titulo)
  }
  
  //console.log(deleteBookByIndex(1));
  