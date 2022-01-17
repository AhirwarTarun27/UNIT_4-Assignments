function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  function binarySearchIterate(n, k, arr) {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (arr[mid] == k) {
        return 1;
      } else if (k > arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
  console.log(binarySearchIterate(n, k, arr));
}

if (process.env.USERNAME === "coder") {
  runProgram(`5 0
  2 -2 0 3 4`);
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
