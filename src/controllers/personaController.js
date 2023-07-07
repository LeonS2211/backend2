import RolesRepository from "../repository/rolRepository.js";
import CarrerasRepository from "../repository/carreraRepository.js";
import PersonasRepository from "../repository/personaRepository.js";

const findAll = (req, res) => {
    const result = PersonasRepository.findAll();

    return sendResponse(result, res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = PersonasRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) => {

    const idRol = req.body.idRol;
    const idCarrera = req.body.idCarrera;

    const rol = RolesRepository.findOne(idRol) ?? null;
    const carrera = CarrerasRepository.findOne(idCarrera) ?? null;

    let result = null;

    if (rol && carrera)
        result = PersonasRepository.create(req.body);

    return sendResponse(result, res);
}

const update = (req,res) => {
    const result = PersonasRepository.update(req.body)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const PersonaController = { findAll, create, findOne, update}

export default PersonaController;