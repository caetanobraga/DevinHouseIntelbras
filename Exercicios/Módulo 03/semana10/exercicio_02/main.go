package main

import "fmt"

type Address struct {
    street  string
    city    string
    state   string
    zipCode string
}

type Person struct {
    name    string
    age     int
    address Address
}

func main() {
    // Inicializando a variável person com alguns valores de exemplo
    person := Person{
        name: "João da Silva",
        age:  30,
        address: Address{
            street:  "Rua das Flores",
            city:    "São Paulo",
            state:   "SP",
            zipCode: "01234-567",
        },
    }

    // Imprimindo os valores dos campos
    fmt.Println("Name:", person.name)
    fmt.Println("Age:", person.age)
    fmt.Println("Address:")
    fmt.Println("  Street:", person.address.street)
    fmt.Println("  City:", person.address.city)
    fmt.Println("  State:", person.address.state)
    fmt.Println("  Zip Code:", person.address.zipCode)
}