/*let searchbutton = document.getElementById("search-button");
let countryinfo =  document.getElementById("country-id");
searchbutton.addEventListener("click", () => {
    let countryname = "India";
    let finalURL = "https://restcountries.com/v3.1/name/${countryname}?fullText=true";console.log(finalURL);
    fetch(finalURL)
    .then((response)=> response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].containents[0]);
        console.log(object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[object.keys(data[0].currencies)].name);
        console.log(object.values(data[0].languages).toString().split(",").join(","))
    }) ;
    result.innerHTML = `
    <img src="${data[0].flags.svg}"
    class="flag-img">`;
});
*/
let searchBtn = document.getElementById("search-button");
let countryInp = document.getElementById("country-id");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
  
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>

        </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});

