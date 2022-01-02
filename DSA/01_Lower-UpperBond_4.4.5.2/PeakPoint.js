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

function peakPoint(n, arr) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > arr[mid - 1]) {
      return arr[mid];
    }
  }
}

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
