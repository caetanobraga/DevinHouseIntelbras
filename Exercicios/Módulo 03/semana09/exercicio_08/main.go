package main

import (
	"fmt"
	"math/rand"
	"time"
)

func printNumber(num int, ch chan int) {
	rand.Seed(time.Now().UnixNano()) // inicializa o gerador de números aleatórios
	time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond) // simula um processamento variável
	ch <- num // envia o número para o canal
}

func main() {
	ch := make(chan int)
	for i := 1; i <= 10; i++ {
		go printNumber(i, ch) // cria uma goroutine para cada número
	}

	for i := 1; i <= 10; i++ {
		fmt.Println(<-ch) // imprime os números na ordem em que são recebidos no canal
	}
}