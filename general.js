function getParameterByName(name) {
    var url = "edgefx.com?a=10&ab=20&c=";//window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results)
    return null;
    if (!results[2])
    return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

getParameterByName('a');

function objectVsArray(){
    var start = undefined,
        end = undefined,
        arr = null,
        obj = null;

    arr = [];
    arr['fruit'] = 'Apple';
    arr['fruit1'] = 'Apple';
    arr['fruit2'] = 'Apple';
    arr['fruit3'] = 'Apple';
    arr['fruit4'] = 'Apple';
    arr['fruit5'] = 'Apple';
    arr['fruit6'] = 'Apple';
    arr['fruit7'] = 'Apple';
    arr['fruit8'] = 'Apple';
    arr['fruit9'] = 'Apple';
    start = Date.now();
    console.log(arr['fruit5']);
    end = Date.now();
    console.log(`Array: ${end - start}`);

    obj = {};
    obj['fruit'] = 'Apple';
    obj['fruit1'] = 'Apple';
    obj['fruit2'] = 'Apple';
    obj['fruit3'] = 'Apple';
    obj['fruit4'] = 'Apple';
    obj['fruit5'] = 'Apple';
    obj['fruit6'] = 'Apple';
    obj['fruit7'] = 'Apple';
    obj['fruit8'] = 'Apple';
    obj['fruit9'] = 'Apple';
    start = Date.now();
    console.log(obj['fruit5']);
    end = Date.now();
    console.log(`Object: ${end - start}`);
}
objectVsArray();



var arr = [{
    'name': 'A1',
    'age': 27
}, {
    'name': 'A2',
    'age': 30,
}, {
    'name': 'A3',
    'age': 25
}, {
    'name': 'A3',
    'age': 25
}];


function getMaxValueFromArrayOfObjects(key, arr) {
    return Math.max.apply(null, arr.map(function(currentValue) {
        return currentValue[key];
    }))
}

function getUniqueValuesFromArrayOfObjects(key, arr) {
    return arr.map(function(currentValue) {
        return currentValue[key];
    }).filter(function(element, index, arr) {
        return index == arr.indexOf(element);
    });
}