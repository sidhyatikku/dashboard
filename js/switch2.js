    var images = [
        "img/narwhal.svg",
        "img/narwhal_plus.svg",  // Replace with the actual path
        "img/narwhal_minus.svg",
        "img/narwhal_percent.svg",
        "img/narwhal_pay.svg"
        // Add more image paths as needed
    ];

    var logo = document.getElementById('log_init');
    var currentImageIndex = 0;

    function changeImage() {
        logo.style.opacity = 0; // Fade out

        setTimeout(function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            logo.src = images[currentImageIndex];
            logo.style.opacity = 1; // Fade in
        }, 250); // Wait for the fade-out duration
    }

    setInterval(changeImage, 2000); // Change image every 2 seconds
