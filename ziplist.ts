function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const zipped: unknown[] = [];
  const minLength = Math.min(list1.length, list2.length);

  for (let i = 0; i < minLength; i++) {
    zipped.push(list1[i], list2[i]);
  }
  return zipped;
}

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  const zipped: unknown[] = [];
  list1.forEach((element, index) => {
    zipped.push(element, list2[index]);
  });
  return zipped;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
