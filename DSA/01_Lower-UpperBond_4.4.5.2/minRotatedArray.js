function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  function minNo(n, arr) {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (arr[mid] < arr[mid - 1] || arr[mid] == arr[high]) {
        high--;
        return arr[mid];
      } else if (arr[mid] > arr[mid + 1]) {
        return arr[mid + 1];
      }

      if (arr[low] < arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
      // if (arr[mid] == arr[high]) {
      //   high--;
      // } else if (arr[mid] == arr[low]) {
      //   low++;
      // }
    }
  }
  console.log(minNo(n, arr));
}

if (process.env.USERNAME === "coder") {
  runProgram(`7
  1 1 1 1 1 1 1`);
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
