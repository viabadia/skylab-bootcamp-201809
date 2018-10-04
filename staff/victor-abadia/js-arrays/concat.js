
//simple

function concat(arr, arr2) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return (result);
}


// "Pro"
/* 
function concat(arr, arr2) {

    for (var i=0; i < arr2.length; i++) arr.push(arr2[i]);
    return arr;
}  */