import sqlite3 from "sqlite3";

const db = new sqlite


db.run (`
    CREATE TABLE
        IF NOT EXIST
        users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            password TEXT NOT NULL,
        )
`);

db.run (`
    CREATE TABLE
        IF NOT EXIST
        tasks (
            id INTEGER PRIMARY KEY,
            description VARCHAR(100) NOT NULL,
            done BOOLEAN DEFAULT false NOT NULL,
            id_user INTEGER NOT NULL,
            FOREIGN KEY ( id_user )
                REFERENCES user (id)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
        )    
`)