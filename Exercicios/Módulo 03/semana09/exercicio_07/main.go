package main

import "fmt"

func main() {
    // Criando o array com 100 posições e atribuindo valores de 1 a 100
    arr := make([]int, 100)
    for i := 0; i < 100; i++ {
        arr[i] = i + 1
    }

    // Percorrendo o array e imprimindo os números primos
    for _, num := range arr {
        if isPrime(num) {
            fmt.Printf("%d ", num)
        }
    }
}

// Função para verificar se um número é primo
func isPrime(n int) bool {
    if n <= 1 {
        return false
    }
    for i := 2; i*i <= n; i++ {
        if n%i == 0 {
            return false
        }
    }
    return true
}