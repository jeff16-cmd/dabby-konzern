alert("Welcome to DABBY website!");
function showMessage() {
    alert("Thank you for visiting my DABBY website!");
}
function changeText() {
    document.getElementById("welcome").innerHTML =
        "Thank you for visiting my website!";
}function changeText() {
    document.getElementById("welcome").innerHTML =
        "Thank you for visiting my website!";
}
function changeBackground() {
    document.body.style.backgroundColor = "DARKGREEN";
}
function updateWebsite() {
    document.getElementById("myHeading").innerHTML =
        "Welcome! Enjoy Exploring JEFF.";

    document.body.style.backgroundColor = "lightblue";
}function toggleText() {
    let text = document.getElementById("aboutText");

    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
let currentImage = 1;

function nextImage() {
    currentImage++;

    if (currentImage > 3) {
        currentImage = 1;
    }

    document.getElementById("slider").src =
        "images/photo" + currentImage + ".jpg";
}

function previousImage() {
    currentImage++;

    if (currentImage < 1) {
        currentImage = 3;
    }

    document.getElementById("slider").src =
        "images/photo" + currentImage + ".jpg";
}
    currentImage--;

    if (currentImage < 1) {
        currentImage = 3;
    }
    document.getElementById("F1.png").src =
        "F1.png" + currentImage + ".jpg";
}
function nextImage() {
let currentImage = 0;

const sliderImages = [
    "images/1-F1.jpg",
    "images/2-photo1.jpg",
    "images/3-photo2.jpg"
];

function showImage() {
    document.getElementById("slider").src =
        sliderImages[currentImage];
}

function nextImage() {
    currentImage++;

    if (currentImage >= sliderImages.length) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = sliderImages.length - 1;
    }

    showImage();
}    

    document.getElementById("slider").src =
        "images/photo" + currentImage + ".jpg";

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you! Your message has been received.");

        contactForm.reset();
    });
}
};

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "Switch to Dark Mode";
    } else {
        themeToggle.textContent = "Switch to Light Mode";
    }

// Load the saved website theme
 savedTheme = localStorage.getItem("websiteTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

// Update the theme button
 themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.textContent =
        savedTheme === "light"
        ? "Switch to Dark Mode"
        : "Switch to Light Mode";
}
// Switch themes and save the preference
if (themeToggle) {
    themeToggle.addEventListener("click", function() {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("websiteTheme", "light");
            themeToggle.textContent = "Switch to Dark Mode";
        } else {
            localStorage.setItem("websiteTheme", "dark");
            themeToggle.textContent = "Switch to Light Mode";
        }

    });
}const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};
console.log("JEFF website JavaScript is working!");

console.log("JEFF Contact Form JavaScript is running!");
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();
    });
}
// PHOTO LIGHTBOX

const galleryImages = document.querySelectorAll(
    ".gallery-item img"
);

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById(
    "lightboxImage"
);
const lightboxCaption = document.getElementById(
    "lightboxCaption"
);
galleryImages.forEach(function(image) {

    image.addEventListener("click", function(event) {

        event.preventDefault();

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;
lightboxCaption.textContent = image.alt;
    });

});
// CLOSE PHOTO LIGHTBOX

const closeLightbox = document.getElementById("closeLightbox");

closeLightbox.addEventListener("click", function() {

    lightbox.style.display = "none";

});
// CLOSE LIGHTBOX BY CLICKING OUTSIDE THE PHOTO

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

});