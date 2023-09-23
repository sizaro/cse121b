const fullName = "Ronald Bamutesiza";

const currentYear = new Date().getFullYear();

const profilePicture = "images/siza.jpeg"; 

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector('main picture img');

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile image of ${fullName}`);

const favFoods = ["posho", "beans", "chapatti", "cabbage", "rice"];

foodElement.innerHTML = favFoods.join(", ");

const favFood1 = "rolex";

favFoods.push(favFood1);

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods.join(", ")}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods.join(", ")}`;
