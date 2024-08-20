import axios, { all } from "axios";
import "./scss/style.scss";

//*SELEKTÖRLER
const electronicsBtn = document.querySelector(".electronicsBtn");
const sportsBtn = document.querySelector(".sportsBtn");
const homeBtn = document.querySelector(".homeBtn");
const shopBtn = document.querySelector(".shopBtn");
const clothingBtn = document.querySelector(".clothingBtn");
const allBtn = document.querySelector(".allBtn");

export const urunleriGetir = async (query) => {
  const url = `https://anthonyfs.pythonanywhere.com/api/products/`;

  try {
    const res = await axios(url);
    res.data.forEach((item) => {
      displayAll(item); //*SAYFA İLK YÜKLENDİĞİNDE TÜM İTEMLERI GETİRİYORUZ
    });
    
    //*ALL BUTTON
    allBtn.addEventListener("click", () => {
      document.querySelector(".mainRow").textContent = "";
      res.data.forEach((item) => {
        displayAll(item);
      });
    });

    //*ELECTRONİCS BUTTON
    electronicsBtn.addEventListener("click", () => {
      document.querySelector(".mainRow").textContent = "";
      res.data.forEach((item) => {
        if (item.category_id == 1) {
          displayAll(item);
        }
      });
    });
    //*SPORTS BUTTON
    sportsBtn.addEventListener("click", () => {
      document.querySelector(".mainRow").textContent = "";
      res.data.forEach((item) => {
        if (item.category_id == 3) {
          displayAll(item);
        }
      });
    });

    //*HOME BUTTON
    homeBtn.addEventListener("click", () => {
      document.querySelector(".mainRow").textContent = "";
      res.data.forEach((item) => {
        if (item.category_id == 2) {
          displayAll(item);
        }
      });
    });
    //*SHOP BUTTON
    shopBtn.addEventListener("click", () => {
      document.querySelector(".mainRow").textContent = "";
      res.data.forEach((item) => {
        if (item.category_id == 4) {
          displayAll(item);
        }
      });
    });
    //*CLOTHİNG BUTTON
    clothingBtn.addEventListener("click", () => {
      document.querySelector(".mainRow").textContent = "";
      res.data.forEach((item) => {
        if (item.category_id == 5) {
          displayAll(item);
        }
      });
    });

    //!RESPONSE BURAYA KADAR
  } catch (error) {
    console.log(error);
  }
};

function displayAll(item) {
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

urunleriGetir();
