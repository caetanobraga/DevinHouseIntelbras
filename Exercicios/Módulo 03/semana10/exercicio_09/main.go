package main

import (
	"fmt"
)

type Task struct {
    name string
}

type TaskList interface {
    Add(task Task)
    Remove(index int)
    List()
}

type Tasks struct {
    tasks []Task
}

func (t *Tasks) Add(task Task) {
    t.tasks = append(t.tasks, task)
    fmt.Println("Tarefa adicionada:", task.name)
    t.List()
}

func (t *Tasks) Remove(index int) {
    task := t.tasks[index]
    t.tasks = append(t.tasks[:index], t.tasks[index+1:]...)
    fmt.Println("Tarefa removida:", task.name)
    t.List()
}

func (t *Tasks) List() {
    fmt.Println("Lista de tarefas:")
    for i, task := range t.tasks {
        fmt.Printf("%d - %s\n", i+1, task.name)
    }
}

func main() {
    tasks := &Tasks{}
    var option int
    var taskName string

    for {
        fmt.Println("Escolha uma opção:")
        fmt.Println("1 - Adicionar tarefa")
        fmt.Println("2 - Remover tarefa")
        fmt.Println("3 - Listar tarefas")
        fmt.Println("4 - Sair")
        fmt.Scanln(&option)

        switch option {
        case 1:
            fmt.Println("Digite o nome da tarefa:")
            fmt.Scanln(&taskName)
            task := Task{name: taskName}
            tasks.Add(task)
        case 2:
            var index int
            tasks.List()
            fmt.Println("Digite o número da tarefa que deseja remover:")
            fmt.Scanln(&index)
            tasks.Remove(index - 1)
        case 3:
            tasks.List()
        case 4:
            fmt.Println("Saindo...")
            return
        default:
            fmt.Println("Opção inválida, tente novamente")
        }
    }
}