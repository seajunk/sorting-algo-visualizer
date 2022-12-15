
function bubbleSort(arr) {
    var r = []
    var clone = arr.slice();
    var clone2 = clone.slice()
    r.push(clone2)

    for(var i = 0; i < clone.length - 1; i++){
        for(var j = 0; j < clone.length - i - 1; j++){
            if(clone[j] > clone[j + 1]){
                [clone[j], clone[j + 1]] = [clone[j + 1], clone[j]]
                clone2 = clone.slice()
                r.push(clone2)
            }
        }
    }
    return r;
}

export default bubbleSort;