let tableContent = '';
let totalProducts = [];
const productsTableElem = document.querySelector('#productsTable'); /*Selector de CSS*/

const goToProductDetails = (productId) => {
    // Busca un producto seleccionado de todos los productos
    const selectedProduct = totalProducts.find(product => product.id === productId);
    // Guarda producto seleccionado en el local storage
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    // Redirecciona a los detalles del producto
    window.location.href = `product-details.html?id=${productId}`;
}; 

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        totalProducts = products;
        products.forEach(product => {
            tableContent += `<tr>
            <td>
                <a href="#" onclick="goToProductDetails(${product.id})">${product.title}</a>
            </td>
            <td>${product.price}</td>
            <td>
                <img
                    src="${product.image}"
                    alt="${product.title}"
                    width="100"
                    height="100">
            </td>
            </tr>`;
        });
        productsTableElem.innerHTML = tableContent;
    });