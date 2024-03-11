  const svgArray = [
    '<svg src="../img/narwhal.svg" alt="narwhal logo"></svg>',
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="50%" fill="blue"/></svg>',
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50%" cy="50%" rx="50%" ry="30%" fill="green"/></svg>',
    // Add more SVGs as needed
  ];

  const svgContainer = document.getElementById('svg-container');
  let currentIndex = 0;

  function changeSVG() {
    svgContainer.innerHTML = svgArray[currentIndex];
    currentIndex = (currentIndex + 1) % svgArray.length;
  }

  // Initial setup
  changeSVG();

  // Set interval to change SVG every 2 seconds
  setInterval(changeSVG, 2000);
