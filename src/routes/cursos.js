import express from 'express'
import CursoController from '../controllers/cursoController.js';

const router = express.Router()

router.get("/", CursoController.findAll)
router.get("/:id", CursoController.findOne)

export default router;