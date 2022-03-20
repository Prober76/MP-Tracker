package main

import (
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

type partidas struct {
	Nro         int    `gorm:"primaryKey"`
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

func main() {
	db, err := gorm.Open(postgres.Open(dbURI), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	err = db.AutoMigrate(&partidas{})
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
		var lectura []partidas
		db.Limit(10).Order("nro desc").Find(&lectura)
		tView.Execute(w, lectura)
	})
	http.HandleFunc("/enviarDatos", func(w http.ResponseWriter, r *http.Request) {
		var p partidas
		decodificar := json.NewDecoder(r.Body)
		decodificar.DisallowUnknownFields()
		decodificar.Decode(&p)
		db.Create(&p)
	})
	http.Handle("/archivos/", http.StripPrefix("/archivos/", http.FileServer(http.Dir("./frontend"))))
	_ = http.ListenAndServe(port, nil)
}
