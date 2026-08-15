function createAboutPageContent() {
    const contentPage = document.querySelector('#content');

    //append about data into about card
    function aboutCard(title, desc) {
        const aboutCard = document.createElement('div');
        aboutCard.classList.add('about-card');

        const aboutCardTitle = document.createElement('div');
        aboutCardTitle.classList.add('about-title');

        const aboutCardDesc = document.createElement('div');
        aboutCardDesc.classList.add('about-desc');

        aboutCardTitle.textContent = title;
        aboutCardDesc.textContent = desc;

        aboutCard.append(aboutCardTitle, aboutCardDesc);
        contentPage.appendChild(aboutCard);
    }

    //about page data
    const aboutData = [
        {
            title: 'Our Story:',
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, consequatur tenetur! 
                    Illo natus doloremque sed quaerat, consequuntur, veritatis nesciunt deserunt aut, labore 
                    dolorum qui veniam! Sint ipsa asperiores non facilis!`
        },
        {
            title: 'Our Team:',
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, consequatur tenetur! 
                    Illo natus doloremque sed quaerat, consequuntur, veritatis nesciunt deserunt aut, labore 
                    dolorum qui veniam! Sint ipsa asperiores non facilis!`
        },
        {
            title:'Our Vision:',
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, consequatur tenetur! 
                    Illo natus doloremque sed quaerat, consequuntur, veritatis nesciunt deserunt aut, labore 
                    dolorum qui veniam! Sint ipsa asperiores non facilis!`
        },
    ]

    aboutData.forEach(aboutData => {
        aboutCard(aboutData.title, aboutData.desc);
    });
}

export {createAboutPageContent}