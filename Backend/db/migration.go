package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./nakama.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE konten (
		id_konten  INTEGER PRIMARY KEY,
		id_kategori INTEGER,
		id_ilustrasi INTEGER, 
		tanggal_post TEXT,
		judul_konten TEXT,
		
		isi_konten TEXT,
		tanggal_update TEXT,
		status_konten TEXT,
		id_admin INTEGER,
		jumlah_like INTEGER,
		jumlah_dislike INTEGER
	  );
	  
	  INSERT INTO konten VALUES 
	  (1,500001, 200001,"11-06-2022","Li Europan lingues es membres",
	  "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."
	  ,"","",300001,1,2),
	  (2,500001, 200002,"11-06-2022","abc def ghi jkl mno",
	  "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To"
	  ,"","",300001,1,2),
	  (3,500002, 200001,"11-06-2022","But I must explain to",
	  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
	  ,"","",300002,1,2),
	  (4,500002, 200002,"11-06-2022","The European languages are members",
	  "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To"
	  ,"","",300002,1,2);
	  
	  CREATE TABLE kategori (
		id_kategori INTEGER PRIMARY KEY,
		nama_kategori TEXT
	  );
	  INSERT INTO kategori VALUES (500001,"Javascript"),(500002,"Go");
	  
	  
	  CREATE TABLE ilustrasi (
		id_ilustrasi INTEGER PRIMARY KEY,
		isi_ilustrasi BLOB
	  );
	  INSERT INTO ILUSTRASI VALUES (200001,101),(200002,100);
	  
	  CREATE TABLE komentar (
		id_komentar  INTEGER PRIMARY KEY,
		tanggal_komentar TEXT,
		isi_komentar TEXT,
		id_user INTEGER, 
		id_konten INTEGER,
		jumlah_like INTEGER,
		jumlah_dislike INTEGER
	  );
	  INSERT INTO komentar VALUES (600001,"11-06-2022","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",400001,1,1,2)
	  ,(600002,"11-06-2022","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",400002,4,1,2),
	  (600003,"11-06-2022","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",400002,2,1,2),
	  (600004,"11-06-2022","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",400001,3,1,2);
	  
	  
	  
	  CREATE TABLE user (
		id_user  INTEGER PRIMARY KEY,
		nama_user TEXT,
		email_user TEXT,
		username TEXT,
		password TEXT,
		tanggal_bergabung TEXT,
		role TEXT
	  );
	  INSERT INTO user VALUES (400001,"Budi","budi@gmail.com","budi123","budi123","11-06-2022","user"),(400002,"Andi","andi@gmail.com","andi123","andi123","11-06-2022","user"),(300001,"Kevin","kevin@gmail.com","kevin123","kevin123","admin"),(300002,"Amar","amar@gmail.com","amar123","amar123","admin");
	`)

	if err != nil {
		panic(err)
	}
}
