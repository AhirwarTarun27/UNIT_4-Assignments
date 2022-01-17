function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [n, p, a] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  party(n, p, a, arr);
}

function party(n, p, a, arr) {
  let sum = 0;

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < p; i++) {
    sum += arr[i];
  }
  if (sum <= a) {
    console.log("Party");
  } else {
    console.log("Sad");
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`5 3 24
  6 4 21 20 15`);
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
