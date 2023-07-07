import CitasRepository from "../repository/citaRepository.js";
import CursosRepository from "../repository/cursoRepository.js";

const findAll = (req, res) => {
    const result = CitasRepository.findAll();

    return sendResponse(result, res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = CitasRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) => {

    const idCurso = req.body.idCurso;

    const curso = CursosRepository.findOne(idCurso) ?? null;

    let result = null;

    if (curso)
        result = CitasRepository.create(req.body);

    return sendResponse(result, res);
}

const remove = (req, res) => {

    const id = req.params.id;

    const result = CitasRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CitaController = { findAll, create, findOne, remove }

export default CitaController;