
// # Day 60 — Exercises

// ---

// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// function afterDelay(time,cb){
//     setTimeout(function(){
//         cb();
//     },time);

// }
// afterDelay(3000,function(){
//     console.log("callback executed");
// })


// ---

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// ---
// function getuser(username,cb){
//     console.log("getting user details.....");
//     setTimeout(()=>{
//         cb({id:123,username:username});
//     },1000);

// }
// function getUserPosts(userId,cb){
//      console.log("getting user post.....");
//     setTimeout(
//         cb(["hello","good day","good bye"]),1000);
// }
// getuser("Pushpendra",function(data){
//     getUserPosts(data.id,function(allposts){
//         console.log(`Username: ${data.username} and userPosts: ${allposts}`)

//     });

// });

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---
// function loginuser(user,cb){
//     console.log("Logging in user......");
//     setTimeout(()=>{
//         cb({userid:123,username:user});
//     },1000);

// }

// function fetchPermissions(userid,cb){
//     console.log("fetching permissions of user......");
//     setTimeout(()=>{
//         cb(["read","write","delete"]);
//     },2000)

// }
// function loadDashboard(permission,cb){
//     console.log("Logging in user dashboard......");
//     setTimeout(()=>{
//         cb();
//     },3000)

// }

// //isko call back hell bhi bolte hai or promisses
// loginuser("pal",function(data){
//     fetchPermissions(data.id,function(permission){
//         loadDashboard(permission,function(){
//             console.log(" ☑️Dashboard Loaded");

//         });
//     });

// });


// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.
// Displaying Day 60 Question Sheet.md.



// BEGINNER LEVEL (4 Scenarios)
// 🟢 Scenario 1: Greeting After Name Fetch

// Situation:
// You have a function that gets a user’s name.
// After the name is fetched, you want to greet the user.

// Task:
// Create a function getName(callback)
// Inside it, return "Pal" after 1 second
// Call the callback with the name
// Print: Hello Pal
// Practice Focus:
// ✔ Passing a function as an argument
// ✔ Calling it later

// function getName(name,cb){
//     setTimeout(()=>{
//         cb({name:name,id:1234});
//     },2000);
// }


// getName("pal",function (data){
//     console.log(`Hello ${data.name} sir Wellcome to over prectise questions`);

// });

// 🟢 Scenario 2: Calculator with Callback

// Situation:
// You want a calculator function that doesn’t decide what to do with the result.

// Task:
// Create calculate(a, b, callback)
// Do a + b
// Pass result to callback
// Callback should print the result
// Practice Focus:
// ✔ Reusability using callbacks
// function calculate(a,b,cb){
//     setTimeout(()=>{
//         cb((a+b));
//     },1000)

// }
// calculate(12,21,function(data){
//     console.log(`the sum of a and b is:${data}`);
// });


// 🟢 Scenario 3: Delayed Message

// Situation:
// You want to show a message after 2 seconds.
// Task:
// Create showMessage(callback)
// Use setTimeout
// Callback prints: "This is a delayed message"
// Practice Focus:
// ✔ Understanding async execution
// function showMessage(cb){
//     setTimeout(()=>{
//         cb();
//     },2000)
// }
// showMessage(function (){
//     console.log("this is delayed message....delayes by 2 sec......");
// });

// 🟢 Scenario 4: Order Confirmation

// Situation:
// An order is placed.
// Once placed, confirmation message should be shown.

// Task:
// Function placeOrder(callback)
// After 1 second, call callback
// Callback prints "Order Confirmed"
// Practice Focus:
// ✔ Event-like behavior
// function placeOrder(cb){
//     setTimeout(()=>{
//         cb();
//     },1500);
    
// }
// placeOrder(function(){
//     console.log("oder is Confirmed......1.5 sec");

// })


// 🟡 INTERMEDIATE LEVEL (4 Scenarios)
// 🟡 Scenario 5: Fetch User → Then Fetch Orders

// Situation:
// You first fetch a user, then fetch their orders.
// Task:
// getUser(callback) → returns { id: 1, name: "Pal" }
// getOrders(userId, callback) → returns ["Laptop", "Mouse"]
// Print orders only after user is fetched
// Practice Focus:
// ✔ Callback dependency
// ✔ Execution order control
 function getuser(cb){
    setTimeout(()=>{
        cb({ id: 1, name: "Pal" });
    },1500)
 }
function getOrders(id,cb){
    setTimeout(()=>{
        cb(["Laptop", "Mouse"])
    },2000)
}
getuser(function(data){
    getOrders(data.id,function (order){
        setTimeout(()=>{
            console.log(` the oder of ${data.name} is: ${order}`)
        },1000)
    })
})



// 🟡 Scenario 6: Login Validation Flow

// Situation:
// User logs in → credentials checked → dashboard shown.

// Task:

// login(username, password, callback)

// If valid, call callback

// Callback prints "Welcome to Dashboard"

// Practice Focus:
// ✔ Business logic separation
// ✔ Real app flow

// 🟡 Scenario 7: File Upload Simulation

// Situation:
// File upload takes time.
// After upload, success message should appear.

// Task:

// uploadFile(fileName, callback)

// Simulate 2 sec delay

// Callback prints "File uploaded successfully"

// Practice Focus:
// ✔ Async task completion handling

// 🟡 Scenario 8: Callback with Error

// Situation:
// Sometimes an API fails.

// Task:

// fetchData(callback)

// If success → callback(null, data)

// If failure → callback("Error occurred", null)

// Handle both cases

// Practice Focus:
// ✔ Error-first callback pattern (Node.js style)

// 🔴 ADVANCED LEVEL (2 Scenarios)
// 🔴 Scenario 9: Callback Hell Simulation 😈

// Situation:
// User signs up → profile created → email sent.

// Task:

// signup(callback)

// createProfile(callback)

// sendEmail(callback)

// Chain them using callbacks only

// Practice Focus:
// ✔ Understanding callback hell
// ✔ Why Promises exist

// 🔴 Scenario 10: Rate-Limited API Calls

// Situation:
// You must make 3 API calls in order, each after the previous finishes.

// Task:

// apiCall1(cb)

// apiCall2(cb)

// apiCall3(cb)

// Final callback prints "All API calls completed"

// Practice Focus:
// ✔ Flow control
// ✔ Sequential async logic