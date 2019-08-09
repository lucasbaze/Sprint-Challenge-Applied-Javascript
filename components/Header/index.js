// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let header = document.createElement('div');
    let span = document.createElement('span');
    let h1 = document.createElement('h1');
    let spanTemp = document.createElement('span');

    span.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    spanTemp.textContent = '98';

    header.classList.add('header');
    span.classList.add('date');
    spanTemp.classList.add('temp');

    header.append(span, h1, spanTemp);

    let headerContainer = document.querySelector('.header-container');

    headerContainer.append(header);
}

Header();
