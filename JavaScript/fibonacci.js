function fibonacci (index=10) {
  if (!index) index = 10
  let sequence = [0, 1]
  for (let i = 2; i <= index; i++) {
    let n = sequence.length - 1 //last index of sequence
    let n_1 = n - 1 //index before the last of sequence
    sequence.push(sequence[n] + sequence[n_1])
  }
  //console.log(sequence)
  console.log(`O ${index}º termo da sequencia é: ${sequence[index]}`)
}

function getExecutionTime(method) { //calc a function execution time
  let args = Array.prototype.slice.call(arguments, 1)
  let startTime = performance.now()
  method.apply(null, args)
  return performance.now() - startTime
}

function init () {
  let arg = parseInt(process.argv[2])
  if (process.argv[2] && !arg) {
    throw new TypeError("O numero passado como argumento deve ser um inteiro.")
  }
  console.log(`Tempo de execucao do fibonacci: ${getExecutionTime(fibonacci, arg)}ms`)
}

init()