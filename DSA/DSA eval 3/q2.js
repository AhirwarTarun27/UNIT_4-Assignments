function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];
  let checkin = input[1].trim().split(" ").map(Number);
  let handbag = input[2].trim().split(" ").map(Number);
  //   console.log(checkin);
  //   console.log(handbag);

  airline(n, checkin, handbag);
}

function airline(n, checkin, handbag) {
  for (let i = 0; i < n; i++) {
    if (checkin[i] <= 15 && handbag[i] <= 7) {
      console.log("Boarding");
    } else {
      console.log("Stop");
    }
  }
}

if (process.env.USERNAME === "coder") {
  runProgram(`4
  12 14 15 6
  8 5 7 4`);
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
