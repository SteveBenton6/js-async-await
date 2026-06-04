// Example 1 -  Intro to AJAX
console.log("\nSECTION 1 - Intro to AJAX");
// No Code

// Example 2 -  JSON & XML
console.log("\nSECTION 2 - JSON & XML");
// No Code

// Example 3 -  XMLHttpRequests: The Basics
console.log("\nSECTION 3 - XMLHttpRequests: The Basics");

const myReq = new XMLHttpRequest();
myReq.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(`Joke: ${data.joke}`);
});
myReq.addEventListener("error", function (err) {
  console.log("Error", err);
});
myReq.open("GET", "https://icanhazdadjoke.com/", true);
myReq.setRequestHeader("Accept", "application/json");
myReq.send();

//const firstReq = new XMLHttpRequest();
//firstReq.addEventListener("load", () => {
//  console.log("It Worked!");
//});
//firstReq.addEventListener("error", () => {
//  console.log("Error!");
//});
//firstReq.open("GET", "http://swapi.dev/api/planets", true);
//firstReq.setRequestHeader("Accept", "application/json");
//firstReq.send();
//console.log("Request Sent!");

// Example 4 -  XMLHttpRequests: Chaining Requests
console.log("\nSECTION 5 - XMLHttpRequests: Chaining Requests");
// No Code
// API Not Working

// Example 5 -  A Better Way: Fetch!
console.log("\nSECTION 6 - A Better Way: Fetch!");

fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => {
    if (response.ok)
      response.json().then((data) => {
        console.log(data);
      });
  })
  .catch((err) => {
    console.log("Something went wrong with Fetch!");
    console.log(err);
  });

// Example 6 -  Chaining Fetch Requests
console.log("\nSECTION 6 - Chaining Fetch Requests");
// No Code
// API Not Working

// Example 7 -  Refactoring Fetch Chains
console.log("\nSECTION 7 - Refactoring Fetch Chains");
// No Code
// API Not Working

// Example 8 -  An Even Better Way: Axios
console.log("\nSECTION 8 - An Even Better Way: Axios");
axios
  .get("https://swapi.info/api/planets")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log("In Catch Callback!!");
    console.log(err);
  });

// Example 9 -  Sequential Axios Requests
console.log("\nSECTION 9 - Sequential Axios Requests");

axios
  .get("https://swapi.info/api/films")
  .then(({ data }) => {
    console.log(data);
    for (let film of data) console.log(film.title);
  })
  .catch((err) => {
    console.log("In Catch Callback!!");
    console.log(err);
  });
