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
        console.log(event.target.value);
    });

    return div;
}

let tabsUrl = 'https://lambda-times-backend.herokuapp.com/topics';

axios
    .get(tabsUrl)
    .then(response => {
        let topicContainer = document.querySelector('.topics');
        response.data.topics.forEach(topic => {
            let topicItem = Tab(topic);
            topicContainer.append(topicItem);
        });
    })
    .catch(e => console.log(e));
