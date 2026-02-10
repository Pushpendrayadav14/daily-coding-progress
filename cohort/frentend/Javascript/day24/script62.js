
// # Day 63 — Project Scenarios

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---
// async function getWeather(city){

//     try{
//         let apikey=`b92e57938eaebc6ded1fcf3a2f5b4bc3`;
//         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
//         if(!raw.ok){
//             throw new Error("Somthing wrong you insert wrong city name....")
//         }
//         let realdata=await raw.json();
//         console.log(`The Temprature of ${realdata.name} city is ${Math.floor((realdata.main.temp)-273.15)}°C`);
//         if(((realdata.main.temp)-273.15)<0){
//             console.warn(`Too cold out there....${Math.floor((realdata.main.temp)-273.15)}°C`);
//         }else if(((realdata.main.temp)-273.15)>32){
//             console.warn(`To hot out there...${Math.floor((realdata.main.temp)-273.15)}°C`);
//         }else{
//             console.log(`Its an normal Temprature .... ${Math.floor((realdata.main.temp)-273.15)}°C`);
//         }

//     }catch(err){
//         console.log(err.message);

//     }

// }  
// getWeather('barwani');



// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---
const users=["harsh@female.com","prasant@semale.com","jayash@temale.com","pratik@unimale.com","ranvir@profinel.com"];

function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time=Math.floor(Math.random()*5);
        setTimeout(()=>{
            let probability=Math.floor(Math.random()*10);
            if(probability<=5){
                resolve("Email succes fullly send....");
            }else{
                reject("Email is not send....");
            }
        },time*1000);
    })
}
async function sendEmails(userlist){
    let allresponses = userlist.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        })
    });
    let ans = await Promise.all(allresponses);
    ans.forEach(function (status){
        console.log(status);
    });

}
sendEmails(users);

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.
// # Day 63 — Project Scenarios
