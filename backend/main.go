package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
)

var port string = ":" + os.Getenv("PORT")

// var port string = ":8080"

func main() {
	temp, err := template.ParseFiles("./frontend/main.html")
	if err != nil {
		log.Fatal("No hubo parseo")
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		/* temp, err := template.ParseFiles("./frontend/main.html")
		if err != nil {
			log.Fatal("No hubo parseo")
		} */
		_ = temp.Execute(w, nil)
	})
	http.Handle("/archivos/", http.StripPrefix("/archivos/", http.FileServer(http.Dir("./frontend"))))
	_ = http.ListenAndServe(port, nil)
}
