package main

import (
    "fmt"
)

type Book struct {
    title         string
    author        string
    publishedYear int
    pages         int
}

func main() {
    // Inicializa uma variável do tipo Book com alguns valores de exemplo
    book := Book{
        title:         "Dom Casmurro",
        author:        "Machado de Assis",
        publishedYear: 1899,
        pages:         256,
    }

    // Imprime os valores dos campos da variável book
    fmt.Println("Título:", book.title)
    fmt.Println("Autor:", book.author)
    fmt.Println("Ano de publicação:", book.publishedYear)
    fmt.Println("Número de páginas:", book.pages)
}