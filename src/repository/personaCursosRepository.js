import PersonaCurso from '../models/personaCurso.js'
import Persona from '../models/persona.js'

const findAll = async () => {
    try {
        const result = await PersonaCurso.findAll({include: Persona});
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (personaCurso) => {
    try {

        const newPersonaCurso = await PersonaCurso.create(personaCurso);

        return newPersonaCurso;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await PersonaCurso.findOne({
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


const remove = async (id) => {
    try {
        await PersonaCurso.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const personaCursosRepository = { findAll, create, findOne, remove };

export default personaCursosRepository; 
