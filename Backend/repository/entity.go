package repository

import "time"

type User struct {
	ID                int64     `db:"id_user"`
	Nama              string    `db:"nama_user"`
	Email             string    `db:"email_user"`
	Username          string    `db:"username"`
	Password          string    `db:"password"`
	Tanggal_bergabung time.Time `db:"tanggal_bergabung"`
	Role              string    `db:"role"`
	Token             string    `db:"token"`
}
type Konten struct {
	ID             int64
	id_kategori    int64     `db:"id_kategori"`
	id_ilustrasi   int64     `db:"id_ilustrasi"`
	Tanggal_post   string    `db:"tanggal_post"`
	Judul_konten   string    `db:"judul_konten"`
	Isi_konten     string    `db:"isi_konten"`
	Tanggal_update time.Time `db:"tanggal_update"`
	Status_konten  string    `db:"status_konten"`
	Jumlah_like    int64     `db:"jumlah_like"`
	Jumlah_dislike int64     `db:"jumlah_dislike"`
}
