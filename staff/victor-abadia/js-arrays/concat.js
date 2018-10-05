
//simple

function concat(arr, arr2) {
    if (!(arr instanceof Array)) throw Error(arr + 'is not an array');
    if (!(arr2 instanceof Array)) throw Error('your second argument is not array');
    if (arr.length === 0) throw Error('the first array contains nothing');
    if (arr2.length === 0) throw Error('the second array contains nothing');

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