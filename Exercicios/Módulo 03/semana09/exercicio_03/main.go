package main

import "fmt"

func main() {
    frutas := map[string]string{
        "maca":     "é uma fruta que cresce em arvore",
        "banana":   "é uma fruta amarela",
        "morango":  "O morango é uma fruta vermelha, cuja origem é a Europa",
        "melancia": "A melancia é uma fruta rasteira, originária da África",
    }

    // Imprime o map na tela
    fmt.Println(frutas)
}