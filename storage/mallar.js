const cartList = document.getElementById("cart-list");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      cartList.innerHTML = "<p>Səbət boşdur.</p>";
    } else {
      cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h3>${item.product_name}</h3>
          <p>${item.product_description}</p>
          <p>Qiymət: ${item.product_price} AZN</p>
          <p>Mağaza: ${item.store_name}</p>
        `;
        cartList.appendChild(li);
      });
    }