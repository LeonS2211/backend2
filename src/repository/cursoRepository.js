import Curso from '../models/curso.js'
import Carrera from '../models/carrera.js'

const findAll = async () => {
    try {
        const result = await Curso.findAll({include: Carrera});
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

const create = async (curso) => {
    try {

        const newCurso = await Curso.create(curso);

        return newCurso;

    } catch(err) {
        console.error(err)

        return null;
    }
}


const CursosRepository = { findAll, findOne, create};

export default CursosRepository; 
