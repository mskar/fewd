document.addEventListener(
    "click", event => {
        if (event.target.matches(".button")) {
            document.querySelectorAll(".bulb").forEach(x => x.setAttribute("class", "bulb"));
            let targetElement = document.querySelector(event.target.dataset.target);
            targetElement.classList.add(targetElement.dataset.color);
        }
    }
)