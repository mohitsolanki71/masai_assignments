let arrival = [600, 700, 850, 1050, 1200, 1700];
let departure = [800, 900, 1100, 1230, 1900, 2200];
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
