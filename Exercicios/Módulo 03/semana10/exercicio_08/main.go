package main

import (
    "fmt"
    "labmath"
)

func main() {
    number := 17

    if labmath.IsPrime(number) {
        fmt.Printf("%d é um número primo\n", number)
    } else {
        fmt.Printf("%d não é um número primo\n", number)
    }
}