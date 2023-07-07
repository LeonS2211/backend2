import express from 'express'
import horarioController from '../controllers/horarioController.js';

const { findAll, create, remove, findOne } = horarioController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;