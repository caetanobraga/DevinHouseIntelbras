package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
    // Lê a frase do usuário
    fmt.Println("Digite uma frase:")
    scanner := bufio.NewScanner((bufio.NewReader((os.Stdin))))
    scanner.Scan()
    frase := scanner.Text()

    // Capitaliza todas as palavras da frase
    fraseCapitalizada := strings.Title(frase)

    // Imprime a frase capitalizada no console
    fmt.Println(fraseCapitalizada)
}