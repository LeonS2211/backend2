import Universidad from '../models/universidad.js'
import Carrera from '../models/carrera.js'

const findAll = async () => {
    try {
        const result = await Universidad.findAll({include: Carrera});
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}


const findOne = async (id) => {
    try {
        return await Universidad.findOne({
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

const create = async (universidad) => {
    try {

        const newUniversidad = await Universidad.create(universidad);

        return newUniversidad;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const universidadesRepository = { findAll, findOne, create};

export default universidadesRepository; 
