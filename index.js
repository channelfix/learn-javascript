// var document = {
//     addEventListener: function() {

//     }
// };

var button = document.querySelector('button#the-button');

button.addEventListener('mouseenter', function() {
    // MAKE BACKGROUND COLOR RED
    // 1. Get access body
    var body = document.querySelector('body');

    // 2. Add 'red-bg' class
    body.classList.add('red-bg');
});

button.addEventListener('mouseleave', function() {
    // MAKE BACKGROUND COLOR RED
    // 1. Get access body
    var body = document.querySelector('body');

    // 2. Remove 'red-bg' class
    body.classList.remove('red-bg');
});

// var input = document.querySelector('input');

// input.addEventListener('keydown', function(event) {
//     switch (event.key) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log('A VOWEL WAS PRESSED!!!');
//     }
// });

// function mousemoveCallback(event) {
//     console.log(event.pageX, event.pageY);
// }

// document.addEventListener('mousemove', mousemoveCallback);
// document.removeEventListener('mousemove', mousemoveCallback);
