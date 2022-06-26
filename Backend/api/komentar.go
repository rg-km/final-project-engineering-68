package api

import (
	"encoding/json"
	"net/http"
	"time"
)

type Komentar struct {
	ID               int64  `json:"id"`
	Tanggal_Komentar string `json:"tanggal_komentar"`
	Isi_Komentar     string `json:"isi_komentar"`
	Id_konten        int64  `json:"id_konten"`
	Id_user          int64  `json:"id_user"`
	Jumlah_like      int64  `json:"jumlah_like"`
	Jumlah_dislike   int64  `json:"jumlah_dislike"`
}

type KomentarErrorResponse struct {
	Error string `json:"error"`
}

type KomentarListSuccessResponse struct {
	Komentar []Komentar `json:"list_komentar"`
}

func (api *API) addKomentar(w http.ResponseWriter, req *http.Request) {

	api.AllowOrigin(w, req)
	IdKonten := req.URL.Query().Get("id_konten")
	username := req.Context().Value("username")
	IdUser, err := api.userRepo.FetchIdByUsername(username)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
	}
	//var user User
	//var konten Konten
	var komen Komentar

	err = json.NewDecoder(req.Body).Decode(&komen)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	currentDate := time.Now().Format("2006-01-02")
	err = api.komentarRepo.AddKomentar(currentDate, komen.Isi_Komentar, IdUser, IdKonten, komen.Jumlah_like, komen.Jumlah_dislike)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Error when adding comments"))
		return
	}

	w.WriteHeader(http.StatusCreated)

}

func (api *API) komentarList(w http.ResponseWriter, req *http.Request) {

	api.AllowOrigin(w, req)
	IdKonten := req.URL.Query().Get("id_konten")
	encoder := json.NewEncoder(w)

	resp := KomentarListSuccessResponse{}
	resp.Komentar = make([]Komentar, 0)

	komen, err := api.komentarRepo.Komentar(IdKonten)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(KomentarErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, eachKomen := range komen {
		resp.Komentar = append(resp.Komentar, Komentar{
			ID:               eachKomen.ID,
			Tanggal_Komentar: eachKomen.Tanggal_Komentar,
			Isi_Komentar:     eachKomen.Isi_Komentar,
			Id_user:          eachKomen.Id_user,
			Id_konten:        eachKomen.Id_konten,
			Jumlah_like:      eachKomen.Jumlah_like,
			Jumlah_dislike:   eachKomen.Jumlah_dislike,
		})
	}
	result, err := json.MarshalIndent(resp.Komentar, "", "\t")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(result)

	// encoder.Encode(resp)

}
