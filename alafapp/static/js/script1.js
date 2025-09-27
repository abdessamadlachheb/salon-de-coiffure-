const heroSection = document.getElementById('hero');

// Get image paths from data attributes
const images = [
    heroSection.dataset.img1,
    heroSection.dataset.img2,
    heroSection.dataset.img3
];

let currentIndex = 0;

function changeBackground() {
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial background
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Select all navbar links with class "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
