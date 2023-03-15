package main

import (
	"fmt"
)

func main() {
	var str string

	fmt.Print("Digite uma string: ")
	fmt.Scanln(&str)

	size := len(str)

	fmt.Printf("A string \"%s\" tem tamanho %d\n", str, size)
}
