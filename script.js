const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

const removeChild = function () {
    while (containerEl.lastChild) {
        containerEl.removeChild(containerEl.lastChild);
    }
};

const createGrid = function () {
    const input = prompt("Select Grid Size (Maximum 100x100)");
    removeChild();

    for (let i = 0; i < input ** 2; i++) {
        const divEl = document.createElement("div");
        divEl.classList.add(`div-${i + 1}`, "div");
        containerEl.appendChild(divEl);
    }
    // creates grid columns
    const divEls = document.querySelectorAll(".div");
    containerEl.style.gridTemplateColumns = `repeat(${input},1fr)`;
    // hover effect
    divEls.forEach((div) => {
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = randomColor();
        });
        div.addEventListener("mouseleave", function () {
            div.style.backgroundColor = "#fff";
        });
    });
};

const randomColor = function () {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    return `rgb(${red},${green},${blue})`;
};

btnEl.addEventListener("click", createGrid);
