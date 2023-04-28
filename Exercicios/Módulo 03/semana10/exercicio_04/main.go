package main

import (
    "fmt"
)

// Struct base para Veiculo
type Veiculo struct {
    marca  string
    modelo string
}

// Struct Carro que herda de Veiculo e adiciona sua própria propriedade
type Carro struct {
    Veiculo
    numeroDePortas int
}

// Struct Moto que herda de Veiculo e adiciona sua própria propriedade
type Moto struct {
    Veiculo
    cilindradas int
}

// Interface Revisao que define o método fazerRevisao()
type Revisao interface {
    fazerRevisao()
}

// Implementação do método fazerRevisao() para Carro
func (c Carro) fazerRevisao() {
    fmt.Printf("Fazendo revisão do carro %s %s com %d portas\n", c.marca, c.modelo, c.numeroDePortas)
}

// Implementação do método fazerRevisao() para Moto
func (m Moto) fazerRevisao() {
    fmt.Printf("Fazendo revisão da moto %s %s com %d cilindradas\n", m.marca, m.modelo, m.cilindradas)
}

// Função agendarRevisao que recebe uma variável do tipo Revisao e chama o método fazerRevisao()
func agendarRevisao(r Revisao) {
    r.fazerRevisao()
}

func main() {
    // Criando uma instância de Carro e uma instância de Moto
    carro := Carro{Veiculo{"Fiat", "Palio"}, 4}
    moto := Moto{Veiculo{"Honda", "CB 500"}, 500}

    // Chamando a função agendarRevisao para as instâncias de Carro e Moto
    agendarRevisao(carro)
    agendarRevisao(moto)
}