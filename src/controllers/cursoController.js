import CursoRepository from "../repository/cursoRepository.js";

const findAll = async (req, res) => {
    const result = await CursoRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await CursoRepository.findOne(id);

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CursoController = { findAll,  findOne}

export default CursoController;