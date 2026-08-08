// Get all gallery images
const images = document.querySelectorAll(".gallery-item img");


// Store image sources
const imageSources = [];

images.forEach(function(image) {
    imageSources.push(image.src);
});


// Current image
let currentIndex = 0;


// Open lightbox
function openLightbox(index) {

    currentIndex = index;

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");

    lightboxImage.src =
        imageSources[currentIndex];

    lightbox.classList.add("show");
}


// Close lightbox
function closeLightbox() {

    const lightbox =
        document.getElementById("lightbox");

    lightbox.classList.remove("show");
}


// Show next image
function nextImage() {

    currentIndex++;

    if (currentIndex >= imageSources.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-image").src =
        imageSources[currentIndex];
}


// Show previous image
function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imageSources.length - 1;
    }

    document.getElementById("lightbox-image").src =
        imageSources[currentIndex];
}


// Filter images
function filterImages(category) {

    const items =
        document.querySelectorAll(".gallery-item");

    const buttons =
        document.querySelectorAll(".filter-btn");


    // Update active button
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    event.target.classList.add("active");


    // Filter
    items.forEach(function(item) {

        if (
            category === "all" ||
            item.classList.contains(category)
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


// Keyboard controls
document.addEventListener(
    "keydown",
    function(event) {

        const lightbox =
            document.getElementById("lightbox");

        if (!lightbox.classList.contains("show")) {
            return;
        }


        if (event.key === "ArrowRight") {

            nextImage();

        }


        else if (event.key === "ArrowLeft") {

            previousImage();

        }


        else if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


// Close lightbox when clicking outside image
document.getElementById("lightbox")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLightbox();

        }

    });