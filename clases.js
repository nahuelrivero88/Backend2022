class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
    getFullname(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    addMascota(mascota){
      this.mascotas.push(mascota);
  }
    countMascotas(){
        return this.mascotas.length;
    }
    addLibro(libro){
      this.libros.push(libro);
  }
    getBookNames(){
        return this.libros.map(libro => libro.nombre);
    }
  }
  
  const usuario1 = new Usuario('Nahuel', 'Rivero', [{nombre:'La Botella FC', autor: 'Roy Berocay'},{nombre:'Sol y sombra', autor: 'Eduardo Galeano'}],['Perro', 'Loro','Gato']);
  
  console.log(usuario1.countMascotas());
  usuario1.addMascota("Lagarto");
  usuario1.addLibro({nombre:'Harry Potter', autor:'J. K. Rowling'})
  console.log(usuario1.getFullname());
  console.log(usuario1.countMascotas());
  console.log(usuario1.getBookNames());