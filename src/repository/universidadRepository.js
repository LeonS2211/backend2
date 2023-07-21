import Universidad from '../models/universidad.js'


const findAll = async () => {
    try {
        const result = await Universidad.findAll();
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



const universidadesRepository = { findAll, findOne};

export default universidadesRepository; 
