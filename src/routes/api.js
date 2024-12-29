import express from "express";
import {destroy, index, store, update, view} from "../controllers/userController.js";

const router = express.Router();


router.get('/users', index);
router.get('/user/:id', view);
router.post('/user', store);
router.delete('/user/:id', destroy);
router.patch('/user/:id', update);

export default router;