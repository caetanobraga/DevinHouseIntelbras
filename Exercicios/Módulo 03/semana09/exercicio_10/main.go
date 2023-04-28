package main

import (
	"fmt"
)

func checkParImpar(n int) string {
	if n%2 == 0 {
		return "Par"
	} else {
		return "Ímpar"
	}
}

func main() {
	numero := 7
	resultado := checkParImpar(numero)
	fmt.Printf("%d é %s\n", numero, resultado)
}