/* LESSON 3 - Programming Tasks */
let myProfile = {
    name: "Ronald Bamutesiza",
    photo: "images/siza.jpeg",
    favoriteFoods: [
      "posho",
      "Beans",
      "Rolex",
      "Cabbage",
      "greens"
    ],
    hobbies: [
      "Watching movies",
      "listening to music",
      "Researching",
    ],
    placesLived: []
  };
  
  myProfile.placesLived.push({
    place: "Jinja, Bugembe",
    length: "20 years"
  });
  myProfile.placesLived.push({
    place: "Kampala, Ntinda",
    length: "1 year"
  });
  myProfile.placesLived.push({
    place: "Lira, Otuke",
    length: "3 years"
  });
  
  document.querySelector("#name").textContent = myProfile.name;
  document.querySelector("#photo").src = myProfile.photo;
  document.querySelector("#photo").alt = `Profile image of ${myProfile.name}`;
  
  
  let favoriteFoodsList = document.querySelector("#favorite-foods");
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });
  
  let hobbiesList = document.querySelector("#hobbies");
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
  
  let placesLivedList = document.querySelector("#places-lived");
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
  });
  