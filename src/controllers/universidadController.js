import UniversidadesRepository from "../repository/universidadRepository.js";

const findAll = async (req, res) => {
    const result = await UniversidadesRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await UniversidadesRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const create = async (req, res) => {

    const result = await UniversidadesRepository.create(req.body);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await UniversidadesRepository.remove(id)

    return sendResponse(result, res);
}

const UniversidadController = { findAll, findOne, create, remove }

export default UniversidadController;