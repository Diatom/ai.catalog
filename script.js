function filterCatalog() {
    // Получение значений критериев фильтрации
    var age = document.getElementById("age").value;
    var milk = document.getElementById("milk").value;
    var since = document.getElementById("since").value;
    var type = document.getElementById("type").value;
    var mold = document.getElementById("mold").value;
    var taste = document.getElementById("taste").value;
    
    // Подготовка отфильтрованных продуктов
    var filteredProducts = [
      { name: 'Product 1', age: '3-6 months', milk: 'Cow', since: '19th century', type: 'Type 1', mold: 'No', taste: 'Taste 1' },
      { name: 'Product 2', age: '6-12 months', milk: 'Sheep', since: '20th century', type: 'Type 2', mold: 'Yes', taste: 'Taste 2' },
      { name: 'Product 3', age: '12-24 months', milk: 'Goat', since: '21st century', type: 'Type 3', mold: 'No', taste: 'Taste 3' }
    ];
    
    // Отображение отфильтрованных продуктов в списке
    var productsList = document.getElementById("productsList");
    productsList.innerHTML = "";
    
    filteredProducts.forEach(function(product) {
      var listItem = document.createElement("li");
      listItem.textContent = product.name + " - " + product.age + " - " + product.milk + " - " + product.since + " - " + product.type + " - " + product.mold + " - " + product.taste;
      productsList.appendChild(listItem);
    });
  }