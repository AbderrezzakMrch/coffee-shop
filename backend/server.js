require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// express
const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('DB connected'))
    .catch(error => console.error("db connection error: ",error));

// routed
app.use("/api/auth",authRoutes);
app.use("/api/orders",orderRoutes);


// Error handling middleware
app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).json({message:'Somthing went wrong!'});
});

// Server conection 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server runing on port ${PORT}` ));