package main

import (
	"fmt"
)

func main() {
	numbers := []int{2, 7, 9, 3, 5}

	max := numbers[0] // definimos o primeiro elemento como o maior valor até o momento

	// percorremos os elementos do array
	for _, num := range numbers {
		// verificamos se o elemento atual é maior que o valor máximo até o momento
		if num > max {
			max = num // se for, atualizamos o valor máximo
		}
	}

	fmt.Printf("O maior valor encontrado no array é: %d\n", max)
}