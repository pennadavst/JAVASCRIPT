window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

const CreateCars = (() => {
  // car data
  const cars = [];
  // car class
  class Car {
    constructor(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      transmission,
      gas
    ) {
      this.make = make;
      this.country = country;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.transmission = transmission;
      this.gas = gas;
    }
  }
  // car creation function
  function makeCar(
    make,
    country,
    img = "images/germanCar-5.jpeg",
    special = true,
    model = "new model",
    price = 10000,
    type = "sedan",
    transmission = "automatic",
    gas = "20"
  ) {
    const car = new Car(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      transmission,
      gas
    );
    cars.push(car);
  }
  // produce cars
  function produceCars() {
    makeCar("cameo", "american");
    makeCar("mercedes", "american", "images/americanCar-5.jpeg", true);
    makeCar("car", "german", "images/germanCar-2.jpeg", false);
    makeCar("car", "german", "images/germanCar-3.jpeg", false);
    makeCar("car", "american", "images/americanCar-1.jpeg", false);
    makeCar("car", "german", "images/americanCar-2.jpeg", false);
    makeCar("mercedes", "german", "images/americanCar-3.jpeg", true);
    makeCar("vintage", "german", "images/germanCar-4.jpeg", true);
    makeCar("toyota", "german", "images/germanCar-1.jpeg", true);
  }
  produceCars();
  // special cars
  const specialCars = cars.filter(car => car.special === true);
  return {
    cars,
    specialCars
  };
})();

const DisplaySpecialCars = (CreateCars => {
  const specialCars = CreateCars.specialCars;
  const info = document.querySelector(".featured-info");
  // document loaded event
  document.addEventListener("DOMContentLoaded", () => {
    info.innerHTML = "";
    let data = "";
    specialCars.forEach(item => {
      data += `<!-- single item -->
        <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
         <span data-img="${item.img}" class="featured-icon mr-2"><i class="fas fa-car"></i></span>
         <h5 class="font-weight-bold mx-1">${item.make}</h5>
         <h5 class="mx-1">${item.model}</h5>
        </div>
        <!-- end of single item -->`;
    });
    info.innerHTML = data;
  });
  // change img
  info.addEventListener("click", event => {
    if (event.target.parentElement.classList.contains("featured-icon")) {
      const img = event.target.parentElement.dataset.img;
      document.querySelector(".featured-photo").src = img;
    }
  });
})(CreateCars);

const DisplayCars = (CreateCars => {
  // all cars
  const cars = CreateCars.cars;
  // car container
  const inventory = document.querySelector(".inventory-container");
  // content loaded
  document.addEventListener("DOMContentLoaded", () => {
    inventory.innerHTML = "";
    let output = "";
    cars.forEach(car => {
      output += `<!-- single car -->
          <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
            <div class="card car-card">
              <img
                src="${car.img}"
                class="card-img-top car-img"
                alt=""
              />
              <!-- card body -->
              <div class="card-body">
                <div class="car-info d-flex justify-content-between">
                  <!-- first flex child -->
                  <div class="car-text text-uppercase">
                    <h6 class="font-weight-bold">${car.make}</h6>
                    <h6>${car.model}</h6>
                  </div>
                  <!-- second flex child -->
                  <h5 class="car-value align-self-center py-2 px-3">
                    $<span class="car-price">${car.price}</span>
                  </h5>
                </div>
              </div>
              <!-- end of card body -->
              <div
                class="card-footer text-capitalize d-flex justify-content-between"
              >
                <p>
                  <span><i class="fas fa-car"></i></span>${car.type}
                </p>
                <p>
                  <span><i class="fas fa-cogs"></i></span>${car.transmission}
                </p>
                <p>
                  <span><i class="fas fa-gas-pump"></i></span>${car.gas}
                </p>
              </div>
            </div>
          </div>
          <!-- end of single car -->`;
    });
    inventory.innerHTML = output;
  });
})(CreateCars);
// filter cars
const filterCars = (() => {
  const filter = document.querySelectorAll(".filter-btn");
  filter.forEach(btn => {
    btn.addEventListener("click", event => {
      const value = event.target.dataset.filter;
      const singleCar = document.querySelectorAll(".single-car");
      singleCar.forEach(car => {
        if (value === "all") {
          car.style.display = "block";
        } else {
          !car.classList.contains(value)
            ? (car.style.display = "none")
            : (car.style.display = "block");
        }
      });
    });
  });
})();
