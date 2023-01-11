
function compose (...args) {
    return (arg) => {
        return args.reduceRight((value, currentFn) => {
            return currentFn?.(value)
        }, arg)
    }
}

const add1 = v => v + 1;
const add2 = v => v + 2;
const add3 = v => v + 3;

console.log(compose(add1, add2, add3)(0)) // 6
