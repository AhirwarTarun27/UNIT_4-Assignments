function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  function lowerBond(n, k, arr) {
    let low = 0;
    let high = n - 1;

    while (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (k < arr[mid]) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    if (arr[low] > k) {
      return low;
    } else if (arr[high] > k) {
      return high;
    } else {
      return -1;
    }
  }

  console.log(lowerBond(n, k, arr));
}

if (process.env.USERNAME === "coder") {
  runProgram(`10 3
  0 2 4 4 5 5 7 7 9 10`);
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
