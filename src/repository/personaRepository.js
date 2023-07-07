let personas = [
    {
        id: 1,
        nombre: "Leonardo",
        apellido:"Salazar",
        tipoDocumento:"DNI",
        numeroDocumento:"76569005",
        idRol: 1,
        email: "Leo",
        contraseña: "michi123",
        idCarrera: 1,
        tituloPresentacion: "Esta es mi presentacion como alumno",
        presentacion: "Buenos dias, mi nombre es Leonardo Salazar"
      },
      {
        id: 2,
        nombre: "Alfred",
        apellido:"Pompeyo",
        tipoDocumento:"DNI",
        numeroDocumento:"12345678",
        idRol: 2,
        email: "Alfredo",
        contraseña: "broder1843",
        idCarrera: 1,
        tituloPresentacion: "Esta es mi presentacion como profesor",
        presentacion: "Buenos dias, mi nombre es Alfred Pompeyo"
      },
      {
        id: 3,
        nombre: "Alex",
        apellido:"Pomtello",
        tipoDocumento:"DNI",
        numeroDocumento:"12367854",
        idRol: 2,
        email: "alex123",
        password: "contraseña1234",
        idCarrera: 1,
        tituloPresentacion: "Esta es mi presentacion como profesor 2",
        presentacion: "Buenos dias, mi nombre es Alex Pomtello"
      }
      ,
      {
        id: 4,
        nombre: "Alfrederic",
        apellido:"Pomqueco",
        tipoDocumento:"DNI",
        numeroDocumento:"76569999",
        idRol: 2,
        email: "Alf1234",
        password: "1234",
        idCarrera: 4,
        tituloPresentacion: "Esta es mi presentacion como profesor",
        presentacion: "Buenos dias, mi nombre es Alfrederic Pomqueco"
      },
      {
        id: 5,
        nombre: "Leo",
        apellido:"Salaz",
        tipoDocumento:"DNI",
        numeroDocumento:"76569006",
        idRol: 1,
        email: "Leo2",
        password: "broder2",
        idCarrera: 1,
        tituloPresentacion: "Esta es mi presentacion como alumno",
        presentacion: "Buenos dias, mi nombre es Leo Salaz"
      }
];

let counter = 5;

const findAll = () => {
    return personas;
}

const create = (Persona) => {
    counter++;
    const newPersona = {...Persona, id: counter}
    personas.push(newPersona);
    return Persona;
}

const findOne = (id) => {
    const result = personas.find(x => x.id == id);
    return result;
}

const update = (Persona) => {
    const index = personas.findIndex(item => item.id === Persona.id);
    
    if (index > -1) {
        personas[index] = Persona;
        return true;
    }

    return false;
}


const personasRepository = { findAll, create, findOne,update };

export default personasRepository; 
