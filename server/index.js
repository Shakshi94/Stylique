const express = require('express');
const cors = require('cors');
const databaseConnection = require('./databaseconnection');
const port = 5050;
const app = express();
const userRoutes = require('./routes/user.routes');

// Middleware
app.use(cors());
app.use(express.json());

databaseConnection();

// Routes
app.use('/api', userRoutes);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


app.use((err, req, res) => {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  });
  