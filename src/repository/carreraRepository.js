import Carrera from '../models/carrera.js'


const findAll = async () => {
    try {
        const result = await Carrera.findAll();
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


const CarrerasRepository = { findAll, findOne};

export default CarrerasRepository; 
