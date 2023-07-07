import express from 'express'
import carreraController from '../controllers/carreraController.js';

const { findAll, findOne } = carreraController

const router = express.Router()

router.get("/", findAll)
router.get("/:id", findOne)

export default router;