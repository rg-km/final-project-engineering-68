package repository

import (
	"database/sql"
	"fmt"
	//"github.com/rg-km/final-project-engineering-68/api"
)

type KategoriRepository struct {
	db *sql.DB
}

func NewKategoriRepository(db *sql.DB) *KategoriRepository {
	return &KategoriRepository{db: db}
}
func (kt *KategoriRepository) FetchKategori(id_kategori string) ([]Kategori, error) {
	var kategories []Kategori
	sqlStatement := "SELECT  id, src, nama_kategori, keterangan_kategori FROM kategori"
	if id_kategori != "" {
		sqlStatement = fmt.Sprintf("%s WHERE id = ?", sqlStatement)
	}
	rows, err := kt.db.Query(sqlStatement, id_kategori)

	if err != nil {
		return nil, err
	}

	defer rows.Close()
	for rows.Next() {
		var kategori Kategori
		if err := rows.Scan(
			&kategori.ID,
			&kategori.Src,
			&kategori.Nama_kategori,
			&kategori.Keterangan_kategori,
		); err != nil {
			return kategories, err
		}
		kategories = append(kategories, kategori)
	}
	return kategories, nil
}
