function map(arr, callback) {
    var result = [];
    for (var i=0; i<arr.length; i++) result.push(callback(arr[i]));
    return result;
}