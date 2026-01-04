const scrollDiv = document.getElementById("scrollDiv");

//scrollDiv.addEventListener("scroll", () => {
//  console.log("Scroll position:", scrollDiv.scrollTop);
//});

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const logScroll = () => {
  console.log("Throttled scroll position:", scrollDiv.scrollTop);
};
/* 500ms (moderate logging frequency)
scrollDiv.addEventListener("scroll", throttle(logScroll, 500));

100ms (frequent logs, almost real-time)
scrollDiv.addEventListener("scroll", throttle(logScroll, 100));

1000ms (very sparse logs)*/
scrollDiv.addEventListener("scroll", throttle(logScroll, 1000));
