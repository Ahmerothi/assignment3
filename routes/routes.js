import express from 'express';
import {
  homeController,
  createController,
} from '../controllers/homeController.js';
import readController from '../controllers/readController.js';
import {
  editController,
  updateController,
  deleteController,
} from '../controllers/editController.js';


const router = express.Router();

// Home Routes
router.get('/', homeController); // Render home page
router.post('/', createController); // Create new student or resource

// Read Routes
router.get('/read', readController); // Render read page with records

// Edit Routes
router.get('/edit/:id', editController); // Render edit page with specific record
router.post('/update/:id', updateController); // Update record
router.post('/delete/:id', deleteController); // Delete record

router.get('/home', (req, res) => {
  res.render('home'); // Render your home.ejs file
});


export default router;
