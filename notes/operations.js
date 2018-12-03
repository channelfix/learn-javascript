// Numbers:
// Arithmetic stuff
+
-
*
/
%
Math.pow(2, 10);
Math.sin(); // .cos(), .tan()

// Strings:
'hello world'.split(' '); // ['hello', 'world']
'hello ' + 'world'; // 'hello world'
'hello'.toUpperCase();
'hello'.toLowerCase();
'hello'[0]; // 'h'
'hello'.charAt(0); // 'h'
'hello'.length; // 5

'hello' + 12; // 'hello12'
'0' + 12; // '012'

// Booleans
!false; // true
!true; // false

// Arrays
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = a.concat(b); // [1, 2, 3, 4, 5, 6]
a; // [1, 2, 3]
a.push(4); // [1, 2, 3, 4]
a.pop(); // [1, 2, 3]
a.pop(); // [1, 2]

a.unshift(0); // [0, 1, 2]
a.shift(); // [1, 2]

c; // [1, 2, 3, 4, 5, 6]
c.slice(1, 4); // [2, 3, 4]

c.indexOf(10); // -1, doesnt exist
c.indexOf(3); // 2
c.includes(10); // false
c.includes(3); // true

c.join(' '); // '1 2 3 4 5 6'

// Objects
var a = {
    name: 'channelfix'
};
var b = {
    address: 'mandaue city'
};
var c = Object.assign({}, a, b);
// c = {name: 'channelfix', address: 'mandaue city'}
// a = {name: 'channelfix'}

// Comparisons
==
<
<=
>=
>
!=

===
!==

1 == 1; // true
1 === 1; // true
'1' == 1; // true
'1' === 1; // false
