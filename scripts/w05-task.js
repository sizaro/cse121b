const templesElement = document.querySelector("#temples");
const templeList = [];

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); // Replace with the actual URL
  if (response.ok) {
    const data = await response.json();
    templeList.push(...data);
    console.log(templeList);
    displayTemples(templeList); 
  }
};

const reset = () => {
  templesElement.innerHTML = "";
};

const sortBy = (temples) => {
  reset();

  const filter = document.getElementById("sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
    default:
      displayTemples(temples);
      break;
  }
};

const sortByElement = document.getElementById("sortBy");
sortByElement.addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();
