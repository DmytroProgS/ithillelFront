const MyWord = document.querySelector(".word");
const Result = document.querySelector(".result");
const derButton = document.querySelector("#der");
const dieButton = document.querySelector("#die");
const dasButton = document.querySelector("#das");
const updateButton = document.querySelector("#Update");

const API_KEY = 'AIzaSyBg-EpsGDBFuP88d2EctqR55RB3Y-9dLwk'; // ваш API ключ
const SHEET_ID = '1obe4Y7QvCSyzValAooQJmcMY5In-oDOfGjK6L9VOfIA'; // ID таблиці
const RANGE = 'A2:C229'; // діапазон, який включає стовпці A і C

let currentArticle = ""; // Тут будемо зберігати артикль для поточного слова

// Функція для отримання випадкового слова та його артикля
async function fetchRandomWord() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const rows = data.values; // Масив рядків зі словами та артиклями

        if (rows.length > 0) {
            // Вибираємо випадковий рядок
            const randomIndex = Math.floor(Math.random() * rows.length);
            const [article, , word] = rows[randomIndex]; // Отримуємо артикль (стовпець A) і слово (стовпець C)

            currentArticle = article; // Зберігаємо артикль для перевірки
            MyWord.textContent = word; // Виводимо слово на екран
        } else {
            MyWord.textContent = 'Немає слів';
        }
    } catch (error) {
        console.error("Помилка отримання даних з Google Sheets:", error);
        MyWord.textContent = 'Помилка завантаження';
    }
}

// Функція для перевірки правильності вибраного артикля
function checkArticle(selectedArticle) {
    if (selectedArticle === currentArticle) {
        Result.textContent = "Вірно";
        Result.className = "green"; // Додаємо зелений колір для правильного результату
    } else {
        Result.textContent = "Помилка";
        Result.className = "red"; // Додаємо червоний колір для помилки
    }
}

// Додаємо події на кнопки артиклів
derButton.addEventListener("click", () => checkArticle("Der"));
dieButton.addEventListener("click", () => checkArticle("Die"));
dasButton.addEventListener("click", () => checkArticle("Das"));

// Оновлюємо слово при натисканні на "Наступне слово"
updateButton.addEventListener("click", fetchRandomWord);

// Викликаємо функцію при завантаженні сторінки, щоб відразу показати слово
fetchRandomWord();
