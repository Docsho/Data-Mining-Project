# Data-Mining-Project

# 📘 Web Scraping & Recommendation System — Jumia & CoinAfrique

*A Data Mining Project by Nouhr Emmanuel Traoré & Yamin Kagone*

## 🧩 Overview

This project is a full web application that:

* Scrapes product data from **CoinAfrique** and **Jumia**
* Stores results in CSV files
* Builds two recommendation systems:

  * **CoinAfrique:** Car similarity recommender (price, year, model)
  * **Jumia:** Apriori-based market basket recommender
* Displays products using a frontend website (HTML, CSS, JS)
* Shows product details + recommended items
* Filters products so only items compatible with Apriori appear

---

## 📁 Project Structure

```
Web-Scraping-Recommender/
│
├── CoinAfrique/
│   ├── coin_scraper.ipynb
│   ├── cars.csv
│   ├── recommender_car.ipynb
│   ├── Front_Coinafrique/
│       ├── index.html
│       ├── details.html
│       ├── webscript.js
│       └── styles.css
│
├── Jumia/
│   ├── jumia_scraper.ipynb
│   ├── Products.csv
│   ├── Products_with_categories.csv
│   ├── Apriori.ipynb
│   ├── jumia_recommendations.csv
│   ├── Front_Jumia/
│       ├── index.html
│       ├── details_jumia.html
│       ├── jumia.js
│       ├── details_jumia.js
│       └── styles.css
│
└── README.md
```

---

## 🛠️ Technologies Used

### Data Mining

* Python
* Pandas
* BeautifulSoup
* MLxtend (Apriori)
* Random transaction simulation

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

No backend is required after CSV generation.

---

## 🚗 CoinAfrique Car Recommendation System

* Based on similarity:

  * Price distance
  * Year difference
  * Same brand/model bonus
* Outputs top-N recommended cars
* Frontend shows:

  * List of cars
  * Search bar
  * Car details
  * Recommended cars
  * Back to home button

---

## 🛒 Jumia Product Recommendation System (Apriori)

### Steps:

1. Scrape Jumia product data
2. Categorize products automatically
3. Generate realistic transactions
4. Train Apriori with:

   * `min_support = 0.02`
   * `confidence > 0.15`
   * `lift > 1.05`
5. Convert rules to product ID pairs
6. Output `jumia_recommendations.csv`

### Frontend features:

* Loads `Products.csv`
* Filters products to only show Apriori-compatible ones
* Displays:

  * Product cards
  * Search bar
  * Details page
  * Recommended products

---

## 🎨 Frontend Features

* Responsive product grid
* Search functionality
* Product detail page
* Clean UI design
* Back to home navigation
* Recommendation section

---

## ⚙️ How to Run

### From Jupyter Notebook:

Run:

```
coin_scraper.ipynb
jumia_scraper.ipynb
recommender_car.ipynb
Apriori.ipynb
```

This generates clean CSVs.

### Open the website:

Just open:

```
Front_Coinafrique/index.html
Front_Jumia/index.html
```

No backend required.

---

## 🧪 Future Improvements

* Flask backend for real-time scraping
* Pagination
* Real user shopping data
* React.js frontend upgrade
* More product categories

---

## 👤 Author

**Nouhr Emmanuel Traoré**
International University of Grand-Bassam
Data Mining — 2025

---

If you want a **more professional GitHub README**, **with badges**, **screenshots**, or a **PDF version**, tell me:
👉 *"Add badges"*
👉 *"Add screenshots"*
👉 *"Export as PDF"*
