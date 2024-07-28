const express  = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const connectDB = require("./config/db");
const authRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(express.json());
app.use(bodyParser.json()); 
dotenv.config();
connectDB();


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  


app.use('/api/auth', authRoute);
app.use('/api', productRoute);
app.use('/api/cart', cartRoutes);
app.get("/",(req,res)=>{
    res.send("<h1>HEllo i am live .</h1>")
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})