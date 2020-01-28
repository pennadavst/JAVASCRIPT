(function() {
  document
    .getElementById("message-form")
    .addEventListener("submit", function(pd) {
      // prevent default action
      pd.preventDefault();
      // getting a value
      const message = document.getElementById("message");
      const value = message.value;
      // checking value
      if (value === "") {
        const feedback = document.querySelector(".feedback");
        feedback.classList.add("show");
        setTimeout(function() {
          feedback.classList.remove("show");
        }, 2000);
      }

      // change value
      document.querySelector(".message-content").textContent = value;
      message.value = "";
    });
})();
