const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee.routes');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'] // Specify the methods you want to allow
}));

// Routes
app.use('/', employeeRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
