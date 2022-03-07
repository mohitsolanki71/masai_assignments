let arrival = [900, 940, 950, 1100, 1500, 1800];
let departure = [910, 1200, 1120, 1130, 1900, 2000];
let n = arrival.length;

function totalPlatform(n, arrival, departure) {
  // first sort arrival time and departure time

  arrival = arrival.sort(function (a, b) {
    return a - b;
  });
  departure = departure.sort(function (a, b) {
    return a - b;
  });

  let currentRequirement = 1;
  let totalPlatform = 1;

  // first is used for arrival and second is used for departure
  let first = 1;
  let second = 0;

  while (first < n && second < n) {
    if (arrival[first] <= departure[second]) {
      currentRequirement++;
      first++;
    } else if (arrival[first] > departure[second]) {
      currentRequirement--;
      second++;
    }

    if (currentRequirement > totalPlatform) {
      totalPlatform = currentRequirement;
    }
  }

  return totalPlatform;
}

console.log(totalPlatform(n, arrival, departure));
