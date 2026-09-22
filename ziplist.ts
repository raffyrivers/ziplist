function zipList<T, U>(list1: T[], list2: U[]): [T, U][] {
  const zipped: [T, U][] = [];
  const minLength = Math.min(list1.length, list2.length);

  for (let i = 0; i < minLength; i++) {
    zipped.push([list1[i], list2[i]]);
  }
  return zipped;
}

function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): [T, U][] {
  return list1.map((item, index) => [item, list2[index]]);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
