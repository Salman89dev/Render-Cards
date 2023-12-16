let container=document.querySelector(".row");

let arr=[
    {
    "id": 4,
    "title": "newTitle",
    "price": 205,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "image_url": "https://i.imgur.com/R2PN9Wq.jpeg",
    "color":[" red"," black"," orange"],
    },
    {
    "id": 7,
    "title": "Ergonomic Wooden Tuna",
    "price": 743,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image_url": "https://i.imgur.com/mp3rUty.jpeg",
    "color":[" red"," black"," orange"],
    },
    {
    "id": 9,
    "title": "Electronic Bronze Chips",
    "price": 808,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "image_url": "https://i.imgur.com/R3iobJA.jpeg",
    "color":[" red"," black"," orange"],
    },
    {
    "id": 11,
    "title": "Awesome Bronze Car",
    "price": 382,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image_url": "https://i.imgur.com/cBuLvBi.jpeg",
    "color":[" red"," black"," orange"],
    },
    {
    "id": 12,
    "title": "Recycled Rubber Cheese",
    "price": 30,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image_url": "https://i.imgur.com/KeqG6r4.jpeg",
    "color":[" red"," black"," orange"],
    }
];





  arr.map(element => {
    const {id,title,price,description,image_url,color}=element;
    container.insertAdjacentHTML("beforeend", `
    <div class="col-md-4  mb-4">
<div class="card h-100" style="width:100%">
<img class="card-img-top" src="${image_url}" alt="Card image" style="width:100%">
<div class="card-body">
  <h6 class="card-title">ID: ${id}</h6>
  <h4 class="card-title">${title}</h4>
  <h4 class="card-title">$${price}</h4>
  <p class="card-text">${description}</p>
  <p class="card-text"><strong>Colors:</strong> ${color}</p>

  <a href="#" class="btn btn-primary stretched-link">Add To Cart</a>
</div>
</div>
</div>
    `
    )

  });




