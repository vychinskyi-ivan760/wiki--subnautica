
document.addEventListener('DOMContentLoaded', function() {
    alert("Welcome to the Subnautica fan site!");
});
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
