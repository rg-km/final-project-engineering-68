package repository

import (
	"database/sql"
	"errors"
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
