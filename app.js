function getResult() {
    let result = slowMath.add(6,2);
    return result;
}
getResult()
.then((result) => {
    return slowMath.multiply(result, 2);
}).then ((result) => {
    return slowMath.divide(result, 4);
}).then ((result) => {
    return slowMath.subtract(result, 3);
}).then ((result) => {
    return slowMath.add(result, 98);
}).then ((result) => {
    return slowMath.remainder(result, 2);
}).then ((result) => {
    return slowMath.multiply(result, 50);
}).then ((result) => {
    return slowMath.remainder(result, 40);
}).then ((result) => {
    return slowMath.add(result, 32);
}).then ((result) => {
    console.log(`The final result is ${result}.`);
}).catch ((error) => {
    console.log('An error has occurred!');
});
