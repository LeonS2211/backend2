import rolRepository from "../repository/rolRepository.js";

const findAll = async (req, res) => {
    const result = await rolRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await rolRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const RolController = { findAll, findOne }

export default RolController;