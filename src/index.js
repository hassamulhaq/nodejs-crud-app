import express from "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config();

const app = express();
const port = process.env.PORT || 3001

// middlewares
app.use(express.json());
app.use(cors);

// routes


// server running
app.listen(port, () => {
    console.log(`server started on port: ${port}`)
});

