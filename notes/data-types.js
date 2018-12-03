// numbers
// integers, floats, etc.
12;
12.34;

// strings
'string';
"string";
`string`;

// booleans
true;
false;

// arrays
// can contain any type
[];
[1, 2, 3, 4];
var array = [1, 'string', true, [1, 2, 3]];

array[0]; // 1
array[3]; // [1, 2, 3]
array[3][1]; // 2
array[0] = 'hello world';
array[5]; // undefined
array[10] = 'lol'; // works!

// objects
// key-value pairs
{};
var company = {
    name: 'channelfix',
    address: 'mandaue city',
    isOpen: false,
    officeHours: {
        open: 8,
        close: 5
    },
    employees: [
        'arnelle',
        'aldrin'
    ]
};

company.name; // 'channelfix'
company.address; // 'mandaue city'
company['name']; // 'channelfix'
company['address']; // 'mandaue city'

var key = 'name';
company[key]; // 'channelfix'

company.isOpen; // undefined
company.isOpen = false;

company.officeHours.close; // 5

// others
null;
undefined;

// functions
function functionName(param1, param2) {
    // do anything
    return 'the result';
}

var functionName = function(param1, param2) {
    // do anything
    return 'the result';
};

functionName(1, 'hello');
