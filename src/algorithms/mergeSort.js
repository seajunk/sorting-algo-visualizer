function mergeOnce(arr) {
  var done = false;

  function mergeSort(arr, finished) {
    if (done) {
      return;
    }
    if (arr.length < 2) {
      done = finished;
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  }
}

function merge(A, B) {
  return;
}

export default mergeSort;
