// Example 1 -  A Quick Overview of Async Functions
console.log("\nSECTION 1 - A Quick Overview of Async Functions");
// No Code

// Example 2 -  The Async Keyword
console.log("\nSECTION 2 - The Async Keyword");

async function greet() {
  return "Hello!";
}
greet().then((val) => {
  console.log("Promise resolved with: ", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "x and y must be numbers!";
  }
  return x + y;
}
console.log(add("e", 5));
console.log(add(6, 5));

add(6, 7)
  .then((val) => {
    console.log("Promise resolved with: ", val);
  })
  .catch((err) => {
    console.log("Promise rejected with: ", err);
  });

// Example 3 -  The Await Keyword
console.log("\nSECTION 3 - The Await Keyword");

//async function getPlanets() {
//  const res = await axios.get("https://swapi.info/api/planets999");
//  console.log(res.data);
//}
//getPlanets().catch((err) => {
//  console.log("In Catch");
//  console.log(err);
//});

// Example 4 -  Error Handling in Async Functions
console.log("\nSECTION 4 - Error Handling in Async Functions");

async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.info/api/planets");
    console.log(res.data);
  } catch (e) {
    console.log("In Catch!");
    console.log(e);
  }
}
getPlanets();

// Example 5 -  Multiple Awaits
console.log("\nSECTION 5 - Multiple Awaits");

// Example 6 -  Parallel Vs. Sequential Requests
console.log("\nSECTION 6 - Parallel Vs. Sequential Requests");

// Example 7 -  Refactoring with Promise.all
console.log("\nSECTION 7 - Refactoring with Promise.all");
