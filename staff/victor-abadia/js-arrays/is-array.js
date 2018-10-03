function isArray(arr)  {
    try {
        arr.push('hello')
        return true;
    } catch (error) {
        return false;
    }
}

/*

function isArray(arr)  {
    return arr instanceof Array;
}

*/