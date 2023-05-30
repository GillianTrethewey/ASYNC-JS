const forEach = (arr, cb) => {
  arr.forEach((item, i, array) => {
    cb(item, i);
  });
};

const delays = [200, 500, 0, 350];

const delayLog = (delayTime, i) => {
  setTimeout((delayTime) => {
    console.log("printing element " + i);
  }, delayTime);
};

forEach(delays, delayLog);
