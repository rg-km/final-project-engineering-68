package api

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/rg-km/final-project-engineering-68/repository"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

type API struct {
	userRepo     repository.UserRepository
	kontenRepo   repository.KontenRepository
	kategoriRepo repository.KategoriRepository
	komentarRepo repository.KomentarRepository
	mux          *http.ServeMux
}

var (
	googleOaouthConfig = &oauth2.Config{
		RedirectURL:  "http://localhost:8082/callback",
		ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
		ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
		Scopes:       []string{"https://www.googleapis.com/auth/userinfo.email"},
		Endpoint:     google.Endpoint,
	}
	randomState = "random"
)

func NewAPI(userRepo repository.UserRepository, kontenRepo repository.KontenRepository, kategoriRepo repository.KategoriRepository, komentarRepo repository.KomentarRepository) API {
	mux := http.NewServeMux()
	// api := API{
	// 	userRepo, kontenRepo, mux,
	// }
	//kontentRepo :=
	api := API{
		userRepo, kontenRepo, kategoriRepo, komentarRepo, mux,
	}
	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	// mux.HandleFunc("/callback", handleCallback)
	// mux.HandleFunc("/", handleHome)
	// mux.HandleFunc("/login", handleLogin)
	mux.Handle("/api/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/products", api.GET(http.HandlerFunc(api.userlist)))
	mux.Handle("/api/konten", api.GET(api.AuthMiddleWare((http.HandlerFunc(api.kontenlist)))))
	mux.Handle("/api/kategori", api.GET(api.AuthMiddleWare((http.HandlerFunc(api.kategori)))))
	mux.Handle("/api/komentar/add", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.addKomentar))))
	mux.Handle("/api/komentar", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.komentarList))))

	return api

}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}
func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8082/")
	http.ListenAndServe(":8082", api.Handler())
}
func handleHome(w http.ResponseWriter, r *http.Request) {
	var html = `<html><body><a href = "/login">Google Log in</a></body></html>`
	fmt.Fprint(w, html)
}
func handleLogin(w http.ResponseWriter, r *http.Request) {
	url := googleOaouthConfig.AuthCodeURL(randomState)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}
func handleCallback(w http.ResponseWriter, r *http.Request) {
	if r.FormValue("state") != randomState {
		fmt.Println("state is not valid")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	token, err := googleOaouthConfig.Exchange(oauth2.NoContext, r.FormValue("code"))
	if err != nil {
		fmt.Printf("could not get token : %s\n", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	resp, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		fmt.Printf("could not create get token: %s\n", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	defer resp.Body.Close()
	content, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("could not parse response : %s\n", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	fmt.Fprintf(w, "Response : %s", content)
}
