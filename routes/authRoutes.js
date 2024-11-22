import express from 'express';
import { registerController, loginController, logoutController } from '../controllers/authController.js';

const router = express.Router();

router.get('/register', (req, res) => res.render('register'));
router.post('/register', registerController);

router.get('/login', (req, res) => res.render('login'));
router.post('/login', loginController);

router.get('/logout', logoutController);

export default router;
