import express from 'express'
import carreraController from '../controllers/carreraController.js';

const { findAll, findOne, create} = carreraController

const router = express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)

export default router;