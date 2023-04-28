package main

import "fmt"

func concatenaStrings(str1, str2 string) string {
    return str1 + str2
}

func main() {
    str1 := "Hello"
    str2 := "World"
    resultado := concatenaStrings(str1, str2)
    fmt.Println(resultado) // saída: HelloWorld
}