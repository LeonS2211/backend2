import express from 'express'
import RolesController from '../controllers/rolController.js';

const router = express.Router()

router.get("/", RolesController.findAll)
router.get("/:id", RolesController.findOne)
router.post("/", RolesController.create)

export default router;