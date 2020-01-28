(function() {
  let counterValue = 0;
  const buttons = document.querySelectorAll(".counterBtn");
  const counter = document.getElementById("counter");
  buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      // element that we click
      const value = event.target;
      // console.log(value);

      if (value.classList.contains("prevBtn")) {
        counterValue--;
      } else if (value.classList.contains("nextBtn")) {
        counterValue++;
      }
      counter.textContent = counterValue;

      // change color
      if (counterValue === 0) {
        counter.style.color = "#FAFECC";
      } else if (counterValue < 0) {
        counter.style.color = "#f6511d";
      } else if (counterValue > 0) {
        counter.style.color = "#7fb800";
      }
    });
  });
})();
