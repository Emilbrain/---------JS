'use strict';
let form = document.createElement('form');
form.className = "form";
let name = document.createElement('input');
name.placeholder = "Имя"
let email = document.createElement('input');
email.placeholder = "Почта";
let submit = document.createElement('input');
submit.value = "Отправить";
submit.type = "submit"

document.getElementById('form').prepend(form)
document.querySelector('form').append(name);
document.querySelector('form').append(email);
document.querySelector('form').append(submit);