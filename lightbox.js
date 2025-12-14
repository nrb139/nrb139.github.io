function openLightbox(imageSrc, imageAlt) {
    var overlay = document.getElementById("lightboxOverlay");
    var img = document.getElementById("lightboxImg");
    var caption = document.getElementById("lightboxCaption");

    img.src = imageSrc;
    img.alt = imageAlt;
    caption.textContent = imageAlt;
    overlay.style.display = "block";
}

function closeLightbox() {
    var overlay = document.getElementById("lightboxOverlay");
    overlay.style.display = "none";
}
