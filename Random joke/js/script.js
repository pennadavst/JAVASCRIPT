//
const mainBtn = document.getElementById("mainBtn");
const result = document.getElementById("result");
const imgContainer = document.getElementById("img");

mainBtn.addEventListener("click", function() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open("GET", url, true);
  ajax.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const { icon_url: img, value: joke } = data;
      result.textContent = joke;
      imgContainer.src = img;
    }
  };

  ajax.onerror = function() {
    console.log("There was an error");
  };
  ajax.send();
});

// mainBtn.addEventListener("click", function() {
//   const ajax = new XMLHttpRequest();
//   const url = "https://api.chucknorris.io/jokes/random";
//   ajax.open("GET", url, true);

//   ajax.onload = function() {
//     if (this.status === 200) {
//       const data = JSON.parse(this.responseText);
//       const { icon_url: img, value: joke } = data;

//       result.textContent = joke;
//       imgContainer.src = img;
//     }
//   };

//   ajax.onerror = function() {
//     console.log("there was an erro");
//   };

//   ajax.send();
// });
