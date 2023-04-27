package main

import (
    "fmt"
    "math/rand"
)

type Carteira interface {
    Enviar(valor float64, destino string) error
    Receber(valor float64) error
    ConsultarSaldo() float64
}

type Endereco struct {
    chavePublica string
    chavePrivada string
    saldo        float64
}

func (e *Endereco) Enviar(valor float64, destino string) error {
    if valor > e.saldo {
        return fmt.Errorf("saldo insuficiente")
    }
    e.saldo -= valor
    return nil
}

func (e *Endereco) Receber(valor float64) error {
    e.saldo += valor
    return nil
}

func (e *Endereco) ConsultarSaldo() float64 {
    return e.saldo
}

func enviarBitcoin(c Carteira, valor float64, destino string) error {
    return c.Enviar(valor, destino)
}

func main() {
    endereco := &Endereco{
        chavePublica: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        chavePrivada: "5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF",
        saldo:        rand.Float64() * 100,
    }

    fmt.Println("Saldo inicial:", endereco.ConsultarSaldo())

    if err := enviarBitcoin(endereco, 20, "1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd"); err != nil {
        fmt.Println("Erro ao enviar Bitcoin:", err)
    } else {
        fmt.Println("Transação realizada com sucesso.")
    }

    fmt.Println("Saldo final:", endereco.ConsultarSaldo())
}