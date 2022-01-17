function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  function sortedRotated(n, k, arr) {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      let mid = Math.floor(low + high - low / 2);
      if (arr[mid] == k) {
        return mid;
      }
      if (arr[low] < arr[mid]) {
        if (k >= arr[low] && k < arr[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else {
        if (k > arr[mid] && k <= arr[high]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }
    return -1;
  }

  console.log(sortedRotated(n, k, arr));
}

if (process.env.USERNAME === "coder") {
  runProgram(`5 8
  3 4 5 1 2`);
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
