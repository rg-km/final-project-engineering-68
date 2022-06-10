package database

import (
	"database/sql"
	"log"
)

// bikin global varibale yang akan menampung koneksi ke database yg digunakan untuk proses crud di controller
var (
	db  *sql.DB
	err error
)

func Connect() {
	db, err = sql.Open("sqlite3", "./example.db")
	if err != nil {
		log.Fatal(err)
	}

	sqlStmt := `CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name VARCHAR(25) NOT NULL,
		email TEXT,
		password BLOB
	);`
	_, err = db.Exec(sqlStmt)
	if err != nil {
		log.Fatal(err)
	}
	db.SetMaxOpenConns(1)
	log.Println("db connection successful")
}

// func GetAllUser() []model.User {
// 	var allUser []model.User
// 	DB.Find(&allUser)
// 	return allUser
// }
