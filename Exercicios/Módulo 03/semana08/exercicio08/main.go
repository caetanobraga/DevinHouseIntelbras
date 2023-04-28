package main

import "fmt"

func main() {
    var num int
    fmt.Print("Digite um número inteiro: ")
    fmt.Scanln(&num)
    fmt.Printf("O fatorial de %d é %d\n", num, fatorial(num))
}

func fatorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * fatorial(n-1)
}