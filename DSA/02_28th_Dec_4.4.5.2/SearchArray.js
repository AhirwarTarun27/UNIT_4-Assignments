function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [n, key] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  function search(n, key, arr) {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (arr[mid] == key) {
        return mid;
      }
      if (arr[low] < arr[mid]) {
        if (key >= arr[low] && key < arr[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else {
        if (key > arr[mid] && key < arr[high]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }
    return -1;
  }
  console.log(search(n, key, arr));
}

if (process.env.USERNAME === "coder") {
  runProgram(`20 12
  18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12`);
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
