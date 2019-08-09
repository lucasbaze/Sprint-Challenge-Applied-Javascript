// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCreator({ headline, authorPhoto, authorName }) {
    let card = document.createElement('div');
    let headlineText = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('span');

    card.classList.add('card');
    headlineText.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headlineText.textContent = headline;
    img.src = authorPhoto;
    name.textContent = authorName;

    imgContainer.append(img);
    author.append(imgContainer);
    card.append(headlineText, author, name);

    return card;
}

let articlesUrl = 'https://lambda-times-backend.herokuapp.com/articles';

axios
    .get(articlesUrl)
    .then(response => {
        let cardContainer = document.querySelector('.cards-container');
        console.log(response);
        let entries = Object.entries(response.data.articles);
        console.log(entries);

        var result = entries.forEach(item => {
            let [topic, array] = item;
            array.forEach(article => {
                let cardArticle = articleCreator(article);
                cardArticle.dataset.topic = topic;
                cardContainer.append(cardArticle);
            });
        });

        console.log(result);
    })
    .catch(e => console.log(e));
