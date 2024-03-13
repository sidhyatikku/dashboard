function scrollDown() {
    window.scrollTo({
        top: window.pageYOffset + (window.innerHeight * 0.25),
        behavior: 'smooth' // Smooth scrolling animation
    });
    console.log("scroll");
}

// Scroll down after a 5-second delay when the page is fully loaded
window.addEventListener('load', function() {
    setTimeout(scrollDown, 5000);
});
