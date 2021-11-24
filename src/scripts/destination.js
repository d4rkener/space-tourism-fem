import { destinations } from '../data/data.json';
import imageMoon from '../assets/destination/image-moon.png';
import imageMars from '../assets/destination/image-mars.png';
import imageEuropa from '../assets/destination/image-europa.png';
import imageTitan from '../assets/destination/image-titan.png';

// Setting images to JSON file
destinations[0].images.png = imageMoon;
destinations[1].images.png = imageMars;
destinations[2].images.png = imageEuropa;
destinations[3].images.png = imageTitan;

// Variables
const destinationImage = document.getElementById('destinationImage');
const destinationName = document.getElementById('destinationName');
const destinationParagraph = document.getElementById('destinationParagraph');
const destinationDistance = document.getElementById('destinationDistance');
const distanceTravel = document.getElementById('distanceTravel');
const switchElements = document.querySelectorAll('#switch');

// Functions
const getDestinations = (button) => {
  const information = destinations[button.getAttribute('data-value')];

  destinationImage.src = information.images.png;
  destinationName.textContent = information.name;
  destinationParagraph.textContent = information.description;
  destinationDistance.textContent = information.distance;
  distanceTravel.textContent = information.travel;

  switchElements.forEach((switchButton) => {
    switchButton.children[0].classList.remove('active');
  });

  button.children[0].classList.add('active');
};

// Event Listeners
switchElements.forEach((button) => {
  button.addEventListener(
    'click',
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      getDestinations(button),
    // eslint-disable-next-line function-paren-newline
  );
});
