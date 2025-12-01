console.log("JS Loaded");

let cars = [];

Papa.parse("cars.csv", {
    download: true,
    header: true,
    complete: function(results) {
        cars = results.data.filter(c => c.car_name);
        displayCars(cars);
        setupSearch();
    }
});

function displayCars(list) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    list.forEach(car => {
        container.innerHTML += `
          <div class="card" onclick="openDetails(${car.id})">
            <img src="${car.Image_URL}" alt="${car.car_name}">
            <h3>${car.car_name}</h3>
            <p>${car.brand}</p>
            <strong>${Number(car.Price).toLocaleString()} FCFA</strong>
          </div>
        `;
    });
}

function setupSearch() {
    const input = document.getElementById("searchBar");

    input.addEventListener("input", e => {
        const q = e.target.value.toLowerCase();

        const filtered = cars.filter(c =>
            c.car_name.toLowerCase().includes(q) ||
            c.brand.toLowerCase().includes(q)
        );

        displayCars(filtered);
    });
}

function openDetails(id) {
    window.location.href = `details.html?id=${id}`;
}
