import pkg from "pg";
import dotenv from "dotenv"
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASWORD,
    port: process.env.DB_PORT
});

pool.on("connect", () => {
    console.log(`Connection pool established with db.`)
})

export default pool;