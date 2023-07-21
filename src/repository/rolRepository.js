import Rol from '../models/rol.js'

const findAll = async () => {
    try {
        const result = await Rol.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}


const findOne = async (id) => {
    try {
        return await Rol.findOne({
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



const rolesRepository = { findAll, findOne};

export default rolesRepository; 
