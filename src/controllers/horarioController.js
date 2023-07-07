import HorariosRepository from "../repository/horarioRepository.js";

const findAll = (req, res) => {
    const result = HorariosRepository.findAll();

    return sendResponse(result, res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = HorariosRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) => {

    result = HorariosRepository.create(req.body);

    return sendResponse(result, res);
}


const remove = (req, res) => {

    const id = req.params.id;

    const result = HorariosRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CursoController = { findAll, create, findOne, remove }

export default CursoController;