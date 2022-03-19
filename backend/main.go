package main

import (
	"log"
	"net/http"
	"text/template"
)

var port string = ":8080"

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		temp, err := template.ParseFiles("./frontend/main.html")
		if err != nil {
			log.Fatal("No hubo parseo")
		}
		_ = temp.Execute(w, nil)
	})
	http.Handle("/archivos/", http.StripPrefix("/archivos/", http.FileServer(http.Dir("./frontend"))))
	_ = http.ListenAndServe(port, nil)
}
