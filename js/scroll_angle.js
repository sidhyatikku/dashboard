document.addEventListener('DOMContentLoaded', function () {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');

  const isPortrait = window.innerHeight > window.innerWidth;
  const minViewportHeight = 701;
  const maxViewportHeight = 700;

  window.addEventListener('scroll', function () {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    let maxAngle;
    let angleMultiplier;

    if (isPortrait && window.innerHeight >= minViewportHeight) {
      maxAngle = 60;
      angleMultiplier = 3;
    } else if (isPortrait && window.innerHeight <= maxViewportHeight) {
      maxAngle = 60;
      angleMultiplier = 3;
    } else {
      maxAngle = 32;
      angleMultiplier = 2.25;
    }

    let angle = maxAngle * scrollPercentage * angleMultiplier;
    angle = Math.min(angle, maxAngle);

    const transformValue = `scaleY(${Math.sin(angle * (Math.PI / 180))}) rotate(${angle}deg)`;
    line1.style.transform = transformValue;
    line1.style.opacity = scrollPercentage * 2.2;
    line2.style.opacity = scrollPercentage * 2.2;
    line2.style.transform = transformValue;
  });
});
