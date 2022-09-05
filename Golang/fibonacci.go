package main

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

var N int

func fibonacci(n int) int {
	f := make([]int, n+1, n+2)
	if n < 2 {
		f = f[0:2]
	}
	f[0] = 0
	f[1] = 1
	for i := 2; i <= n; i++ {
		f[i] = f[i-1] + f[i-2]
	}
	return f[n]
}

func main() {
	start := time.Now().UnixNano() / int64(time.Nanosecond) //execution time start

	fmt.Println(fibonacci(N))

	end := time.Now().UnixNano() / int64(time.Nanosecond) //execution time stop
	fmt.Printf("Tempo de execucao do fibonacci: %dns\n", end-start)
}

func init() {
	if len(os.Args) > 1 {
		i, err := strconv.Atoi(os.Args[1])
		if err != nil {
			fmt.Println("O numero passado como argumento deve ser um inteiro.")
			os.Exit(0)
		}
		N = i
	} else {
		N = 10
	}
}
