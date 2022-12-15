

function insertionSort(bruh){
    if(!Array.isArray(bruh)){
        return;
    }

    var arr = bruh.slice()
    var clone = arr.slice()
    var r = [];
    r.push(clone)

    for(var i = 0; i < arr.length; i++){
        var key = arr[i];
        var j = i;
        while(i > 0 && arr[j - 1] > key){
            arr[j] = arr[j - 1] 
            arr[j - 1] = key;//ineffecient in practice but needed for visualization
            j = j - 1;
            clone = arr.slice()
            r.push(clone)
        }
        // arr[j] = key;//efficient in practice but doesnt visualize properly 
    }
    return r;
}

export default insertionSort;
