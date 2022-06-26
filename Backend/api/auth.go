package api

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type User struct {
	ID                int64     `json:"id"`
	Nama              string    `json:"nama"`
	Email             string    `json:"email"`
	Username          string    `json:"username"`
	Password          string    `json:"password"`
	Tanggal_bergabung time.Time `json:"tanggal_bergabung"`
	Role              string    `json:"role"`
	Token             string    `json:"token"`
}
type Konten struct {
	ID             int64  `json:"id"`
	Id_kategori    int64  `json:"id_kategori"`
	Tanggal_post   string `json:"tanggal_post"`
	Judul_konten   string `json:"judul_konten"`
	Isi_konten     string `json:"isi_konten"`
	Tanggal_update string `json:"tanggal_update"`
	Status_konten  string `json:"status_konten"`
	Id_admin       int64  `json:"id_admin"`
	Jumlah_like    int64  `json:"jumlah_like"`
	Jumlah_dislike int64  `json:"jumlah_dislike"`
	Id_ilustrasi   int64  `json:"id_ilustrasi"`
	Nama_ilustrasi string `json:"nama_ilustrasi"`
	Src            string `json:"src"`
}
type Kategori struct {
	ID                  int64  `json:"id"`
	Nama_kategori       string `json:"nama_kategori"`
	Keterangan_kategori string `json:"keterangan_kategori"`
}
type UserErrorResponse struct {
	Error string `json:"error"`
}
type UserListSuccessResponse struct {
	Users []User `json:"users"`
}
type KontenListSuccessResponse struct {
	Konten []Konten
}
type KategoriResponse struct {
	Kategori []Kategori
}
type LoginSuccessResponse struct {
	Username string `json:"username"`
	Token    string `json:"token"`
}
type AuthErrorResponse struct {
	Error string `json:"error"`
}

var jwtKey = []byte("370945091")

type Claims struct {
	Username string
	Role     string
	jwt.StandardClaims
}

func (api *API) login(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := api.userRepo.Login(user.Username, user.Password)
	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	userRole, _ := api.userRepo.FetchUserRole(*res)

	// Deklarasi expiry time untuk token jwt
	expirationTime := time.Now().Add(60 * time.Minute)

	// Buat claim menggunakan variable yang sudah didefinisikan diatas
	claims := &Claims{
		Username: *res,
		Role:     *userRole,
		StandardClaims: jwt.StandardClaims{
			// expiry time menggunakan time millisecond
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Buat jwt string dari token yang sudah dibuat menggunakan JWT key yang telah dideklarasikan
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		// return internal error ketika ada kesalahan ketika pembuatan JWT string
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Set token string kedalam cookie response
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
		Path:    "/",
	})

	json.NewEncoder(w).Encode(LoginSuccessResponse{Username: *res, Token: tokenString})
}

func (api *API) logout(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)

	token, err := req.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// return unauthorized ketika token kosong
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// return bad request ketika field token tidak ada
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	if token.Value == "" {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	c := &http.Cookie{
		Name:     "token",
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
	}
	http.SetCookie(w, c)

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("logged out"))
}
func (api *API) register(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	res, _ := api.userRepo.CheckEmail(user.Email)
	if len(res) != 0 {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("This email has been registered"))
		return
	}
	currentDate := time.Now().Local().Format("2020-02-21")
	err = api.userRepo.InsertUser(user.Nama, user.Email, user.Username, user.Password, currentDate, "user")
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Error when registering data into database"))
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("registration successful"))

}
func (api *API) userlist(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := UserListSuccessResponse{}
	response.Users = make([]User, 0)

	users, err := api.userRepo.FetchUsers()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UserErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, product := range users {
		response.Users = append(response.Users, User{
			ID:   product.ID,
			Nama: product.Nama,
			//Password: product.Password,
			// Category: product.Category,
			// Quantity: product.Quantity,
		})
	}
	encoder.Encode(response)
}

func (api *API) kontenlist(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	IdKonten := req.URL.Query().Get("id_konten")
	IdKategori := req.URL.Query().Get("id_kategori")
	encoder := json.NewEncoder(w)
	response := KontenListSuccessResponse{}
	response.Konten = make([]Konten, 0)
	kontents, err := api.kontenRepo.FetchKonten(IdKonten, IdKategori)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UserErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}
	for _, konten := range kontents {
		response.Konten = append(response.Konten, Konten{
			ID:             konten.ID,
			Id_kategori:    konten.Id_kategori,
			Tanggal_post:   konten.Tanggal_post,
			Judul_konten:   konten.Judul_konten,
			Isi_konten:     konten.Isi_konten,
			Tanggal_update: konten.Tanggal_update,
			Status_konten:  konten.Status_konten,
			Id_admin:       konten.Id_admin,
			Jumlah_like:    konten.Jumlah_like,
			Jumlah_dislike: konten.Jumlah_dislike,
			Id_ilustrasi:   konten.Id_ilustrasi,
			Nama_ilustrasi: konten.Nama_ilustrasi,
			Src:            konten.Src,
		})
	}
	result, err := json.MarshalIndent(response.Konten, "", "\t")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(result)
}

func (api *API) kategori(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	IdKategori := req.URL.Query().Get("id_kategori")
	encoder := json.NewEncoder(w)
	response := KategoriResponse{}
	response.Kategori = make([]Kategori, 0)
	kategori, err := api.kategoriRepo.FetchKategori(IdKategori)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UserErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}
	for _, v := range kategori {
		response.Kategori = append(response.Kategori, Kategori{
			ID:                  v.ID,
			Nama_kategori:       v.Nama_kategori,
			Keterangan_kategori: v.Keterangan_kategori,
		})
	}
	result, err := json.MarshalIndent(response.Kategori, "", "\t")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(result)
}
