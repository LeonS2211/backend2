import UniversidadesRepository from "../repository/universidadRepository.js";

const findAll = (req, res) => {
    const result = UniversidadesRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = UniversidadesRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const DocenteController = { findAll, findOne }

export default DocenteController;