import axios from "axios";
import "./scss/style.scss";

//*SELEKTÖRLER
const electronicsBtn = document.querySelector(".electronicsBtn");

export const urunleriGetir = async (query) => {
  const url = `https://anthonyfs.pythonanywhere.com/api/products/`;

  try {
    const res = await axios(url);
    res.data.forEach((item) => {
      document.querySelector(".mainRow").innerHTML += `
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">
                ${item.description}
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
    electronicsBtn.addEventListener("click", () => {
      document.querySelector(".mainRow").textContent = "";
      res.data.forEach((item) => {
        if (item.category_id == 1) {
          document.querySelector(".mainRow").innerHTML += `
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">
                ${item.description}
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
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};
urunleriGetir();
