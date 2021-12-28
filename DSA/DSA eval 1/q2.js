function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    unique(n, arr);
  }
}

function unique(n, arr) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    let key = arr[i];
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      let temp = obj[key];
      obj[key] = temp + 1;
    }
  }
  for (key in obj) {
    if (obj[key] == 1) {
      console.log(key);
    }
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
