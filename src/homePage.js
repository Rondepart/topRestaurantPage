function createHomePageContent() {
    const contentPage = document.querySelector('#content');
    
    //headline card
    const headlineCard = document.createElement('div');
    const headline = document.createElement('div');
    const headlineSubtext = document.createElement('div');

    headlineCard.classList.add('headline-card');
    headline.classList.add('headline');
    headlineSubtext.classList.add('headline-subtext');

    headline.textContent = 'Cuppa Moment';
    headlineSubtext.textContent = 'Serving coffee on the clouds, literally';

    headlineCard.append(headline, headlineSubtext);

    contentPage.appendChild(headlineCard);

    //content card
    function createContentCard(title, text) {
        const contentCard = document.createElement('div');
        const contentTitle = document.createElement('div');
        const contentText = document.createElement('div');

        contentCard.classList.add('content-card');
        contentTitle.classList.add('content-title');
        contentText.classList.add('content-text');

        contentTitle.textContent = title;
        contentText.textContent = text;

        contentCard.append(contentTitle,contentText);
        contentPage.append(contentCard);
    }

    const contentCardData = [
        {
            title: 'Dine-in',
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, 
                    sed doloribus in quos saepe nulla numquam placeat quaerat suscipit sit aliquam est 
                    consequatur beatae, esse earum ducimus iste distinctio hic?`
        },
        {
            title: 'Take-out',
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, 
                    sed doloribus in quos saepe nulla numquam placeat quaerat suscipit sit aliquam est 
                    consequatur beatae, esse earum ducimus iste distinctio hic?`,
        }
    ]

    contentCardData.forEach(cardElem => {
        createContentCard(cardElem.title, cardElem.text);
    });
}

export {createHomePageContent};