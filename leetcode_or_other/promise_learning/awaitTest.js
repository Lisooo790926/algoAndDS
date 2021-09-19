// async function test1() {
//   console.log("test1 function ");
//   await wait(2000);
//   console.log("after test1 wait");
//   return "hello world test1";
// }

// function wait(ms) {
//   return new Promise((r) => {
//     console.log(ms + " test waitting");
//     // use normal function instead of resolve
//     setTimeout(() => console.log("normal wait"), ms);
//   });
// }

async function test2() {
  console.log("test2 function ");
  let result = await wait2(2000);
  return result;
}

function wait2(ms) {
  return new Promise((resolve) => {
    console.log(ms + " test2 waitting");
    // use resolve
    setTimeout(() => resolve("hello world from resolve"), ms);
  });
}

// test1().then((result) => console.log(result));
test2().then((result) => console.log(result));
