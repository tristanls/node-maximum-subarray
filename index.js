/*

index.js - maximum subarray

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var maximumSubarray = module.exports = function maximumSubarray (array) {
    // var result = findMaximumSubarray(array);
    var result = linearMaximumSubarray(array);
    return array.slice(result.low, result.high + 1);
};

var linearMaximumSubarray = function linearMaximumSubarray (array) {
    var maxEndingHere = 0, maxSoFar = 0, low = 0, lowTemp = 0, high = 0;
    for (var i = 0; i < array.length; i++) {
        if (maxEndingHere < 0) {
            maxEndingHere = array[i];
            lowTemp = i;
        } else {
            maxEndingHere += array[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            low = lowTemp;
            high = i;
        }
    }
    return {low: low, high: high, sum: maxSoFar};
};

var findMaximumSubarray = function findMaximumSubarray (array, low, high) {
    low = (typeof low === "undefined") ? 0 : low;
    if (typeof high === "undefined") {
        high = array.length > 0 ? array.length - 1 : 0;
    }
    if (high == low) {
        return {low: low, high: high, sum: array[low]}
    } else {
        var mid = Math.floor((low + high) / 2);
        var leftResult = findMaximumSubarray(array, low, mid);
        var rightResult = findMaximumSubarray(array, mid + 1, high);
        var crossResult = findMaxCrossingSubarray(array, low, mid, high);
        if (leftResult.sum >= rightResult.sum 
            && leftResult.sum >= crossResult.sum) {
            return leftResult;
        } else if (rightResult.sum >= leftResult.sum
            && (rightResult.sum >= crossResult.sum)) {
            return rightResult;
        } else {
            return crossResult;
        }
    }
};

var findMaxCrossingSubarray = function findMaxCrossingSubarray (array, low, mid, high) {
    var maxLeft;
    var leftSum = -Infinity;
    var sum = 0;
    for (var i = mid; i >= low; i--) {
        sum = sum + array[i];
        if (sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }
    var maxRight;
    var rightSum = -Infinity;
    sum = 0;
    for (var j = mid + 1; j <= high; j++) {
        sum = sum + array[j];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = j;
        }
    }
    return {
        low: maxLeft,
        high: maxRight,
        sum: leftSum + rightSum
    };
};