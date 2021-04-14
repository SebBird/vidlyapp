export function arrayFromRange(min, max) {
  let newArray = [];
  for (min; min <= max; min++) newArray.push(min);
  return newArray;
}
