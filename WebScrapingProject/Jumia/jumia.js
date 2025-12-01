let products = [];

// Load products
Papa.parse("Products.csv", {
    download: true,
    header: true,
    complete: function(results) {
        products = results.data.filter(p => p.name);
        displayProducts(products);
        setupSearch();
    }
});

// Display product cards
function displayProducts(list) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="card" onclick="openDetails(${p.id})">
                <img src="${p.image_url}">
                <h3>${p.name}</h3>
                <strong>${Number(p.price).toLocaleString()} FCFA</strong>
            </div>
        `;
    });
}

// Search bar
function setupSearch() {
    document.getElementById("searchBar")
        .addEventListener("input", e => {
            const q = e.target.value.toLowerCase();
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(q)
            );
            displayProducts(filtered);
        });
}

function openDetails(id) {
    window.location.href = `details_jumia.html?id=${id}`;
}
