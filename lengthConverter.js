// Convert length from KM to miles

let km = 10;
function convertor() {
  const milesPerKilometer = 0.621371;
  let b = km * milesPerKilometer;
  return b;
}
console.log(km + "Km is equal to :" + convertor() + "miles");
