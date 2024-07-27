// Task-1

function outer() {
  let username = "prshntshrmma";
  function inner() {
    console.log("inner : " + username);
  }

  return inner;
}

const func = outer();

func();

// Task-2

function createCounter() {
  let count = 0;

  function increment() {
    count++;
  }

  function getValue() {
    return count;
  }

  return { increment, getValue };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getValue()); 
