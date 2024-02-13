fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListElement = document.getElementById("productlist");
    data.forEach(product => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("col");

      const card = document.createElement("div");
      card.classList.add("card", "h-100");

      const row = document.createElement("div");
      row.classList.add("row", "g-0");

      const imageColumn = document.createElement("div");
      imageColumn.classList.add("col-md-4");

      const image = document.createElement("img");
      image.src = "placeholder.jpg"; // Replace "placeholder.jpg" with your actual image URL
      image.classList.add("img-fluid", "rounded-start");
      image.alt = product.product_name;

      const contentColumn = document.createElement("div");
      contentColumn.classList.add("col-md-8");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = product.product_name;

      const description = document.createElement("p");
      description.classList.add("card-text");
      description.textContent = product.product_description;

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.innerHTML = `<small class="text-muted">Price: $${product.product_price}</small>`;

      const dates = document.createElement("p");
      dates.classList.add("card-text");
      dates.innerHTML = `<small class="text-muted">Added: ${product.product_dateAdded}, Expires: ${product.product_ExpirationDate}</small>`;

      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("btn", "btn-primary");
      addToCartButton.textContent = "Add to Cart";

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(price);
      cardBody.appendChild(dates);
      cardBody.appendChild(addToCartButton);

      imageColumn.appendChild(image);
      contentColumn.appendChild(cardBody);

      row.appendChild(imageColumn);
      row.appendChild(contentColumn);

      card.appendChild(row);
      cardContainer.appendChild(card);

      productListElement.appendChild(cardContainer);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
