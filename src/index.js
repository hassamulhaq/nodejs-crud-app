import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/api.js"
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js"
import createUsersTable from "./migrations/createUsersTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(cors());

// error handling
app.use(errorHandlerMiddleware);

// migrations
createUsersTable();

// routes
app.use('/api', router);

// server running
app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});