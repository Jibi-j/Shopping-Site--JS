const userIcon = document.getElementById("user-icon");
const loginForm = document.querySelector(".user");

userIcon.addEventListener("click", () => {
    loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
});


const fetchData = async () => {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      displayData(data);
  } catch (error) {
      console.log(error);
  }
};

const displayData = (data) => {
  if (!data) {
      console.log("Data not found");
  } else {
      const productsHtml = data.map(product => 
          `<div class="product">
              <img src="${product.image}" alt="${product.title}">
              <div class="product-info">
                  <h4>${product.title}</h4>
                  <p class="price">$${product.price}</p>
                  <button class="btn">Add to Cart</button>
              </div>
          </div>`).join('');
      
      const productsElement = document.querySelector(".products");
      productsElement.innerHTML = productsHtml;
  }
};

fetchData();

