const runInOrder = (funcArr, numArr) => {
  let time = 0;

  for (let i = 0; i < funcArr.length; i++) {
    time += numArr[i];
    setTimeout(funcArr[i], time);
  }
};

function sayHi() {
  console.log("hi");
}
function sayBye() {
  console.log("bye");
}
function sayHowdy() {
  console.log("howdy");
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
