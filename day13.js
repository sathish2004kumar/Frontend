// Promise.all
console.log("script start");
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((res) => console.log("all resolved:", res))
  .catch((err) => console.log("error:", err));

// race
console.log("race start");
Promise.race([p1, p2, p3])
  .then((res) => console.log("race winner:", res))
  .catch((err) => console.log("error:", err));

// allSettled
console.log("allSettled start");
Promise.allSettled([p1, p2, p3]).then((result) => {
  console.log("allSettled result:", result);
});

