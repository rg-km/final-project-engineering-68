package repository

import (
	"database/sql"
	"fmt"
	//"github.com/rg-km/final-project-engineering-68/api"
)

type KontenRepository struct {
	db *sql.DB
}

func NewKontenRepository(db *sql.DB) *KontenRepository {
	return &KontenRepository{db: db}
}

// func (u *UserRepository) Login(username string, password string) (*string, error) {
// 	var user User
// 	var sqlStatement string
// 	sqlStatement = `
// 		SELECT username FROM user
// 		WHERE username = ? AND password = ?
// 	`
// 	err := u.db.QueryRow(sqlStatement, username, password).Scan(
// 		&user.Username,
// 	)

// 	if err != nil {
// 		return nil, errors.New("Login Failed")
// 	}

// 	return &user.Username, nil
// }

// func (u *UserRepository) FetchUserRole(username string) (*string, error) {
// 	var user User
// 	var sqlStatement string
// 	//TODO : you must fetch the cart by product id
// 	//HINT : you can use the where statement
// 	sqlStatement = `SELECT role FROM user where username = ?`

// 	err := u.db.QueryRow(sqlStatement, username).Scan(
// 		&user.Role,
// 	)

// 	if err != nil {
// 		return nil, err
// 	}
// 	return &user.Role, nil
// }
// func (u *UserRepository) CheckEmail(email string) (string, error) {
// 	var user User
// 	var sqlStatement string
// 	//TODO : you must fetch the cart by product id
// 	//HINT : you can use the where statement
// 	sqlStatement = `SELECT username FROM user where email_user = ?`

// 	err := u.db.QueryRow(sqlStatement, email).Scan(
// 		&user.Username,
// 	)

// 	if err != nil {
// 		return "", err
// 	}
// 	return user.Username, nil
// }

func (k *KontenRepository) FetchKonten(id_konten, id_kategori string) ([]Konten, error) {
	var kontents []Konten
	sqlStatement := "select k.id, k.id_kategori, k.tanggal_post, k.path, k.judul_konten,  k.isi_konten, k.tanggal_update, k.status_konten, k.id_admin, k.jumlah_like, k.jumlah_dislike, k.id_ilustrasi, i.nama_ilustrasi,i.src from konten k inner join ilustrasi i on k.id_ilustrasi = i.id"
	if id_konten != "" {
		sqlStatement = fmt.Sprintf("%s WHERE k.id = ?", sqlStatement)
		kontents, err := k.ExecuteQuery(sqlStatement, id_konten)
		if err != nil {
			return nil, err
		}
		return kontents, nil

	}
	if id_kategori != "" {
		sqlStatement = fmt.Sprintf("%s WHERE k.id_kategori = ?", sqlStatement)
		kontents, err := k.ExecuteQuery(sqlStatement, id_kategori)
		if err != nil {
			return nil, err
		}
		return kontents, nil
	}
	// return nil, fmt.Errorf("")
	rows, err := k.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var konten Konten
		if err := rows.Scan(
			&konten.ID,
			&konten.Id_kategori,
			&konten.Tanggal_post,
			&konten.Path,
			&konten.Judul_konten,
			&konten.Isi_konten,
			&konten.Tanggal_update,
			&konten.Status_konten,
			&konten.Id_admin,
			&konten.Jumlah_like,
			&konten.Jumlah_dislike,
			&konten.Id_ilustrasi,
			&konten.Nama_ilustrasi,
			&konten.Src,
			// &user.Role,
			// &user.Loggedin,
		); err != nil {
			return kontents, err
		}
		kontents = append(kontents, konten)
	}
	return kontents, nil
}
func (k *KontenRepository) ExecuteQuery(sqlStatement, id string) ([]Konten, error) {
	var kontents []Konten
	rows, err := k.db.Query(sqlStatement, id)

	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var konten Konten
		if err := rows.Scan(
			&konten.ID,
			&konten.Id_kategori,
			&konten.Tanggal_post,
			&konten.Path,
			&konten.Judul_konten,
			&konten.Isi_konten,
			&konten.Tanggal_update,
			&konten.Status_konten,
			&konten.Id_admin,
			&konten.Jumlah_like,
			&konten.Jumlah_dislike,
			&konten.Id_ilustrasi,
			&konten.Nama_ilustrasi,
			&konten.Src,
			// &user.Role,
			// &user.Loggedin,
		); err != nil {
			return nil, err
		}
		kontents = append(kontents, konten)
	}
	return kontents, nil
}

// func (u *UserRepository) InsertUser(nama string, email string, username string, password string, tanggal_bergabung string, role string) error {

// 	//var user User
// 	var sqlStatement string
// 	sqlStatement = `INSERT INTO user(nama_user, email_user,username, password, tanggal_bergabung, role) VALUES(?, ?, ?, ?,?,?)`

// 	// u.db.QueryRow(sqlStatement, nama, email, username, password, tanggal_bergabung, role).Scan(
// 	// 	&user.Nama,
// 	// 	&user.Email,
// 	// 	&user.Username,
// 	// 	&user.Password,
// 	// 	&user.Tanggal_bergabung,
// 	// 	&user.Role,
// 	// )
// 	_, err := u.db.Exec(sqlStatement, nama, email, username, password, tanggal_bergabung, role)
// 	if err != nil {
// 		fmt.Println(err)
// 		return err
// 	}
// 	// if err != nil {
// 	// 	fmt.Println(err)
// 	// 	return err
// 	// }
// 	return nil
// }
// type Konten struct {
// 	ID             int64  `json:"id"`
// 	Id_kategori    int64  `json:"id_kategori"`
// 	Id_ilustrasi   int64  `json:"id_ilustrasi"`
// 	Tanggal_post   string `json:"tanggal_post"`
// 	Judul_konten   string `json:"judul_konten"`
// 	Isi_konten     string `json:"isi_konten"`
// 	Id_admin       int64  `json:"id_admin"`
// 	Jumlah_like    int64  `json:"jumlah_like"`
// 	Jumlah_dislike int64  `json:"jumlah_dislike"`
// }
