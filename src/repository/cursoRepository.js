import Curso from '../models/curso.js'

const findAll = async () => {
    try {
        const result = await Curso.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}


const findOne = async (id) => {
    try {
        return await Curso.findOne({
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


const CursosRepository = { findAll, findOne};

export default CursosRepository; 
