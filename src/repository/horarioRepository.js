import Horario from '../models/horario.js'

const findAll = async () => {
    try {
        const result = await Horario.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (horario) => {
    try {

        const newHorario = await Horario.create(horario);

        return newHorario;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Horario.findOne({
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
        await Horario.destroy({
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


const horariosRepository = { findAll, create, findOne, remove };

export default horariosRepository; 
