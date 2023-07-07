import express from 'express'
import personaController from '../controllers/personaController.js';

const { findAll, create, update, findOne } = personaController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.get("/:id", findOne)

export default router;