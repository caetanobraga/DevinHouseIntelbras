package main

import (
	"fmt"
	"strings"
)

func main() {
	// Recebe a frase como input do usuário
	var frase string
	fmt.Print("Digite uma frase: ")
	fmt.Scan(&frase)

	// Remove espaços extras e quebra a frase em palavras
	palavras := strings.Fields(strings.TrimSpace(frase))

	// Mostra a quantidade de palavras na frase
	fmt.Printf("A frase digitada tem %d palavras.\n", len(palavras))
}