//callback function

function multiplication(x, y , z, callback){
    document.write(`The multiplication of ${x}, ${y}, and ${z} is ${x*y*z}.` +"<br>");
    callback();
}

multiplication(5,10,20);


//Array SUM

let arrSum = [33,3333,333,33333,3];
let sum = arrSum.reduce(function(a, b) { return a + b; }, 0);
console.log(sum);


//Array MINIMUM

let arrMin =[33,3333,333,33333,3];
console.log(Math.min(...arrMin));


//Array MAXIMUM

let arrMax =[33,3333,333,33333,3];
console.log(Math.max(...arrMax));

//foobar

let arr =[33,3333,333,33333,3];
function foobar (arr) {
    for(let i = 0; i < arr.length; i++) {
        if(((arr[i] % 3) == 0) && ((arr[i] % 7) == 0)) {
            arr[i] = "foobar";
        } else if((arr[i] % 3) == 0) {
            arr[i] = "foo";
        } else if((arr[i] % 7) == 0) {
            arr[i] = "bar";
        }
    }
    return arr;
}
console.log("foobar: " + foobar(arr));

//Equal Letters


console.log(arr("tall", "small"));

function arr (str1, str2) {
    console.log(str1);
    console.log(str2);

    let equalLetters = [];
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            equalLetters.push(arr1[i]);
            arr2[i] = "";
        }
    }
    console.log("equalLetters: " + equalLetters);
    return (equalLetters.length / (str1.length + str2.length)) * 100 + "%"
}


