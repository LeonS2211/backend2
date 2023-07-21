import Carrera from '../models/carrera.js'
import Universidad from '../models/universidad.js'

const findAll = async () => {
    try {
        const result = await Carrera.findAll({include: Universidad});
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}


const findOne = async (id) => {
    try {
        return await Carrera.findOne({
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

const create = async (carrera) => {
    try {

        const newCarrera = await Carrera.create(carrera);

        return newCarrera;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const remove = async (id) => {
    try {
        await Carrera.destroy({
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

const CarrerasRepository = { findAll, findOne, create, remove};

export default CarrerasRepository; 
