'use strict';
let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})

const body = document.body;
const whiteBtn = document.querySelector('.white');
const blackBtn = document.querySelector('.black');

whiteBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
});

blackBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
});

let newsArray = [];

document.addEventListener("DOMContentLoaded", function () {
    let sendButton = document.querySelector(".send");
    let newsWrapper = document.querySelector(".news-wrapper");

    sendButton.addEventListener("click", function () {
        let titleInput = document.querySelector("input.form-elem");
        let textInput = document.querySelector(".textarea.form-elem");
        let title = titleInput.value.trim();
        let text = textInput.value.trim();

        if (validateFields(title, text)) {
            newsArray.push({ title, text });
            renderNews();
            modal.style.display = "none";
            titleInput.value = "";
            textInput.value = "";
        }
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "b") {
            body.style.background = "black";
            body.style.color = "white";
        } else if (event.key === "w") {
            body.style.color = "black";
            body.style.background = "white";
        }
    });

    function validateFields(title, text) {
        if (title === "" || text === "") {
            alert("Поля не должны быть пустыми");
            return false;
        }
        if (title.length < 8) {
            alert("Название должно быть не менее 8 символов");
            return false;
        }
        if (text.length > 300) {
            alert("Текст не должен превышать 300 символов");
            return false;
        }
        return true;
    }

    function renderNews() {
        newsWrapper.innerHTML = "";
        newsArray.forEach(function (news) {
            let newsItem = document.createElement("div");
            newsItem.className = "news-item";
            newsItem.innerHTML = `
        <h3 class="h3">${news.title}</h3>
        <p class="news-item__p">${news.text}</p>
      `;
            newsWrapper.appendChild(newsItem);
        });
    }

    renderNews();
});