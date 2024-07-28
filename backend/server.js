const express  = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoute = require('./routes/user');
const app = express();
app.use(express.json());

dotenv.config();
connectDB();


app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  
  // Handle OPTIONS requests
  app.options('*', cors());

app.use('/api/auth', authRoute);
app.get("/",(req,res)=>{
    res.send("<h1>HEllo i am live .</h1>")
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})