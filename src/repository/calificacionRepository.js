import Calificacion from '../models/calificacion.js'
import Cita from '../models/cita.js'

const findAll = async () => {
    try {
        const result = await Calificacion.findAll({include: Cita});
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

const remove = async (id) => {
    try {
        await Calificacion.destroy({
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

const calificacionesRepository = { findAll, create, findOne, remove};

export default calificacionesRepository; 
