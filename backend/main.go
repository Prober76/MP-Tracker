package main

import (
	"database/sql"
	"encoding/json"
	"html/template"
	"log"
	"net/http"

	_ "github.com/jackc/pgx/v4/stdlib"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var port string = ":8080"

// const dbURI string = "postgres://cxzxcotjnylvwn:8a6255cfdba74f5ff4c1a77d5a28331b7722b95c3762d9d240ac69c5a170008c@ec2-52-44-209-165.compute-1.amazonaws.com:5432/d3abobrl3jlrrf"

const dbURI string = "postgres://Grove:root@localhost:5432/test"

type partida struct {
	Usuario     string `json:"usuario"`
	Fecha       string `json:"fecha"`
	Equipo1     string `json:"equipo1"`
	Eventos1    int    `json:"eventos1"`
	Minijuegos1 int    `json:"minijuegos1"`
	Monedas1    int    `json:"monedas1"`
	Equipo2     string `json:"equipo2"`
	Eventos2    int    `json:"eventos2"`
	Minijuegos2 int    `json:"minijuegos2"`
	Monedas2    int    `json:"monedas2"`
	Equipo3     string `json:"equipo3"`
	Eventos3    int    `json:"eventos3"`
	Minijuegos3 int    `json:"minijuegos3"`
	Monedas3    int    `json:"monedas3"`
	Equipo4     string `json:"equipo4"`
	Eventos4    int    `json:"eventos4"`
	Minijuegos4 int    `json:"minijuegos4"`
	Monedas4    int    `json:"monedas4"`
}

type partidas struct {
	nro         int
	usuario     string
	fecha       string
	equipo1     string
	eventos1    int
	minijuegos1 int
	monedas1    int
	equipo2     string
	eventos2    int
	minijuegos2 int
	monedas2    int
	equipo3     string
	eventos3    int
	minijuegos3 int
	monedas3    int
	equipo4     string
	eventos4    int
	minijuegos4 int
	monedas4    int
}

var db *sql.DB

func main() {
	db, err := sql.Open("pgx", dbURI)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	gormDB, err := gorm.Open(postgres.New(postgres.Config{
		Conn: db,
	}), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	tMain, err := template.ParseFiles("./frontend/main.html")
	if err != nil {
		log.Fatal("No hubo parseo")
	}
	tView, err := template.ParseFiles("./frontend/view.html")
	if err != nil {
		log.Fatal("No hubo parseo")
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		_ = tMain.Execute(w, nil)
	})
	http.HandleFunc("/verPartidas", func(w http.ResponseWriter, r *http.Request) {
		var filas_lectura []partidas
		resultado := gormDB.Find(&filas_lectura)
		if resultado.Error != nil {
			log.Fatal(resultado.Error)
		}
		log.Println(filas_lectura)
		tView.Execute(w, filas_lectura)
		/* filas, err := db.Query("SELECT * FROM partidas;")
		if err != nil {
			log.Fatal(err)
		}
		defer filas.Close()
		filas_lectura := make([]partida_fila, 0)
		for filas.Next() {
			var p partida_fila
			err = filas.Scan(&p.Nro, &p.Usuario, &p.Fecha, &p.Equipo1, &p.Eventos1, &p.Minijuegos1, &p.Monedas1, &p.Equipo2, &p.Eventos2, &p.Minijuegos2, &p.Monedas2, &p.Equipo3, &p.Eventos3, &p.Minijuegos3, &p.Monedas3, &p.Equipo4, &p.Eventos4, &p.Minijuegos4, &p.Monedas4)
			if err != nil {
				log.Fatal(err)
			}
			filas_lectura = append(filas_lectura, p)
		}
		log.Println(filas_lectura)
		_ = tView.Execute(w, filas_lectura) */
	})
	http.HandleFunc("/enviarDatos", func(w http.ResponseWriter, r *http.Request) {
		var p partida
		decodificar := json.NewDecoder(r.Body)
		decodificar.DisallowUnknownFields()
		decodificar.Decode(&p)
		// Insercion
		stmt, err := db.Prepare(`INSERT INTO partidas(
			usuario, fecha, equipo1, eventos1, minijuegos1, monedas1,
			equipo2, eventos2, minijuegos2, monedas2,
			equipo3, eventos3, minijuegos3, monedas3,
			equipo4, eventos4, minijuegos4, monedas4
		) VALUES (
			$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18
		);
		`)
		if err != nil {
			log.Fatal("No se hizo la preparacion de la consulta")
		}
		_, err = stmt.Exec(p.Usuario, p.Fecha, p.Equipo1, p.Eventos1, p.Minijuegos1, p.Monedas1, p.Equipo2, p.Eventos2, p.Minijuegos2, p.Monedas2, p.Equipo3, p.Eventos3, p.Minijuegos3, p.Monedas3, p.Equipo4, p.Eventos4, p.Minijuegos4, p.Monedas4)
		if err != nil {
			log.Fatal("No se ejecuto la consulta")
		}
		defer stmt.Close()
	})
	http.Handle("/archivos/", http.StripPrefix("/archivos/", http.FileServer(http.Dir("./frontend"))))
	_ = http.ListenAndServe(port, nil)
}
