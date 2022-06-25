package repository

import (
	"database/sql"
	"fmt"
	//"github.com/rg-km/final-project-engineering-68/api"
)

type KomentarRepository struct {
	db *sql.DB
}

func NewKomentarRepository(db *sql.DB) *KomentarRepository {
	return &KomentarRepository{db: db}
}

func (km *KomentarRepository) AddKomentar(tanggal, isi string, id_user int64, id_konten string, like, dislike int64) error {

	//var komentar Komentar
	var sqlStatement string
	sqlStatement = `
	INSERT INTO komentar(tanggal_komentar, isi_komentar, id_user, id_konten, jumlah_like, jumlah_dislike)
	VALUES(?,?,?,?,?,?);
	`

	_, err := km.db.Exec(sqlStatement, tanggal, isi, id_user, id_konten, like, dislike)
	if err != nil {
		fmt.Println(err)
	}

	return nil

}

func (km *KomentarRepository) Komentar(id_konten string) ([]Komentar, error) {

	var komentar []Komentar
	var sqlStatement string

	sqlStatement = `
	SELECT id, tanggal_komentar, isi_komentar, id_user, id_konten,  jumlah_like, jumlah_dislike FROM komentar
	`
	if id_konten != "" {
		sqlStatement = fmt.Sprintf("%s WHERE id_konten = ?", sqlStatement)
	}
	rows, err := km.db.Query(sqlStatement, id_konten)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var komen Komentar
		if err := rows.Scan(
			&komen.ID,
			&komen.Tanggal_Komentar,
			&komen.Isi_Komentar,
			&komen.Id_user,
			&komen.Id_konten,
			&komen.Jumlah_like,
			&komen.Jumlah_dislike,
		); err != nil {
			return komentar, err
		}

		komentar = append(komentar, komen)
	}

	return komentar, nil

}
