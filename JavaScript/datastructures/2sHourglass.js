process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    let hourglass = []
        for (let i = 1; i < 5; i++){
            for (let x = 1; x < 5; x++){
            hourglass.push((arr[i-1][x-1] + arr[i-1][x] + arr[i-1][x + 1] + arr[i][x] + arr[i+1][x-1] + arr[i+1][x] + arr[i+1][x+1]))
            }
        }
        console.log(Math.max(...hourglass))
    }
