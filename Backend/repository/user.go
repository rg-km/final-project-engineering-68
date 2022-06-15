package repository

import (
	"database/sql"
	"errors"
	"fmt"
	//"github.com/rg-km/final-project-engineering-68/api"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}
func (u *UserRepository) Login(username string, password string) (*string, error) {
	var user User
	var sqlStatement string
	sqlStatement = `
		SELECT username FROM user
		WHERE username = ? AND password = ?
	`
	err := u.db.QueryRow(sqlStatement, username, password).Scan(
		&user.Username,
	)

	if err != nil {
		return nil, errors.New("Login Failed")
	}

	return &user.Username, nil
}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	var user User
	var sqlStatement string
	//TODO : you must fetch the cart by product id
	//HINT : you can use the where statement
	sqlStatement = `SELECT role FROM user where username = ?`

	err := u.db.QueryRow(sqlStatement, username).Scan(
		&user.Role,
	)

	if err != nil {
		return nil, err
	}
	return &user.Role, nil
}
func (u *UserRepository) CheckEmail(email string) (string, error) {
	var user User
	var sqlStatement string
	//TODO : you must fetch the cart by product id
	//HINT : you can use the where statement
	sqlStatement = `SELECT username FROM user where email_user = ?`

	err := u.db.QueryRow(sqlStatement, email).Scan(
		&user.Username,
	)

	if err != nil {
		return "", err
	}
	return user.Username, nil
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var users []User
	sqlStatement := "SELECT  id, nama_user FROM user"
	rows, err := u.db.Query(sqlStatement)

	if err != nil {
		return nil, err
	}

	defer rows.Close()
	for rows.Next() {
		var user User
		if err := rows.Scan(
			&user.ID,
			&user.Nama,
			//&user.Password,
			// &user.Role,
			// &user.Loggedin,
		); err != nil {
			return users, err
		}
		users = append(users, user)
	}
	return users, nil
}
func (u *UserRepository) InsertUser(nama string, email string, username string, password string, tanggal_bergabung string, role string) error {

	//var user User
	var sqlStatement string
	sqlStatement = `INSERT INTO user(nama_user, email_user,username, password, tanggal_bergabung, role) VALUES(?, ?, ?, ?,?,?)`

	// u.db.QueryRow(sqlStatement, nama, email, username, password, tanggal_bergabung, role).Scan(
	// 	&user.Nama,
	// 	&user.Email,
	// 	&user.Username,
	// 	&user.Password,
	// 	&user.Tanggal_bergabung,
	// 	&user.Role,
	// )
	_, err := u.db.Exec(sqlStatement, nama, email, username, password, tanggal_bergabung, role)
	if err != nil {
		fmt.Println(err)
		return err
	}
	// if err != nil {
	// 	fmt.Println(err)
	// 	return err
	// }
	return nil
}
