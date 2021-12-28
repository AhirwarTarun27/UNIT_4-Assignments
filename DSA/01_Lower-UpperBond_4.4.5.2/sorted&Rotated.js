function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  function sortRot(n, arr) {
    let low = 0;
    let high = n - 1;
    let count = 0;

    while (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (arr[mid] > arr[low]) {
        count++;
        low = mid + 1;
      } else if (arr[mid] < arr[high]) {
      }
    }
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`6
  3 4 7 9 1 2`);
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
