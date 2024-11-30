document.addEventListener("DOMContentLoaded", function () {
    const englishData = {
        name: "John",
        age: "Age: 30",
        city: "City: New York",
        occupation: "Occupation: Engineer",
        company: "Company: TechCorp",
        phone: "Phone: +1 555 1234",
        email: "Email: john.doe@example.com",
        address: "Address: 123 Elm St",
        education: "Education: Bachelor's Degree",
        hobby: "Hobby: Photography",
        favorite_food: "Favorite Food: Pizza",
        favorite_color: "Favorite Color: Blue",
        favorite_movie: "Favorite Movie: Inception",
        favorite_book: "Favorite Book: 1984",
        language: "Language: English",
        nationality: "Nationality: American",
        marital_status: "Marital Status: Single",
        has_pets: "Has Pets: Yes",
        children: "Children: 0",
        car: "Car: Tesla Model S"
    };
     
    const russianData = {
        name: "Джон",
        age: "Возраст: 30",
        city: "Город: Нью-Йорк",
        occupation: "Профессия: Инженер",
        company: "Компания: ТехКорп",
        phone: "Телефон: +1 555 1234",
        email: "Электронная почта: john.doe@пример.com",
        address: "Адрес: ул. Эльм, 123",
        education: "Образование: Степень бакалавра",
        hobby: "Хобби: Фотография",
        favorite_food: "Любимая еда: Пицца",
        favorite_color: "Любимый цвет: Синий",
        favorite_movie: "Любимый фильм: Начало",
        favorite_book: "Любимая книга: 1984",
        language: "Язык: Английский",
        nationality: "Национальность: Американец",
        marital_status: "Семейное положение: Не женат",
        has_pets: "Есть домашние животные: Да",
        children: "Дети: 0",
        car: "Машина: Тесла Модель S"
    };
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (let pair of pairs) {
            const [key, value] = pair.split("=");
            if (key && value) {
                params[decodeURIComponent(key)] = decodeURIComponent(value);
            }
        }
        return params;
    }
    function applyTranslations(data) {
        const elements = document.querySelectorAll("[data-key]");
        elements.forEach(element => {
            const key = element.getAttribute("data-key");
            if (data[key] !== undefined) {
                element.textContent = data[key];
            }
        });
    }
    function changeLanguage(lang) {
        const currentUrl = window.location.href.split('?')[0];
        window.location.href = `${currentUrl}?lang=${lang}`;
    }
    const params = getQueryParams();
    const lang = params.lang ? params.lang.toLowerCase() : "en"; 
    if (lang === "en") {
        applyTranslations(englishData);
    } else if (lang === "ru") {
        applyTranslations(russianData);
    } else {
        applyTranslations(englishData);
    }
    window.changeLanguage = changeLanguage;
});