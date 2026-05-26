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
        topSection.scrollIntoView({behavior: "smooth"});
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

const oneEl = document.querySelector(".one")
const twoEl = document.querySelector(".two")
const threeEl = document.querySelector(".three")
const happyEl = document.querySelector(".happy")
const sadEl = document.querySelector(".sad")
const friendsEl = document.querySelector(".friends")
const aloneEl = document.querySelector(".alone")
const fantasyEl = document.querySelector(".fantasy")
const realEl = document.querySelector(".real")
const quizEl = document.querySelector(".quiz-wrapper")

let mood = ""
let people = ""
let world = ""

oneEl.classList.add("active")

happyEl.addEventListener("click", function () {
    mood = "Happy"
    oneEl.classList.remove("active")
    twoEl.classList.add("active")
})


sadEl.addEventListener("click", function () {
    mood = "Sad"
    oneEl.classList.remove("active")
    twoEl.classList.add("active")
})


friendsEl.addEventListener("click", function () {
    people = "Friends"
    twoEl.classList.remove("active")
    threeEl.classList.add("active")
})


aloneEl.addEventListener("click", function () {
    people = "Alone"
    twoEl.classList.remove("active")
    threeEl.classList.add("active")
})

fantasyEl.addEventListener("click", function () {
    world = "Fantasy"
    showResult()
})

realEl.addEventListener("click", function () {
    world = "Real"
    showResult()
})

function showResult() {

    oneEl.classList.remove("active")
    twoEl.classList.remove("active")
    threeEl.classList.remove("active")

    let result = ""

    if (mood === "Happy" && people === "Friends" && world === "Fantasy") {
        result = "Harry Potter"
    }

    else if (mood === "Happy" && people === "Friends" && world === "Real") {
        result = "The Hangover"
    }

    else if (mood === "Happy" && people === "Alone" && world === "Fantasy") {
        result = "Frozen"
    }

    else if (mood === "Happy" && people === "Alone" && world === "Real") {
        result = "Forrest Gump"
    }

    else if (mood === "Sad" && people === "Friends" && world === "Fantasy") {
        result = "Lord of the Rings"
    }

    else if (mood === "Sad" && people === "Friends" && world === "Real") {
        result = "The Pursuit of Happyness"
    }

    else if (mood === "Sad" && people === "Alone" && world === "Fantasy") {
        result = "Pan’s Labyrinth"
    }

    else if (mood === "Sad" && people === "Alone" && world === "Real") {
        result = "The Green Mile"
    }

    quizEl.innerHTML = result

    quizEl.style.fontSize = "4rem"
    quizEl.style.fontWeight = "bold"
    quizEl.style.letterSpacing = "3px"
    quizEl.style.textTransform = "uppercase"
    quizEl.style.textAlign = "center"

    const resetEl = document.createElement("button")
    resetEl.className = "reset"
    resetEl.innerHTML = "Reset"
    quizEl.appendChild(resetEl)

    resetEl.addEventListener("click", function () {
        location.reload()
    })

}