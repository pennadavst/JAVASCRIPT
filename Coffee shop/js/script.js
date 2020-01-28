// event listeners
addEventListeners();
function addEventListeners() {
  const ui = new UI();
  // preloader
  window.addEventListener("load", function() {
    ui.hidePreloader();
  });

  // nav btn
  document.querySelector(".navBtn").addEventListener("click", function() {
    ui.showNav();
  });

  // control the video
  document
    .querySelector(".video__switch")
    .addEventListener("click", function() {
      ui.videoControls();
    });
  // submit the form
  document
    .querySelector(".drink-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.querySelector(".input-name").value;
      const lastname = document.querySelector(".input-lastname").value;
      const email = document.querySelector(".input-email").value;
      let value = ui.checkEmpty(name, lastname, email);
      if (value) {
        let customer = new Customer(name, lastname, email);
        ui.addCustomer(customer);
        ui.showFeedback("customer added to the list", "success");
        ui.clearFields();
      } else {
        ui.showFeedback("some form values are empty", "error");
      }
    });
  // display modal
  const links = document.querySelectorAll(".work-item__icon");
  links.forEach(function(item) {
    item.addEventListener("click", function(event) {
      ui.showModal(event);
    });
  });
  // hide modal
  document
    .querySelector(".work-modal__close")
    .addEventListener("click", function() {
      ui.closeModal();
    });
}

// constructor function
function UI() {}

// hide preloader
UI.prototype.hidePreloader = function() {
  document.querySelector(".preloader").style.display = "none";
};

// show nav
UI.prototype.showNav = function() {
  document.querySelector(".nav").classList.toggle("nav--show");
};

// play/pause the video
UI.prototype.videoControls = function() {
  let btn = document.querySelector(".video__switch-btn");
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
  }
};

// check for empty value
UI.prototype.checkEmpty = function(name, lastname, email) {
  let result;
  if (name === "" || lastname === "" || email === "") {
    result = false;
  } else {
    result = true;
  }
  return result;
};

UI.prototype.showFeedback = function(text, type) {
  const feedback = document.querySelector(".drink-form__feedback");
  if (type === "success") {
    feedback.classList.add("success");
    feedback.innerText = text;
    this.removeAlert("success");
  } else if (type === "error") {
    feedback.classList.add("error");
    feedback.innerText = text;
    this.removeAlert("error");
  }
};

// remove alert
UI.prototype.removeAlert = function(type) {
  setTimeout(function() {
    document.querySelector(".drink-form__feedback").classList.remove(type);
  }, 3000);
};

// add customer
UI.prototype.addCustomer = function(customer) {
  const images = [1, 2, 3, 4, 5];
  let random = Math.floor(Math.random() * images.length);
  const div = document.createElement("div");
  div.classList.add("person");
  div.innerHTML = `<img
                src="./images/person-${random}.jpeg"
                alt=""
                class="person__thumbnail"
              />
              <h4 class="person__name">${customer.name}</h4>
              <h4 class="person__lastname">${customer.lastname}</h4>`;
  document.querySelector(".drink-card__list").appendChild(div);
};
// clear fields
UI.prototype.clearFields = function() {
  document.querySelector(".input-name").value = "";
  document.querySelector(".input-lastname").value = "";
  document.querySelector(".input-email").value = "";
  let value = ui.checkEmpty(name, lastname, email);
};
// show modal
UI.prototype.showModal = function(event) {
  event.preventDefault();
  if (event.target.parentElement.classList.contains("work-item__icon")) {
    let id = event.target.parentElement.dataset.id;
    const modal = document.querySelector(".work-modal");
    const modalItem = document.querySelector(".work-modal__item");
    modal.classList.add("work-modal--show");
    modalItem.style.backgroundImage = `url(images/work-${id}.jpeg)`;
  }
};
// hide modal
UI.prototype.closeModal = function() {
  document.querySelector(".work-modal").classList.remove("work-modal--show");
};

//customer
function Customer(name, lastname, email) {
  this.name = name;
  this.lastname = lastname;
  this.email = email;
}
