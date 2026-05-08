const navLinksEl = document.querySelector(".nav-links")
const burgerEl = document.querySelector(".burger")
const kryssEl = document.querySelector(".kryss")

burgerEl.addEventListener("click", function () {
    navLinksEl.classList.add("active")
    burgerEl.classList.add("active")
    kryssEl.classList.add("active")
})
kryssEl.addEventListener("click", function () {
    navLinksEl.classList.remove("active")
    burgerEl.classList.remove("active")
    kryssEl.classList.remove("active")
})


const arrow = document.querySelector(".arrow");
const topSection = document.querySelector(".top");

if (arrow && topSection) {
    arrow.addEventListener("click", function () {
        topSection.scrollIntoView({ behavior: "smooth" });
    });
}

const movies = document.querySelector(".movies")

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        movies.scrollLeft += 200;
    }

    if (e.key === "ArrowLeft") {
        movies.scrollLeft -= 200;
    }
})

const btnEl = document.querySelector(".btn")
const textEl = document.querySelector(".text")

if (btnEl && textEl) {

    btnEl.addEventListener("click", function () {

        textEl.classList.toggle("active")

        if (textEl.classList.contains("active")) {
            btnEl.innerHTML = "Read less"
        }
        else {
            btnEl.innerHTML = "Read more"
        }

    })

}


const solidEls = document.querySelectorAll(".solid")
const regularEls = document.querySelectorAll(".regular")

for (let i = 0; i < regularEls.length; i++) {

    solidEls[i].style.display = "none"

    regularEls[i].addEventListener("click", function () {

        regularEls[i].style.display = "none"
        solidEls[i].style.display = "block"

    })

    solidEls[i].addEventListener("click", function () {

        solidEls[i].style.display = "none"
        regularEls[i].style.display = "block"

    })

}

const heartEls = document.querySelectorAll(".heart")
const counterEl = document.querySelector(".favorite-count")

let count = 0

for (const heartEl of heartEls) {

    heartEl.addEventListener("click", function () {

        if (heartEl.classList.contains("fa-regular")) {

            heartEl.classList.replace("fa-regular", "fa-solid")
            count++
            counterEl.innerHTML = count
        }
        else {

            heartEl.classList.replace("fa-solid", "fa-regular")
            count--
            counterEl.innerHTML = count
        }
    })
}

