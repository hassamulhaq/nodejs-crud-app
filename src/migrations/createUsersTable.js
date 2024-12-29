import pool from "../config/db.js"

const createUsersTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users
            (
                id         serial NOT NULL,
                name       varchar(100) NOT NULL,
                email      varchar(100) UNIQUE NOT NULL,
                "password" varchar(255) NOT NULL,
                CONSTRAINT users_pk PRIMARY KEY (id)
            );
        `;

    try {
        pool.query(query);
        console.log('Users table is created.')
    } catch (e) {
        console.log(e?.message || '')
    }
}

export default createUsersTable;