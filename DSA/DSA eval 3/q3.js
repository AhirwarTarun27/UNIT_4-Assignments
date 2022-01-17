function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [k, n] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  function truck(k, n, arr) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum = sum + arr[i];
    }
    if (sum >= k) {
      console.log(`${Math.min(...arr) + " " + Math.max(...arr)}`);
      // console.log(Math.min(...arr));
    } else {
      console.log(-1);
    }
  }
  truck(k, n, arr);
}

if (process.env.USERNAME === "coder") {
  runProgram(`3 3
  1 2 3`);
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
