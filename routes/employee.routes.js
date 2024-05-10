// routes/employee.routes.js
const express = require('express');
const router = express.Router();
const {
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    getAllEmployees
} = require('../controllers/employee.controller');

// Create an employee
router.post('/', createEmployee);
router.get('/', getAllEmployees);


// Get an employee by ID
router.get('/:id', getEmployeeById);

// Update an employee
router.put('/:id', updateEmployee);

// Delete an employee
router.delete('/:id', deleteEmployee);

module.exports = router;
