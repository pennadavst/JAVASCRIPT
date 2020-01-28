(function() {
  //select options

  const services = [
    {
      value: 1,
      title: "Great-20%"
    },
    {
      value: 2,
      title: "Ok-10%"
    },
    { value: 3, title: "Bad-2%" }
  ];

  // add select options to the select elements

  services.forEach(function(service) {
    const option = document.createElement("option");
    option.textContent = service.title;
    option.value = service.value;

    document.getElementById("input-service").appendChild(option);
  });
  // get all the values

  const form = document.getElementById("tip-form");
  const amount = document.getElementById("input-bill");
  const users = document.getElementById("input-users");
  const service = document.getElementById("input-service");

  // customer feedback
  const feedback = document.querySelector(".feedback");
  const loader = document.querySelector(".loader");
  const results = document.querySelector(".results");

  // submit form

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let bill = amount.value;
    let people = users.value;
    let quality = service.value;
    // console.log(typeof quality);

    if (
      bill === "" ||
      bill <= "0" ||
      people === "" ||
      people <= "0" ||
      quality === "0"
    ) {
      feedback.classList.add("showItem", "alert-danger");
      feedback.innerHTML = `
 <p>Please check the values</p>
 <p>Bill amount cannot be less than zero</p>
 <p>People sharing the bill cannot be less than zero</p>
 <p>Services have to be selected</p>
 `;
      setTimeout(function() {
        feedback.classList.remove("showItem", "alert-danger");
      }, 5000);
    } else {
      feedback.classList.add("showItem", "alert-success");
      feedback.innerHTML = `<p>Calculating...</p>`;
      loader.classList.add("showItem");
      setTimeout(function() {
        loader.classList.remove("showItem");
        feedback.classList.remove("showItem", "alert-success");
        showResults(bill, people, quality);
        clearForm();
      }, 4000);
    }
  });
  // show results
  function showResults(bill, people, quality) {
    let percent = 0;
    if (quality === "1") {
      percent = 0.2;
    } else if (quality === "2") {
      percent = 0.1;
    } else if (quality === "3") {
      percent = 0.02;
    }
    let tipAmount = parseInt(bill) * percent;
    let total = parseInt(bill) + tipAmount;
    let person = total / parseInt(people);

    results.classList.add("showItem");
    document.getElementById("tip-amount").textContent = tipAmount;
    document.getElementById("total-amount").textContent = total;
    document.getElementById("person-amount").textContent = person.toFixed(2);
  }

  // clear form
  function clearForm() {
    amount.value = "";
    users.value = "";
    service.value = "";
  }
})();
