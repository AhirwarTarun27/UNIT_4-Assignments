function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  fundBug(n, arr);
}

function fundBug(n, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      console.log(i);
      count++;
      break;
    }
  }
  if (count == 0) {
    console.log(-1);
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`5
  0 0 0 1 1`);
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
