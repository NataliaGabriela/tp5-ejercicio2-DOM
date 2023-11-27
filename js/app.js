
class Persona {
    constructor(
      nombreParam,
      edadParam,
      dniParam,
      pesoParam,
      alturaParam,
      sexoParam,
      anioNacimientoParam
    ) {
      this.nombre = nombreParam;
      this.edad = edadParam;
      this.dni = dniParam;
      this.peso = pesoParam;
      this.altura = alturaParam;
      this.sexo = sexoParam;
      this.anioNacimiento = anioNacimientoParam;
    }
  
   
    esMayorDeEdad() {
      if (this.edad >= 18) {
        alert('Es mayor de edad')
      } else {
        alert('Es menor de edad')
      }
    }
    mostrarGeneracion() {
      switch (true) {
        case this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010:
         alert(`Pertenece a la generacón Z, su rasgo es la Irreverencia`)
          break;
        case this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993:
         alert(`Pertenece a la generacón Y millennials, su rasgo es la frustación`)
          break;
        case this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980:
          alert(`Pertenece a la generacón X, su rasgo es la obseción por el éxito`)
          break;
        case this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968:
         alert(`Pertenece a la generacón Baby Boom, su rasgo es la ambición`)
          break;
        case this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948:
          alert(`Pertenece a la generacón Baby Boom, su rasgo es la austeridad`)
          break;
        default:
          break;
      }
    }

  }


const crearPersona = (e) =>{
    
    e.preventDefault();
    const inputNombre = document.querySelector(".inputNombre").value;
    console.log(inputNombre)
    const inputEdad = parseInt(document.querySelector(".inputEdad").value);
    console.log(inputEdad)
    const inputDni = parseInt(document.querySelector(".inputDni").value);
    console.log(inputDni)
    const inputPeso = parseInt(document.querySelector(".inputPeso").value);
    console.log(inputPeso)
    const inputAltura = parseFloat(document.querySelector(".inputAltura").value);
    console.log(inputAltura)
    const opcionSexo = document.querySelector(".opcionSexo").value;
    console.log(opcionSexo)
    const inputAnioNacimiento = parseInt(document.querySelector(".inputAnioNacimiento").value);
    console.log(inputAnioNacimiento)
    
    opcionSexo
     
      const persona = new Persona('inputNombre',inputEdad,inputDni,inputPeso,inputAltura,opcionSexo,inputAnioNacimiento)
      const btnMayorEdad = document.querySelector('.btnMayorEdad');
      
      btnMayorEdad.addEventListener('click',mayorDeEdad = () =>{
        persona.esMayorDeEdad()
      });
      const btnMostrarGeneracion = document.querySelector('.btnMostrarGeneracion');
      btnMostrarGeneracion.addEventListener('click',generacion = () =>{
        persona.mostrarGeneracion()
        
      });
      
      console.log(persona)
      const sectionForm = document.querySelector('.sectionForm');

      const titulo = document.createElement('h2');
      titulo.innerHTML = "Datos Personales";
      sectionForm.appendChild(titulo);

      const nombre = document.createElement('p');
      nombre.innerHTML = "Nombre: " + persona.nombre;
      sectionForm.appendChild(nombre);

      const edad = document.createElement('p');
      nombre.innerHTML = "Edad: " + persona.edad;
      sectionForm.appendChild(edad);

      const dni = document.createElement('p');
      dni.innerHTML = "DNI: " + persona.dni;
      sectionForm.appendChild(dni);

      const peso = document.createElement('p');
      peso.innerHTML = "Peso: " + persona.peso;
      sectionForm.appendChild(peso);

      const altura = document.createElement('p');
      altura.innerHTML = "Altura: " + persona.altura;
      sectionForm.appendChild(altura);

      const sexo = document.createElement('p');
      sexo.innerHTML = "Sexo: " + persona.sexo;
      sectionForm.appendChild(sexo);

      const anioNacimiento = document.createElement('p');
      anioNacimiento.innerHTML = "Año de Nacimiento: " + persona.anioNacimiento;
      sectionForm.appendChild(anioNacimiento);

}
 
  const formularioDatos = document.querySelector('form');
  formularioDatos.addEventListener('submit',crearPersona);
