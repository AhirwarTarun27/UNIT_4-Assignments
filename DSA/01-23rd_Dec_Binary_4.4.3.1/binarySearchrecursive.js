function runProgram(input) {
  // Write code here

  var input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  //   console.log(n, k);
  //   console.log(arr);

  function binarySearchRecursive(key, arr, low, high) {
    if (low > high) {
      return -1;
    }
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == key) {
      return 1;
    }
    if (key > arr[mid]) {
      return binarySearchRecursive(key, arr, mid + 1, high);
    } else {
      return binarySearchRecursive(key, arr, low, mid - 1);
    }
  }
  console.log(binarySearchRecursive(k, arr, 0, n - 1));
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
