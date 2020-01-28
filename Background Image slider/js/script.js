// immediatly invoked function expression( to eliminate the global scope issue)
(function() {
  const pictures = ["img-1", "img-2", "img-3", "img-4", "img-5"];
  // setup counter
  let counter = 0;
  // select buttons
  const btn = document.querySelectorAll(".btn");
  // console.log(btn);
  btn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      // get event target
      event.preventDefault();
      let value = event.target;
      // console.log(value);
      if (value.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        // console.log(counter);
        document.querySelector(
          ".img-container"
        ).style.backgroundImage = `url('images/${pictures[counter]}.jpeg')`;
      }

      if (value.classList.contains("btn-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        // console.log(counter);
        document.querySelector(
          ".img-container"
        ).style.backgroundImage = `url('images/${pictures[counter]}.jpeg')`;
      }
    });
  });
})();
