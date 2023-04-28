package main

import "fmt"

func diaDaSemana(dia int) {
    switch dia {
    case 1:
        fmt.Println("Segunda-Feira")
    case 2:
        fmt.Println("Terça-Feira")
    case 3:
        fmt.Println("Quarta-Feira")
    case 4:
        fmt.Println("Quinta-Feira")
    case 5:
        fmt.Println("Sexta-Feira")
    case 6:
        fmt.Println("Sábado-Feira")
    case 7:
        fmt.Println("Domingo-Feira")
    default:
        fmt.Println("Valor Invalido")
    }
}

func main() {
    diaDaSemana(1)
}