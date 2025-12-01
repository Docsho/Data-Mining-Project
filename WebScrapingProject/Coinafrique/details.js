const params = new URLSearchParams(window.location.search);
const carId = params.get("id");

let cars = [];
let recmap = [];

Papa.parse("cars.csv", {
    download: true,
    header: true,
    complete: function(results) {
        cars = results.data.filter(c => c.car_name);
        loadRecs();
    }
});

function loadRecs() {
    Papa.parse("recommendations.csv", {
        download: true,
        header: true,
        complete: function(results) {
            recmap = results.data;
            renderDetails();
        }
    });
}

function renderDetails() {
    const car = cars.find(c => c.id === carId);
    displayCar(car);

    const recommendedIDs = recmap
        .filter(r => r.car_id === carId)
        .map(r => r.rec_id);

    const recommendedCars = cars.filter(c => recommendedIDs.includes(c.id));

    displayRecommendations(recommendedCars);
}

function displayCar(car) {
    const div = document.getElementById("carDetails");

    div.innerHTML = `
        <img src="${car.Image_URL}" alt="${car.car_name}">

        <h2>${car.car_name}</h2>

        <div class="price-badge">${Number(car.Price).toLocaleString()} FCFA</div>

        <div class="car-info">
            <p><strong>Marque:</strong> ${car.brand}</p>
            <p><strong>Modèle:</strong> ${car.model}</p>
            <p><strong>Année:</strong> ${car.year}</p>
            <p><strong>Lieu:</strong> ${car.location}</p>
        </div>
    `;
}

function displayRecommendations(list) {
    const container = document.getElementById("recommendContainer");
    container.innerHTML = "";

    list.forEach(car => {
        container.innerHTML += `
            <div class="card" onclick="openCar('${car.id}')">
                <img src="${car.Image_URL}">
                <h3>${car.car_name}</h3>
                <p>${car.brand}</p>
                <strong>${Number(car.Price).toLocaleString()} FCFA</strong>
            </div>
        `;
    });
}

function openCar(id) {
    window.location.href = `details.html?id=${id}`;
}
