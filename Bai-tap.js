//b1: khai bao 1 cái array rỗng
var array = [];

//ham getelement
function getElement(id) {
    return document.getElementById(id);
}

// hàm lấy số liệu người dùng push vô mảng
function getNumber() {
    var inputNum = +getElement("inputNum").value;

    array.push(inputNum);
    getElement("txtArray").innerHTML = array;
};

// hàm reset số
function removeNumber() {
    array.splice(0)
    getElement("txtArray").innerHTML = array;
};

//#1. Tổng số dương---------------------------------------
function sumPositive() {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) sum += array[i];
    }
    getElement('txtSum').innerHTML = "Tổng số dương: " + sum;
};

//#2. Đếm số dương---------------------------------------
function countPositive() {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        count++;
    }
    getElement('txtCount').innerHTML = "số dương: " + count;
};

//#3. Tìm số nhỏ nhất---------------------------------------
function findMin() {
    var min = array[0]
    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    getElement('txtMin').innerHTML = "Số nhỏ nhất: " + min;
};

//#4. Tìm số dương nhỏ nhất---------------------------------------
function findMinPos() {
    var minPosArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            minPosArray.push(array[i]);
        }
    }
    if (minPosArray.length > 0) {
        var min = minPosArray[0];
        for (var j = 1; j < minPosArray.length; j++) {
            if (min > minPosArray[j]) {
                min = minPosArray[j];
            }
        }
        getElement('txtMinPos').innerHTML = "Số dương nhỏ nhất: " + min;
    }
    else {
        getElement('txtMinPos').innerHTML = "Không có số dương trong mảng!";
    }


};

//#5. Tìm số chẵn cuối cùng---------------------------------------
function findEven() {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            var lastEven = array[i]
        }
    }
    getElement('txtEven').innerHTML = "Số chẵn cuối: " + lastEven;
};

//#6. Đổi chỗ---------------------------------------
function changePosition() {
    var inputIndex1 = +getElement('inputIndex1').value;
    var inputIndex2 = +getElement('inputIndex2').value;

    var temp = array[inputIndex1];
    array[inputIndex1] = array[inputIndex2];
    array[inputIndex2] = temp;

    getElement('txtChangePos').innerHTML = array;
};

//#7. Sắp xếp tăng dần---------------------------------------
function sortIncrease() {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    getElement('txtIncrease').innerHTML = array;
};


//#8. Tìm số nguyên tố đầu tiên---------------------------------------
function checkPrime(num) {
    if (num < 2) return isPrime = false;
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};

function findPrime() {
    for (var i = 0; i < array.length; i++) {
        var isPrime = checkPrime(array[i]);
        if (isPrime) {
            var num = array[i]
            break;
        }
    }

    getElement('txtPrime').innerHTML = "Số nguyên tố đầu tiên: " + num;
};

// -----------------------------------------------------------
// khai báo mảng số thực
var floatArray = [];

function getFloat() {
    var inputFloat = +getElement('inputFloat').value;
    floatArray.push(inputFloat);
    getElement('txtFloatArray').innerHTML = floatArray;

};

function removeFloat() {
    floatArray.splice(0)
    getElement("txtFloatArray").innerHTML = floatArray;
};

//#9. Đếm số nguyên---------------------------------------
function findInt() {
    var count = 0;
    for (var i = 0; i < floatArray.length; i++) {
        if (Number.isInteger(floatArray[i])) {
            count++
        };

    }
    getElement('txtInt').innerHTML = "Số nguyên: " + count;
}

//#10. So sánh số lượng âm và dương---------------------------------------
function compareNum() {
    var positive = 0;
    var negative = 0;
    for (var i = 0; i < array.length; i++) {
        array[i] > 0 ? positive++ : negative++;
    }
    var rs = positive > negative ? "Số dương > số âm" : positive < negative ? "Số âm > số dương" : "Số dương = số âm";
    getElement('txtCompare').innerHTML = rs;
}