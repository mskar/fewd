document.getElementById('menu-hamburger').addEventListener('click', function () {
    console.log("click")
    document.getElementById("something").classList.toggle('menu-open');
})
document.getElementById('menu-close').addEventListener('click', function () {
    document.getElementById("something").classList.toggle('menu-open');
})