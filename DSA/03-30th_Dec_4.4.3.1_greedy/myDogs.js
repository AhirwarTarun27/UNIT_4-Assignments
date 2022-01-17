function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];

  let dogs = [];

  for (let i = 0; i < n; i++) {
    let s = input[line++].trim().split(" ").map(Number);
    s[0].push();
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`2
  3 1
  4 3`);
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
