const pool = require('../config/db');

// Create a new employee
exports.createEmployee = (req, res) => {
    const { nom, prenom, age, poste, salaire } = req.body;
    pool.query(
        'INSERT INTO employees (nom, prenom, age, poste, salaire) VALUES (?, ?, ?, ?, ?)',
        [nom, prenom, age, poste, salaire],
        (error, results, fields) => {
            if (error) {
                console.error('Error creating employee:', error);
                return res.status(500).json({ error: 'Error creating employee' });
            }
            res.status(201).json({ message: 'Employee created successfully', id: results.insertId });
        }
    );
};

// Get all employeesz
exports.getAllEmployees = (req, res) => {
    pool.query('SELECT * FROM employees', (error, results, fields) => {
        if (error) {
            console.error('Error fetching employees:', error);
            return res.status(500).json({ error: 'Error fetching employees' });
        }
        res.json(results);
    });
};

// Get employee by ID
exports.getEmployeeById = (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM employees WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error fetching employee:', error);
            return res.status(500).json({ error: 'Error fetching employee' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(results[0]);
    });
};

// Update employee
exports.updateEmployee = (req, res) => {
    const { id } = req.params;
    const { nom, prenom, age, poste, salaire } = req.body;
    pool.query(
        'UPDATE employees SET nom = ?, prenom = ?, age = ?, poste = ?, salaire = ? WHERE id = ?',
        [nom, prenom, age, poste, salaire, id],
        (error, results, fields) => {
            if (error) {
                console.error('Error updating employee:', error);
                return res.status(500).json({ error: 'Error updating employee' });
            }
            res.json({ message: 'Employee updated successfully' });
        }
    );
};

// Delete employee
exports.deleteEmployee = (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM employees WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error deleting employee:', error);
            return res.status(500).json({ error: 'Error deleting employee' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    });
};
