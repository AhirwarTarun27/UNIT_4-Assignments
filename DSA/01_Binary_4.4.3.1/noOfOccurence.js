function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let a = input[1].trim().split(" ").map(Number);

  function noOfOccurence(n, a, k, low, high) {
    let count = 0;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (a[mid] == k) {
        count++;
      } else if (k > a[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return count;
  }
  console.log(noOfOccurence(n, a, k, 0, n - 1));
}

if (process.env.USERNAME === "coder") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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
