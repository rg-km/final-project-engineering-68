package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
	"github.com/rg-km/final-project-engineering-68/api"
	"github.com/rg-km/final-project-engineering-68/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "db/nakama.db")
	if err != nil {
		panic(err)
	}

	userRepo := repository.NewUserRepository(db)
	kontenRepo := repository.NewKontenRepository(db)
	mainAPI := api.NewAPI(*userRepo, *kontenRepo)
	mainAPI.Start()
}
