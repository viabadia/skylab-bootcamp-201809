
function join(arr, separator) {
    var result = "";
    for (i = 0; i < arr.length; i++) {
        result += (arr.length - 1 != i) ? arr[i] + separator : arr[i];
    }
    return result;
}

//simple
/*

function join(arr, separator) {
    var result = "";
    for (i = 0; i < arr.length; i++) {
        result += arr[i];
        if (arr.length - 1 != i) {

            result += separator;
        }
    }
    return result;
}

*/