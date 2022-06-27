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
	ID             int64  `db:"id"`
	Id_kategori    int64  `db:"id_kategori"`
	Tanggal_post   string `db:"tanggal_post"`
	Path           string `db:"path"`
	Judul_konten   string `db:"judul_konten"`
	Isi_konten     string `db:"isi_konten"`
	Tanggal_update string `db:"tanggal_update"`
	Status_konten  string `db:"status_konten"`
	Id_admin       int64  `db:"id_admin"`
	Jumlah_like    int64  `db:"jumlah_like"`
	Jumlah_dislike int64  `db:"jumlah_dislike"`
	Id_ilustrasi   int64  `db:"id_ilustrasi"`
	Nama_ilustrasi string `db:"nama_ilustrasi"`
	Src            string `db:"src"`
}
type Kategori struct {
	ID                  int64  `db:"id"`
	Nama_kategori       string `db:"nama_kategori"`
	Keterangan_kategori string `db:"keterangan_kategori"`
}

type Komentar struct {
	ID               int64  `db:"id"`
	Id_konten        int64  `db:"id_konten"`
	Id_user          int64  `db:"id_user"`
	Isi_Komentar     string `db:"isi_komentar"`
	Tanggal_Komentar string `db:"tanggal_komentar"`
	Jumlah_like      int64  `db:"jumlah_like"`
	Jumlah_dislike   int64  `db:"jumlah_dislike"`
}
