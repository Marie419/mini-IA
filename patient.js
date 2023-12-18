// Import required modules
const express = require('express');
const patientController = require('../controllers/patientController');

// Create the Express router
const router = express.Router();

// Define the patient routes
router.post('/', patientController.createPatient);
router.get('/', patientController.getAllPatients);
router.get('/:id', patientController.getPatientById);

module.exports = router;