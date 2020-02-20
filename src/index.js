
exports.min = function min (array) {
    if (array != undefined && array.length !=0) {
    let min = array[0];
    for (let item of array) {
        if (item < min) min = item;
    }
    return min;
}    
  return 0;
}

exports.max = function max (array) {
    if (array != undefined && array.length !=0) {
    let max=array[0];
    for (let item of array) {
        if (item>max) max = item;
    }
    return max;
}    
  return 0;
}

exports.avg = function avg (array) {
    if (array != undefined && array.length !=0) {
    let sum=0;
    for (let item of array) {
        sum+=item;
    }
  return sum/array.length;
}
return 0;
}
