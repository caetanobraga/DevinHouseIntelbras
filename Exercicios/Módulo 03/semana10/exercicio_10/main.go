package main

import (
	"fmt"
	"time"
)

type Task struct {
	Name string
}

func main() {
	tasks := []Task{}

	ch := make(chan bool)

	go displayTaskCount(ch, &tasks)

	for {
		fmt.Println("Escolha uma opção:")
		fmt.Println("1. Adicionar tarefa")
		fmt.Println("2. Remover tarefa")
		fmt.Println("3. Listar tarefas")
		fmt.Println("4. Sair")

		var choice int
		fmt.Scanln(&choice)

		switch choice {
		case 1:
			fmt.Println("Digite o nome da tarefa:")
			var taskName string
			fmt.Scanln(&taskName)
			tasks = append(tasks, Task{Name: taskName})
			ch <- true // envia sinal para atualizar contagem
		case 2:
			fmt.Println("Digite o índice da tarefa a ser removida:")
			var index int
			fmt.Scanln(&index)
			if index >= 0 && index < len(tasks) {
				tasks = append(tasks[:index], tasks[index+1:]...)
				ch <- true // envia sinal para atualizar contagem
			} else {
				fmt.Println("Índice inválido.")
			}
		case 3:
			fmt.Println("Tarefas:")
			for i, task := range tasks {
				fmt.Printf("%d. %s\n", i, task.Name)
			}
		case 4:
			close(ch) // fecha o canal para encerrar a go routine
			return
		default:
			fmt.Println("Opção inválida.")
		}
	}
}

func displayTaskCount(ch chan bool, tasks *[]Task) {
	for {
		select {
		case <-ch: // aguarda sinal para atualizar contagem
			fmt.Printf("Quantidade de tarefas: %d\n", len(*tasks))
		default:
			// não faz nada
		}
		time.Sleep(5 * time.Second)
	}
}