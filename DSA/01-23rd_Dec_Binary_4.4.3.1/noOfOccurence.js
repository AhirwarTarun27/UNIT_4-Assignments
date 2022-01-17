function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [n, key] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  function noOfOccurence(n, arr, key) {
    function ub(n, arr, key) {
      let low = 0;
      let high = n - 1;

      while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (key < arr[mid]) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      if (arr[high] > key) {
        return high;
      } else if (arr[low] > key) {
        return low;
      } else {
        return 0;
      }
    }

    function lb(n, arr, key) {
      let low = 0;
      let high = n - 1;

      while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (key <= arr[mid]) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      if (arr[low] >= key) {
        return low;
      } else if (arr[high] >= key) {
        return high;
      }
    }

    return (n = ub(n, arr, key) - lb(n, arr, key));
  }
  console.log(noOfOccurence(n, arr, key));
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
