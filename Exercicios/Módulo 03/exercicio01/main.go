package main

import (
    "fmt"
)

func main() {
    var num1, num2 int

    fmt.Print("Digite o primeiro número: ")
    fmt.Scanln(&num1)

    fmt.Print("Digite o segundo número: ")
    fmt.Scanln(&num2)

    sum := num1 + num2
    diff := num1 - num2

    fmt.Printf("A soma de %d e %d é %d\n", num1, num2, sum)
    fmt.Printf("A diferença de %d e %d é %d\n", num1, num2, diff)
}