const limitedInterval = (callback, wait, limit) => {
  let waittime = wait;
  while (waittime < limit) {
    setTimeout(function () {
      callback();
    }, wait);
    waittime += wait;
  }
};

limitedInterval(() => console.log("repeating"), 100, 550); // should log 'repeating' once per 100 ms, five times.
