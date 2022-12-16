function selectionSort(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  var clone = arr.slice();
  var r = [];
  r.push(clone.slice());

  for (var i = 0; i < clone.length; i++) {
    let min = i;
    for (var j = i; j < clone.length; j++) {
      if (clone[j] < clone[min]) {
        min = j;
      }
    }
    [clone[min], clone[i]] = [clone[i], clone[min]];
    r.push(clone.slice());
  }
  return r;
}

export default selectionSort;
