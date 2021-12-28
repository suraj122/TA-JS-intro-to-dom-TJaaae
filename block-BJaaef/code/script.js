let gotList = document.querySelector("ul");

let gotPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let cardHtml = gotPeople.map((people) => {
  return `<li class="people">
  <header>
    <img
      src=${people.image}
      alt=${people.name}
    />
    <h2>${people.name}</h2>
  </header>
  <p>
    ${people.description}
  </p>
  <a href=${people.wikiLink}>Learn More</a>
</li>`;
});

gotList.innerHTML = cardHtml.join("");
