function fibonacciSequence(num) {
    let sequence = [1, 1];

    for (let i = 2; i < num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

console.log(fibonacciSequence(6));