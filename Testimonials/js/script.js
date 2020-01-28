// immediately invoked function expression

(function() {
  // customers
  let customers = [];

  let index = 0;

  // object constructor function
  function Customer(name, img, text) {
    this.name = name;
    this.img = img;
    this.text = text;
  }

  // create customer function

  function createCustomer(name, img, text) {
    // full image
    let fullImg = `images/customer-${img}.jpg`;
    // create a new customer instance
    const customer = new Customer(name, fullImg, text);
    // add to all customers
    customers.push(customer);
  }

  createCustomer(
    "Venkata",
    1,
    `Hello I am Venkata, I'm pursuing master's in computer science at BTH, Sweden.`
  );
  createCustomer("Sai", 2, `Hey I am Sai and I'm a full stack developer.`);
  createCustomer(
    "teja",
    3,
    `Hi, I am Teja and I play for Karlskrona Cricket Team.`
  );
  createCustomer(
    "pennada",
    4,
    "Good morning, I am Pennada and I am from India."
  );

  // console.log(customers);
  document.querySelectorAll(".btn").forEach(function(item) {
    item.addEventListener("click", function(evnet) {
      event.preventDefault();

      if (event.target.parentElement.classList.contains("prevBtn")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent =
          customers[index].name;
        document.getElementById("customer-text").textContent =
          customers[index].text;
      }

      if (event.target.parentElement.classList.contains("nextBtn")) {
        if (index === customers.length - 1) {
          index = -1;
        }
        index++;
        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent =
          customers[index].name;
        document.getElementById("customer-text").textContent =
          customers[index].text;
      }
    });
  });
})();
