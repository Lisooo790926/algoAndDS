loadScript("/article/promise-chaining/one.js")
  .then((script) => loadScript("/article/promise-chaining/two.js"))
  .then((script) => loadScript("/article/promise-chaining/three.js"))
  .then(function (script) {
    one();
    two();
    three();
  });
