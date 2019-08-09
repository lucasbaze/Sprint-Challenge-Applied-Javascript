// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
    let div = document.createElement('div');
    div.classList.add('tab');
    div.textContent = topic;
    div.value = topic;

    div.addEventListener('click', event => {
        let articles = document.querySelectorAll('.card');
        articles.forEach(article => {
            article.classList.remove('displayed');
        });
        articles.forEach(article => {
            if (article.dataset.topic !== event.target.value) {
                article.classList.add('displayed');
            }
        });
        console.log(articles);
    });

    return div;
}

let tabsUrl = 'https://lambda-times-backend.herokuapp.com/topics';

axios
    .get(tabsUrl)
    .then(response => {
        console.log(response);
        let topicContainer = document.querySelector('.topics');

        let allButton = document.createElement('div');
        allButton.textContent = 'ALL';
        allButton.classList.add('tab');
        allButton.value = 'all';
        allButton.addEventListener('click', event => {
            let articles = document.querySelectorAll('.card');
            articles.forEach(article => {
                article.classList.remove('displayed');
            });
        });
        topicContainer.append(allButton);

        response.data.topics.forEach(topic => {
            if (topic === 'node.js') {
                topic = 'node';
            }
            let topicItem = Tab(topic);
            topicContainer.append(topicItem);
        });
    })
    .catch(e => console.log(e));
