function createMenuPageContent() {
    const contentPage = document.querySelector('#content');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');

    menuHeader.textContent = 'Browse our coffee';

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    contentPage.append(menuHeader, menuContent);

    //attach menu content to card
    function createMenuCard(item, desc) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const menuDesc = document.createElement('div');
        menuDesc.classList.add('menu-desc');

        menuItem.textContent = item;
        menuDesc.textContent = desc;

        menuCard.append(menuItem, menuDesc);
        menuContent.appendChild(menuCard);
        contentPage.appendChild(menuContent);
    }

    //menu content
    const menuData = [
        {
            item: 'Tin Master Special',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut 
                        dignissimos velit vitae? Excepturi eaque, error voluptatibus omnis vel debitis quaerat
                         doloremque cupiditate amet molestiae voluptatum quod nobis, eos explicabo provident?`
        },
        {
            item: 'Espresso',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut 
                        dignissimos velit vitae? Excepturi eaque, error voluptatibus omnis vel debitis quaerat
                         doloremque cupiditate amet molestiae voluptatum quod nobis, eos explicabo provident?`
        },
        {
            item: 'Black Tea Latte',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut 
                        dignissimos velit vitae? Excepturi eaque, error voluptatibus omnis vel debitis quaerat
                         doloremque cupiditate amet molestiae voluptatum quod nobis, eos explicabo provident?`
        },
        {
            item: 'Fruit Foam Lemon',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut 
                        dignissimos velit vitae? Excepturi eaque, error voluptatibus omnis vel debitis quaerat
                         doloremque cupiditate amet molestiae voluptatum quod nobis, eos explicabo provident?`
        },
        {
            item: 'Mochaccino',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut 
                        dignissimos velit vitae? Excepturi eaque, error voluptatibus omnis vel debitis quaerat
                         doloremque cupiditate amet molestiae voluptatum quod nobis, eos explicabo provident?`
        },
        {
            item: 'Moonrock Mochaccino',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut 
                        dignissimos velit vitae? Excepturi eaque, error voluptatibus omnis vel debitis quaerat
                         doloremque cupiditate amet molestiae voluptatum quod nobis, eos explicabo provident?`
        }
    ]

    menuData.forEach(menuData => {
        createMenuCard(menuData.item, menuData.desc);
    });
}

export {createMenuPageContent}