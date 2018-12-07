// STEPS:
// 1. Get reference to button
// var button = document.querySelector('button');

// 2. Add click listener to button
// button.addEventListener('click', function() {
//     // 3. Get reference to h1
//     var h1 = document.querySelector('h1');

//     // 4. Remove h1
//     h1.remove();
// });

// STEPS:
// 1. Get reference to button
// var button = document.querySelector('button');

// // 2. Add click listener to button
// button.addEventListener('click', function() {
//     // 3. Create h2 element
//     var h2 = document.createElement('h2');

//     // 4. Add text to h2 element
//     h2.textContent = 'Hello, JavaScript!';

//     // 5. Insert h2 element to page
//     // 5.1 Get reference to body
//     var body = document.querySelector('body');

//     // 5.2 Insert
//     body.appendChild(h2);
// });

// STEPS:
// 1. Get reference to button
var button = document.querySelector('button');

// 2. Add click listener to button
button.addEventListener('click', function() {
    // 3. Get reference to img
    var img = document.querySelector('img');

    // 4. Change img src attribute
    img.src = 'https://images.unsplash.com/photo-1544129564-b07b639606bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
});
