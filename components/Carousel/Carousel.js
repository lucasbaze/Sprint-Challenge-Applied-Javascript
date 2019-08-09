/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function moveImages(direction) {
    let images = document.querySelectorAll('.carousel-container img');
    let imagesArray = Array.from(images);

    function move(direction) {
        let currentIndex = imagesArray
            .filter(img => {
                return img.className == 'active';
            })
            .map(img => img.id);

        let index = Number(currentIndex[0]) + direction;

        if (index == 4) {
            index = 0;
        } else if (index == -1) {
            index = 3;
        }

        return index;
    }

    let imageMove = move(direction);

    images.forEach(img => {
        img.classList.remove('active');
    });

    images.forEach(img => {
        if (img.id == imageMove) {
            img.classList.add('active');
        }
    });
}

function createCarousel() {
    let carousel = document.createElement('div');
    let leftButton = document.createElement('div');
    let rightButton = document.createElement('div');

    leftButton.textContent = '<';
    rightButton.textContent = '>';

    leftButton.addEventListener('click', event => {
        moveImages(-1);
    });

    rightButton.addEventListener('click', event => {
        moveImages(1);
    });

    carousel.classList.add('carousel');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');

    let images = [
        './assets/carousel/mountains.jpeg',
        './assets/carousel/computer.jpeg',
        './assets/carousel/trees.jpeg',
        './assets/carousel/turntable.jpeg',
    ];

    carousel.append(leftButton);

    images.forEach((image, index) => {
        let img = document.createElement('img');
        img.src = image;
        img.id = index;
        if (index == 0) {
            img.classList.add('active');
        }
        carousel.append(img);
    });

    carousel.append(rightButton);

    let carouselContainer = document.querySelector('.carousel-container');

    carouselContainer.append(carousel);
}

createCarousel();
