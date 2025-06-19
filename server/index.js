const express = require('express');
const cors = require('cors');
const databaseConnection = require('./databaseconnection');
const port = 5050;
const app = express();
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cookieParser = require('cookie-parser');

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // your React frontend
    credentials: true
  }));
  
app.use(express.json());
app.use(cookieParser());
databaseConnection();

// Routes
app.use('/api', userRoutes);
app.use('/api/product',productRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});
