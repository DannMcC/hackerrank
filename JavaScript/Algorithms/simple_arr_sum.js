const main = () => {
    let n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let sum = arr.reduce((a, b) => a + b, 0)
    console.log(sum)


}
