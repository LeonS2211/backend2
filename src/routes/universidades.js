import express from 'express'
import UniversidadController from '../controllers/universidadController.js';

const router = express.Router()

router.get("/", UniversidadController.findAll)
router.get("/:id", UniversidadController.findOne)
router.post("/", UniversidadController.create)

export default router;