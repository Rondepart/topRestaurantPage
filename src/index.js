import './styles/style.css';
import './styles/homePage.css';
import './styles/menu.css';
import './styles/about.css';
import { createHomePageContent } from './homePage.js';
import { createMenuPageContent } from './menu.js';
import { createAboutPageContent } from './aboutPage.js';

const nav = document.querySelector('.nav-btn-wrapper');
const contentSection = document.querySelector('#content');

createHomePageContent();

//dont load page if page of the clicked button is already shown
const webPage = [{page:'home'}, {page:'menu'}, {page:'about'}];
let currentWebPage = webPage[0];

nav.addEventListener('click', (event) => {
    if (!event.target.matches('.nav-btn')) return;

    if (event.target.matches('.home-btn')) {
        if (currentWebPage.page === 'home') return;
        
        contentSection.innerHTML = '';
        createHomePageContent();
        currentWebPage = webPage[0];

    } else if (event.target.matches('.menu-btn')) {
        if (currentWebPage.page === 'menu') return;

        contentSection.innerHTML = '';
        createMenuPageContent();
        currentWebPage = webPage[1];


    } else if (event.target.matches('.about-btn')) {
        if (currentWebPage.page === 'about') return;

        contentSection.innerHTML = '';
        createAboutPageContent();
        currentWebPage = webPage[2];

    }
});