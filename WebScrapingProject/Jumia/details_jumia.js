const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let products = [];
let recmap = [];

// Load product list
Papa.parse("Products.csv", {
    download: true,
    header: true,
    complete: function(results) {
        products = results.data.filter(p => p.name);
        loadRecommendations();
    }
});

// Load Apriori recommendations
function loadRecommendations() {
    Papa.parse("jumia_recommendations.csv", {
        download: true,
        header: true,
        complete: function(results) {
            recmap = results.data;
            renderPage();
        }
    });
}

// Display current product details + recommendations
function renderPage() {
    const product = products.find(p => p.id === productId);
    displayProduct(product);

    const recommendedIDs = recmap
        .filter(r => r.product_id === productId)
        .map(r => r.rec_id);

    const recommendedProducts = products.filter(p =>
        recommendedIDs.includes(p.id)
    );

    displayRecommendations(recommendedProducts);
}

function displayProduct(p) {
    const div = document.getElementById("productDetails");

    div.innerHTML = `
        <img src="${p.image_url}">
        <h2>${p.name}</h2>
        <div class="price-badge">${Number(p.price).toLocaleString()} FCFA</div>
    `;
}

function displayRecommendations(list) {
    const container = document.getElementById("recommendContainer");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="card" onclick="openProduct('${p.id}')">
                <img src="${p.image_url}">
                <h3>${p.name}</h3>
                <strong>${Number(p.price).toLocaleString()} FCFA</strong>
            </div>
        `;
    });
}

function openProduct(id) {
    window.location.href = `details_jumia.html?id=${id}`;
}
