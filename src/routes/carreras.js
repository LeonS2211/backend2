import express from 'express'
import carreraController from '../controllers/carreraController.js';

const { findAll, findOne, create, remove} = carreraController

const router = express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)
router.delete("/:id", remove)

export default router;