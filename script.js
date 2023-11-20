
function updateGradientPosition(element, start, isHeader = false) {

    const colorStop1 = 'rgb(200,144,190)';
    const colorStop2 = 'rgb(162,162,207)';
    const colorStop3 = 'rgb(180,214,100)';


    if (isHeader) {
        element.style.backgroundImage = `repeating-linear-gradient(
      to right,
      ${colorStop1},
      ${colorStop2} 33%,
      ${colorStop3} 66%,
      ${colorStop1} 99%
    )`;
        const position = (start % element.clientWidth) + 'px';
        element.style.backgroundPosition = `${position} 0`;
    } else {

        const angle = (start % 360) + 'deg';
        element.style.backgroundImage = `linear-gradient(${angle}, ${colorStop1}, ${colorStop2}, ${colorStop3})`;
    }
}

const animatedGradientElements = document.querySelectorAll('.animated-gradient');
const headerElement = document.querySelector('.gradient-section');

let gradientStart = 0;
let headerStart = 0;

function animateGradient() {
    animatedGradientElements.forEach(element => {
        updateGradientPosition(element, gradientStart);
    });

    updateGradientPosition(headerElement, headerStart, true);

    gradientStart += 1;
    headerStart += 1;

    requestAnimationFrame(animateGradient);
}

animateGradient();