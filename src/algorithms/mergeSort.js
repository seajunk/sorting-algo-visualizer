function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  var r = [];

  function innerMergeSort(arr) {
    r.push(arr);
    if (arr.length < 2) {
      //   r.push(arr);
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = innerMergeSort(arr.slice(0, mid));
    let right = innerMergeSort(arr.slice(mid));
    r.push(merge(left, right));

    return merge(left, right);
  }

  innerMergeSort(arr);

  return r;
}

function merge(A, B) {
  let C = [];

  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      C.push(A[i]);
      i++;
    } else {
      C.push(B[j]);
      j++;
    }
  }

  if (i < A.length) {
    while (i < A.length) {
      C.push(A[i]);
      i++;
    }
  }
  if (j < B.length) {
    while (j < B.length) {
      C.push(B[j]);
      j++;
    }
  }

  return C;
}

export { mergeSort };
