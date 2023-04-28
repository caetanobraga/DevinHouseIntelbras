package main

import "fmt"

func main() {
    input := "socorrammesubinoonibusemmarrocos" // exemplo de input
    isPalindrome := true

    for i := 0; i < len(input)/2; i++ {
        if input[i] != input[len(input)-i-1] {
            isPalindrome = false
            break
        }
    }

    if isPalindrome {
        fmt.Println(input, "é um palíndromo")
    } else {
        fmt.Println(input, "não é um palíndromo")
    }
}