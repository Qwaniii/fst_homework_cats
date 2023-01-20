// добавляем динамические данные

let main = document.querySelector("main");

const updCards = function(cats) {
    main.innerHTML = "";
    cats.forEach(function(cat) {
        let card = `<div class="${cat.favourite ? "card like" : "card"}" style="background-image: url(${cat.img_link})">
            <span>${cat.name}</span>
        </div>`;
        main.innerHTML += card
    });

    let cards = document.querySelectorAll(".card");
    for (i = 0; i < cards.length; i++) {
        const width = cards[i].offsetWidth;
        cards[i].style.height = width * 0.6 + "px";
    }
}

updCards(cats);




// работает с popup окном

let addBtn = document.querySelector("#add");
let popupForm = document.querySelector("#popup-form");
let closePopupForm = document.querySelector(".popup-close");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!popupForm.classList.contains("acrive")) {
        popupForm.classList.add("active");
        popupForm.parentElement.classList.add("active");
    }
});

closePopupForm.addEventListener("click", () => {
    popupForm.classList.remove("active");
    popupForm.parentElement.classList.remove("active");
});

// добавление котика





let form = document.forms[0];

form.img_link.addEventListener("change", (e) => {
    form.firstElementChild.style.backgroundImage = `url(${e.target.value})`
});

form.img_link.addEventListener("input", (e) => {
    form.firstElementChild.style.backgroundImage = `url(${e.target.value})`
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < form.elements.length; i++) {
        let inp = form.elements[i];
        if (inp.type === "checkbox") {
            body[inp.name] = inp.checked;
        } else if (inp.name && inp.value) {
            if (inp.type === "number") {
                body[inp.name] = +inp.value
            } else {
                body[inp.name] = inp.value
            }
        }
    }
    console.log(body);
    cats.push(body)
    form.reset();
    closePopupForm.click();
    updCards(cats);
    console.log(cats)
})