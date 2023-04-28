package main

import "fmt"

func main() {
    // Criando o mapa com as frutas e suas descrições
    frutas := map[string]string{
        "maca":     "é uma fruta que cresce em árvore",
        "banana":   "é uma fruta amarela",
        "morango":  "O morango é uma fruta vermelha, cuja origem é a Europa",
        "melancia": "A melancia é uma fruta rasteira, originária da África",
    }

    // Buscando a descrição do morango no mapa de frutas
    if descricao, ok := frutas["morango"]; ok {
        fmt.Printf("morango - %s\n", descricao)
    } else {
        fmt.Println("Morango não encontrado")
    }
}