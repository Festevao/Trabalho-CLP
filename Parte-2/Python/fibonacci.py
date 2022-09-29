import time
import sys


def fibonacci(ne):
    n = 0
    n_1 = 1
    sequence = [n, n_1]
    for _ in range(0, ne - 1):
        aux = n + n_1
        n = n_1
        n_1 = aux
        sequence.append(aux)
    print(f"O {ne}º termo da sequencia é: {sequence[ne]}")


def preprocess():
    if len(sys.argv) == 2:
        return int(sys.argv[1])
    elif len(sys.argv) != 1:
        print("Qauntidade de argumentos invalida")
        exit()
    else:
        return 10


inicio = time.time()

n = preprocess()
fibonacci(n)

fim = time.time()
print(f"Tempo de execucao do fibonacci: {fim - inicio}")
