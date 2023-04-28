package labmath

import "math"

// Verifica se um número é primo
func IsPrime(number int) bool {
    if number < 2 {
        return false
    }

    for i := 2; i <= int(math.Sqrt(float64(number))); i++ {
        if number%i == 0 {
            return false
        }
    }

    return true
}