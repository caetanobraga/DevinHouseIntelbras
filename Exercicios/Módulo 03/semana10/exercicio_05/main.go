package main

import (
    "fmt"
    "math/rand"
    "time"
)

// Interface Minerador que define o método minerar()
type Minerador interface {
    minerar() float64
}

// Struct MineradorDeBitcoin que implementa a interface Minerador
type MineradorDeBitcoin struct {
    nome string
}

// Implementação do método minerar() da interface Minerador para MineradorDeBitcoin
func (m MineradorDeBitcoin) minerar() float64 {
    // Gerando um valor aleatório de 0 a 1 para simular o valor minerado
    rand.Seed(time.Now().UnixNano())
    valorMinerado := rand.Float64()
    return valorMinerado
}

func main() {
    // Criando uma instância de MineradorDeBitcoin
    minerador := MineradorDeBitcoin{nome: "Minerador 1"}

    // Realizando a mineração de Bitcoins com a instância de MineradorDeBitcoin
    valorMinerado := minerador.minerar()
    fmt.Printf("O valor minerado pelo %s foi de: %f\n", minerador.nome, valorMinerado)
}