function testsList(allTests) {
    document.querySelector('.test-cards').innerHTML = '';
    for (let i = 0; i < allTests.length; i++) {
        console.log(allTests[i].title);
        let card = document.createElement('a');
        card.className = 'card-link';
        card.href = `test.html?test=${i}`;
        card.innerHTML = `
        <div class="test-card">
        <p>${allTests[i].title}</p>
            <div class="test-card-content">
                <img src="img/${allTests[i].image}">
                <div class="test-card-text">
                    <p>${allTests[i].shortDescription}</p>
                        <span class="learn-more">
                            <p>Show More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <path
                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z">
                                    </path>
                                </svg>
                        </span>
                </div>
            </div>
        </div>
        `;
        document.querySelector('.test-cards').appendChild(card);
    }
}
testsList(tests);