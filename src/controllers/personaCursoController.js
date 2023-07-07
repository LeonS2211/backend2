import PersonaCursosRepository from "../repository/personaCursosRepository.js";
import PersonasRepository from "../repository/personaRepository.js";
import CursosRepository from "../repository/cursoRepository.js";

const findAll = (req, res) => {
    const result = PersonaCursosRepository.findAll();

    return sendResponse(result, res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = PersonaCursosRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) => {

    const idCurso = req.body.idCurso;
    const idPersona = req.body.idPersona;

    const Curso = CursosRepository.findOne(idCurso) ?? null;
    const Persona = PersonasRepository.findOne(idPersona) ?? null;

    let result = null;

    if (Persona && Curso)
        result = PersonaCursosRepository.create(req.body);

    return sendResponse(result, res);
}

const remove = (req, res) => {

    const id = req.params.id;

    const result = PersonaCursosRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const PersonaCursoController = { findAll, create, findOne, remove }

export default PersonaCursoController;