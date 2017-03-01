consts main = () => {
    let n = parseInt(readLine());
    let a = [];
    let pd = 0;
    let sd = 0;
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    for (let i = 0; i < n; i++) {
        pd += a[i][i]
        sd += a[i][n - i - 1]
    }
    console.log(Math.abs(pd - sd))
}
