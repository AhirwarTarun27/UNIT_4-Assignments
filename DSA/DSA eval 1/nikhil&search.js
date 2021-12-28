function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let nQ = +input[2];
  let line = 3;
  let query = [];
  let key = [];
  for (let i = 0; i < nQ; i++) {
    let arr2 = input[line++].trim().split(" ").map(Number);

    query.push(arr2[0]);
    key.push(arr2[1]);
  }
  function lb(n, arr, query, key) {
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
    } else {
      return 0;
    }
  }
  function ub(n, arr, query, key) {
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
    if (arr[low] > key) {
      return low;
    } else if (arr[high] > key) {
      return high;
    } else {
      return 0;
    }
  }

  // console.log(lb(n, arr, query, 5));
  // console.log(ub(n, arr, query, 3));

  for (let i = 0; i < nQ; i++) {
    if (query[i] == 0) {
      console.log(lb(n, arr, query[i], key[i]));
    } else if (query[i] == 1) {
      console.log(ub(n, arr, query[i], key[i]));
    }
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`4
  1 2 3 4
  3
  0 5
  1 3
  0 3`);
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
