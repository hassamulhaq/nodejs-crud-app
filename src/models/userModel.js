import pool from "../config/db.js";
import * as crypto from "node:crypto";

export const getAllUsersService = async () => {
    try {
        const response = await pool.query("SELECT * FROM users");

        return response?.rows?.map((user, idx) => {
            return {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "password": crypto.createHash('md5').update(user.password).digest('hex')
            }
        });

    } catch (error) {
        console.error('Error querying database', error);
    }
}

export const getUserById = async (userId) => {
    const response = await pool.query("SELECT * FROM users u WHERE u.id = $1", [userId])

    return response.rows[0];
}
export const createUserService = async (req) => {
    const response = await pool.query("INSERT INTO users (name, email, password ) VALUES ($1, $2, $3) RETURNING *", [req.name, req.email, req.password]);

    return response.rows[0];
}
export const updateUserService = async () => {
}
export const destroyUserService = async () => {
}