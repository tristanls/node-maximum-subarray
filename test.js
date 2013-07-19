/*

test.js - maximum subarray test

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

var maximumSubarray = require('./index.js');

var test = module.exports = {};

test['maximum subarray of [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7] is [18,20,-7,12]'] = function (test) {
    test.expect(1);
    test.deepEqual(maximumSubarray([13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]), [18,20,-7,12]);
    test.done();
};

test['maximum subarray of [13,-3,-25,20,-3,-16,-23] is [20]'] = function (test) {
    test.expect(1);
    test.deepEqual(maximumSubarray([13,-3,-25,20,-3,-16,-23]), [20]);
    test.done();
};

test['maximum subarray of [18,20,-7,12,-5,-22,15,-4,7] is [18,20,-7,12]'] = function (test) {
    test.expect(1);
    test.deepEqual(maximumSubarray([18,20,-7,12,-5,-22,15,-4,7]), [18,20,-7,12]);
    test.done();
};

test['maximum subarray of [20,-7,12,-5,-22,15,-4,7] is [20,-7,12]'] = function (test) {
    test.expect(1);
    test.deepEqual(maximumSubarray([20,-7,12,-5,-22,15,-4,7]), [20,-7,12]);
    test.done();
};

test['maximum subarray of [-7,12,-5,-22,15,-4,7] is [15,-4,7]'] = function (test) {
    test.expect(1);
    test.deepEqual(maximumSubarray([-7,12,-5,-22,15,-4,7]), [15,-4,7]);
    test.done();
};

test['maximum subarray of [1] is [1]'] = function (test) {
    test.expect(1);
    test.deepEqual(maximumSubarray([1]), [1]);
    test.done();
};

test['maximum subarray of [] is []'] = function (test) {
    test.expect(1);
    test.deepEqual(maximumSubarray([]), []);
    test.done();
};