package main

import (
	"fmt"
	"strings"
)

func main() {
    frase := "o rato roeu a roupa do rei de roma"
    palavras := strings.Fields(frase)
    ocorrencias := make(map[string]int)

    for _, palavra := range palavras {
        ocorrencias[palavra]++
    }

    for palavra, qtde := range ocorrencias {
        if qtde > 1 {
            fmt.Printf("%q se repete %d vezes\n", palavra, qtde)
        }
    }
}