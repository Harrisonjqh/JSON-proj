let contentMenu = document.getElementById('contentGrid');

let myJSON = [
  {
    "title" : "Porsche",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Porsche_logo.svg/1200px-Porsche_logo.svg.png",
    "model" : "911, 918, CAYENNE",
    "price" : "$100000~2500000"
  },
  {
    "title" : "Nissan",
    "picture_url" : "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c497.png",
    "model" : "GTR",
    "price" : "$120000"
  },
  {
    "title" : "Mercedes-Benz",
    "picture_url" : "https://www.carlogos.org/logo/Mercedes-Benz-logo-2009-1920x1080.png",
    "model" : "G-class, S-class, AMG",
    "price" : "$100000~500000"
  },
  {
    "title" : "Lamborghini",
    "picture_url" : "https://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png",
    "model" : "Huracan, Avantador, Urus",
    "price" : "$200000~2000000"
  },

]

for(var i=0; i<myJSON.length; i++){
  applyJSON(myJSON[i]);
}

function applyJSON(incomingJSON){

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');


  let newImageContainer = document.createElement("DIV");
  newImageContainer.classList.add("ImageContainer");
  let newImage = document.createElement("IMG");
  newImage.src = incomingJSON['picture_url'];
  newImageContainer.appendChild(newImage);
  newContentElement.appendChild(newImageContainer);

  let newContentHeading = document.createElement("H2");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = incomingJSON['title'];

  newContentElement.appendChild(newContentHeading);

  let newContentModel = document.createElement("p");
  newContentModel.innerHTML = incomingJSON['model'];
  newContentElement.appendChild(newContentModel);

  let newContentPrices = document.createElement("p");
newContentPrices.innerHTML = incomingJSON['price'];
newContentElement.appendChild(newContentPrices);


  contentMenu.appendChild(newContentElement);
}
