let row=document.querySelector(".row")
let filterForm=document.querySelector(".filterForm");
let selectFilterPara=document.querySelector(".selectFilterPara");






let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "30px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "10px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "70px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]


filterForm.addEventListener("submit",(e)=>
{
    row.innerHTML=""

    e.preventDefault()
    let searchName=document.querySelector("#searchName").value;
    let searchNameSelectUpper=searchName.toUpperCase();
    let filterModelSelect=document.querySelector(".selectTage").value;
    console.log(filterModelSelect)

    arr.forEach(element => {
        const {brand,model,price,camera,ram,rom}=element;

        switch (filterModelSelect) {
            case "Company":
                if(brand.toUpperCase()===searchNameSelectUpper)
                {
                    row.insertAdjacentHTML("beforeend",
                    `<div class="col-md-4 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title">Brand: ${brand}</h4>
                          <h5 class="card-title">Model: ${model}</h5>
                          <p class="card-text">Price: <strong> ${price}</strong></p>
                          <p class="card-text">Camera: ${camera}</p>
                          <h6 class="card-title">Ram: ${ram} Rom: ${rom}</h6>
                          <a href="#" class="card-link">Add To Cart</a>
                    
                        </div>
                    </div>
                    </div>`);
                }
                break;



                case "Model":
                    if(model.toUpperCase()===searchNameSelectUpper)
                    {
                        row.insertAdjacentHTML("beforeend",
                        `<div class="col-md-4 mb-4">
                          <div class="card">
                            <div class="card-body">
                              <h4 class="card-title">Brand: ${brand}</h4>
                              <h5 class="card-title">Model: ${model}</h5>
                              <p class="card-text">Price: <strong> ${price}</strong></p>
                              <p class="card-text">Camera: ${camera}</p>
                              <h6 class="card-title">Ram: ${ram} Rom: ${rom}</h6>
                              <a href="#" class="card-link">Add To Cart</a>
                        
                            </div>
                        </div>
                        </div>`);
                    }
                break;


                case "Price":
                    if(price.toUpperCase()===searchNameSelectUpper)
                    {
                        row.insertAdjacentHTML("beforeend",
                        `<div class="col-md-4 mb-4">
                          <div class="card">
                            <div class="card-body">
                              <h4 class="card-title">Brand: ${brand}</h4>
                              <h5 class="card-title">Model: ${model}</h5>
                              <p class="card-text">Price: <strong> ${price}</strong></p>
                              <p class="card-text">Camera: ${camera}</p>
                              <h6 class="card-title">Ram: ${ram} Rom: ${rom}</h6>
                              <a href="#" class="card-link">Add To Cart</a>
                        
                            </div>
                        </div>
                        </div>`);
                    }
                break;


                case "Camera":
                    if(camera.toUpperCase()===searchNameSelectUpper)
                    {
                        row.insertAdjacentHTML("beforeend",
                        `<div class="col-md-4 mb-4">
                          <div class="card">
                            <div class="card-body">
                              <h4 class="card-title">Brand: ${brand}</h4>
                              <h5 class="card-title">Model: ${model}</h5>
                              <p class="card-text">Price: <strong> ${price}</strong></p>
                              <p class="card-text">Camera: ${camera}</p>
                              <h6 class="card-title">Ram: ${ram} Rom: ${rom}</h6>
                              <a href="#" class="card-link">Add To Cart</a>
                        
                            </div>
                        </div>
                        </div>`);
                    }
                break;


        
            default:
                selectFilterPara.innerHTML="Wrong Selection"
                break;
        }




    });


})

// arr.forEach(element => {
//     const {brand,model,price,camera,ram,rom}=element


//     row.insertAdjacentHTML("beforeend",
// `<div class="col-md-4 mb-4">
//   <div class="card">
//     <div class="card-body">
//       <h4 class="card-title">Brand: ${brand}</h4>
//       <h5 class="card-title">Model: ${model}</h5>
//       <p class="card-text">Price: <strong> ${price}</strong></p>
//       <p class="card-text">Camera: ${camera}</p>
//       <h6 class="card-title">Ram: ${ram} Rom: ${rom}</h6>
//       <a href="#" class="card-link">Add To Cart</a>

//     </div>
// </div>
// </div>`);



// });
