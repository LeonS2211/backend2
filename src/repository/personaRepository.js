import Persona from '../models/persona.js'

const findAll = async () => {
  try {
      const result = await Persona.findAll();
      console.log(result)
      return result;

  } catch(err) {
      console.error(err)

      return null;
  }
}

const create = async (persona) => {
  try {

      const newPersona = await Persona.create(persona);

      return newPersona;

  } catch(err) {
      console.error(err)

      return null;
  }
}

const findOne = async (id) => {
  try {
      return await Persona.findOne({
          where: {
              id
          }
      })
  }
  catch(err) {
      console.error(err)
      return null;
  }
}

const update = async (persona) => {
  try {
      const foundPersona =  await Persona.findOne({
          where: {
              id: persona.id
          }
      })

      foundPersona.set(persona)

      foundPersona.save()

      return foundPersona;

  }
  catch(err) {
      console.error(err)
      return null;
  }
}


const personasRepository = { findAll, create, findOne,update };

export default personasRepository; 
