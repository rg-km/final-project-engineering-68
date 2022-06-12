package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
	"github.com/rg-km/final-project-engineering-68/api"
	"github.com/rg-km/final-project-engineering-68/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "./nakaa.db")
	if err != nil {
		panic(err)
	}
	fmt.Println("db terhubung")

	userRepo := repository.NewUserRepository(db)
	mainAPI := api.NewAPI(*userRepo)
	mainAPI.Start()
}
