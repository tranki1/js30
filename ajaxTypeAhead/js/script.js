const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function displayMatches() {
  const places = findMatches(this.value, cities);
  const html = places.map(place => {
    const regex = new RegExp(this.value, "gi");
    const placename = place.city.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );
    const placestate = place.state.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );
    return `<ul class="suggestions">
      <li>
            <span class="name">${placename}, ${placestate}</span>
            <span class="population">${numberWithCommas(
              place.population
            )}</span>
      </li>
    </ul>`;
  });

  suggestions.innerHTML = html.join("");
}

const search = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

search.addEventListener("change", displayMatches);
search.addEventListener("keyup", displayMatches);
