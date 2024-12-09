const productList = document.getElementById('product-list')
const filterInput = document.getElementById('filter-input')
let products = []

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/')
        products = await response.json()
        console.log(products)
    } catch (error) {
        productList.innerHTML = `<p>Erro ao carregar os produtos. Tente novamente. ${error}</p>`
    }
}
fetchProducts()