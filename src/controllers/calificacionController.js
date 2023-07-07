import CalificacionRepository from "../repository/calificacionRepository.js";

const findAll = (req, res) => {
    const result = CalificacionRepository.findAll();

    return sendResponse(result, res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = CalificacionRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) => {

    result = CalificacionRepository.create(req.body);

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CalificacionController = { findAll, create, findOne }

export default CalificacionController;