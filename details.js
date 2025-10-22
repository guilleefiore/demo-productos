const productDetailsElem = document.querySelector('#productDetails');

const selectorProduct = JSON.parse(localStorage.getItem('selectedProduct'));

productDetailsElem.textContent = JSON.stringify(selectorProduct, null, 2);