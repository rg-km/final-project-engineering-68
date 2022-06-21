package repository_test

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	"github.com/rg-km/final-project-engineering-68/repository"
)

var _ = Describe("Repository", func() {

	var db *sql.DB
	var err error
	var userRepo *repository.UserRepository

	BeforeEach(func() {
		db, err = sql.Open("sqlite3", "./nakama.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS user (
			id  integer not null primary key  AUTOINCREMENT,
			nama_user varchar(255) not null,
			email_user varchar(255) not null,
			username varchar(255) not null,
			password varchar(255) not null,
			tanggal_bergabung DATE not null,
			role varchar(255) not null
		);
			
		INSERT INTO user VALUES
		(300001,"Kevin","kevin@gmail.com","kevin123","kevin123","11-06-2022","admin"),
		(300002,"Amar","amar@gmail.com","amar123","amar123","11-06-2022","admin"),
		(400001,"Budi","budi@gmail.com","budi123","budi123","11-06-2022","user"),
		(400002,"Andi","andi@gmail.com","andi123","andi123","11-06-2022","user");`)
		if err != nil {
			panic(err)
		}

		userRepo = repository.NewUserRepository(db)

	})

	AfterEach(func() {
		db, err := sql.Open("sqlite3", "./nakama.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`DROP TABLE IF EXISTS user;`)
		if err != nil {
			panic(err)
		}
	})

	Describe("select all users test", func() {
		When("get all users list from database", func() {
			It("should return all users list", func() {

				userLists, err := userRepo.FetchUsers()
				Expect(err).ToNot(HaveOccurred())

				Expect(userLists[0].Nama).To(Equal("Kevin"))
				Expect(userLists[0].Username).To(Equal("kevin123"))
				Expect(userLists[0].Password).To(Equal("kevin123"))
				Expect(userLists[1].Nama).To(Equal("Amar"))
				Expect(userLists[1].Username).To(Equal("amar123"))
				Expect(userLists[1].Password).To(Equal("amar123"))
				Expect(userLists[2].Nama).To(Equal("Budi"))
				Expect(userLists[2].Username).To(Equal("budi123"))
				Expect(userLists[2].Password).To(Equal("budi123"))
				Expect(userLists[3].Nama).To(Equal("Andi"))
				Expect(userLists[3].Username).To(Equal("andi123"))
				Expect(userLists[3].Password).To(Equal("andi123"))

			})
		})
	})

	Describe("login test", func() {
		When("username and password correct", func() {
			It("login accept", func() {
				login, err := userRepo.Login("kevin123", "kevin123")
				Expect(err).ToNot(HaveOccurred())
				Expect(*login).To(Equal("kevin123"))
			})
		})

		When("password incorrect", func() {
			It("login failed", func() {
				_, err := userRepo.Login("kevin123", "kevin1234")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})

		When("username and password incorrect", func() {
			It("login failed", func() {
				_, err := userRepo.Login("kevin321", "4321")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
	})

	Describe("role test", func() {
		When("role correct", func() {
			It("return role", func() {
				role, err := userRepo.FetchUserRole("kevin123")
				Expect(err).ToNot(HaveOccurred())
				Expect(*role).To(Equal("admin"))
			})
		})
	})

	Describe("email test", func() {
		When("check username with email", func() {
			It("return username", func() {
				email, err := userRepo.CheckEmail("kevin@gmail.com")
				Expect(err).ToNot(HaveOccurred())
				Expect(email).To(Equal("kevin123"))
			})
		})
	})

	Describe("insert user test", func() {
		When("insert user", func() {
			It("return new user", func() {

				userRepo.InsertUser("Amanda", "amanda@gmail.com", "amanda123", "amanda123", "11-06-2022", "user")

				userLists, err := userRepo.FetchUsers()
				Expect(err).ToNot(HaveOccurred())

				Expect(userLists[4].Nama).To(Equal("Amanda"))
				Expect(userLists[4].Username).To(Equal("amanda123"))
				Expect(userLists[4].Password).To(Equal("amanda123"))

			})
		})
	})

})
