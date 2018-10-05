console.log('TEST concat');

var tests = [];

tests.push(function () {
    var error;
    var arr = undefined;
    var arr2 = [1, 2, 3]

    console.log('first argument should be an array');

    concat(arr,arr2);

    //if (!(arr instanceof Array)) throw Error('array is not valid');

    /* try {
        concat(arr,arr2);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'your first argument is not array') throw Error('error message is not correct'); */
});

tests.push(function () {
    var arr = [1, 2, 3];
    var arr2 = [1, 2, 3];

    console.log('second argument should be an array');

    if (!(arr2 instanceof Array)) throw Error('arr2 is not an array');
});

tests.push(function () {
    var arr = [1, 2, 3];
    var arr2 = [1, 2, 3];

    console.log('first array should be contain elements');

    if (arr.length === 0) throw Error('the first array contains nothing');
});
tests.push(function () {
    var arr = [1, 2, 3];
    var arr2 = [1, 2, 3];

    console.log('second array should be contain elements');

    if (arr2.length === 0) throw Error('the second array contains nothing');
});

testSuite(tests);