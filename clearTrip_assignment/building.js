let system = {};

function AddBuilding(buil) {
  system[buil] = {};
  //   console.log((system[buil] = {}));
  console.log(`Added building ${buil} into the system.`);
}

function AddFloor(build, floor) {
  if (system[build]) {
    system[build][floor] = {};

    console.log(`Added floor ${floor} in building ${build}`);
    // console.log(system);
  } else {
    console.log("building is not present");
  }
}

function AddRoom(build, floor, conf) {
  if (system[build][floor]) {
    system[build][floor][conf] = {};
    console.log(
      `Added conference room ${conf} in ${floor} of building ${build}`
    );
    console.log(system);
  } else {
    console.log("something went wrong");
  }
}

function runProgram(input) {
  // Write code here

  input = input.trim();

  if (input == "ADD BUILDING b1") {
    let buil = input.trim().split(" ")[2];
    // console.log(buil);

    AddBuilding(buil);
  }

  if (input === "ADD FLOOR b1 2") {
    let build = input.trim().split(" ")[2];

    let floor = input.trim().split(" ")[3];

    AddFloor(build, floor);
  }

  if (input === "ADD CONFROOM c1 1 b1") {
    let conf = input.trim().split(" ")[2];
    let floor = input.trim().split(" ")[3];
    let build = input.trim().split(" ")[4];

    AddRoom(build, floor, conf);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`ADD CONFROOM c1 1 b1`);
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
