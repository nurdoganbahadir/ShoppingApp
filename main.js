import axios from "axios";
import "./scss/style.scss";

// import { search } from "./src/display";

export const urunleriGetir = async (query) => {
  const url = `https://anthonyfs.pythonanywhere.com/api/products/`;

  try {
    const res = await axios(url);
    console.log(res.data);
    res.data.forEach((item) => {
      document.querySelector(".mainRow").innerHTML += `
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">
                ${item.deprecations}
              </p>
              <div class="lastDiv">
                <div class="price">
                  <h5>Fiyat:</h5>
                  <h5>${item.price} $</h5>
                </div>
                <div class="priceBtn">
                  <button type="button" class="btn btn-danger">Sepete Ekle</button>
                  <button type="button" class="btn btn-primary">Detay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    
    `;
    });
  } catch (error) {
    console.log(error);
  }
};
urunleriGetir();
console.log("mardatone");
