const express  = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoute = require('./routes/user');
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();


app.use('/api/auth', authRoute);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})