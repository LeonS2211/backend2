import Calificacion from '../models/calificacion.js'


const findAll = async () => {
    try {
        const result = await Calificacion.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (calificacion) => {
    try {

        const newCalificacion = await Calificacion.create(calificacion);

        return newCalificacion;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Calificacion.findOne({
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


const calificacionesRepository = { findAll, create, findOne};

export default calificacionesRepository; 
