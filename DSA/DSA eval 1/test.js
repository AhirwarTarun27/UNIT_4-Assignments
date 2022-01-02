function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let nQ = +input[2];
  let line = 3;
  let query = [];
  let key = [];
  for (let i = 0; i < nQ; i++) {
    let arr2 = input[line++].trim().split(" ").map(Number);

    query.push(arr2[0]);
    key.push(arr2[1]);
  }

  function counting(key, n, arr, mid, count) {
    let low = 0;
    let high = n - 1;
    if (low > high) {
      return;
    }
    let mid = Math.floor();
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`4
      1 2 3 4
      3
      0 5
      1 3
      0 3`);
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
