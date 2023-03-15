package main

import (
	"fmt"
)

func main() {
	var num int

	fmt.Print("Digite um número inteiro: ")
	fmt.Scanln(&num)

	fmt.Printf("Números primos até %d:\n", num)

	for i := 2; i <= num; i++ {
		isPrime := true

		for j := 2; j < i; j++ {
			if i%j == 0 {
				isPrime = false
				break
			}
		}

		if isPrime {
			fmt.Printf("%d ", i)
		}
	}

	fmt.Println()
}
