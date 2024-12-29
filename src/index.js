import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        res.send(`Db name is ${result.rows[0].current_database}`);
    } catch (error) {
        console.error('Error querying database', error);
        res.status(500).send('Error querying database');
    }
});

// server running
app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});