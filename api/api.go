package main

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

//go:embed airlines.json
var airlines []byte

type Airline struct {
	Name string `json:"name"`
}

func main() {
	http.HandleFunc("/airlines", getAirlines)
	http.HandleFunc("/airlines/delay", getAirlinesDelay)
	fmt.Println("Server is running on port 8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func getAirlines(w http.ResponseWriter, r *http.Request) {
	airlinesData := []Airline{}
	err := json.Unmarshal(airlines, &airlinesData)
	if err != nil {
		log.Fatal(err)
		w.WriteHeader(http.StatusInternalServerError)
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(airlinesData)
}

func getAirlinesDelay(w http.ResponseWriter, r *http.Request) {
	duration := time.Duration(10) * time.Second
	time.Sleep(duration)
	getAirlines(w, r)
}
