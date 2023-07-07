import express from 'express'
import citaController from '../controllers/citaController.js';

const { findAll, create, remove, findOne } = citaController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;