function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;

  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    peakPoint(n, arr);
  }
}

function peakPoint(n, arr) {}

if (process.env.USERNAME === "coder") {
  runProgram(`2
  3
  10 20 11
  5
  1 3 6 5 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
