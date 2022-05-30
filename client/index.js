import { title, content } from './assets/content.json'
import './index.scss';
console.log('here', title);

const titleEl = document.createElement('div');
titleEl.className = 'main-title';
titleEl.innerText = title;

const bodyEl = document.createElement('div');
bodyEl.className = 'main-body';
bodyEl.innerText = content;

const mainEl = document.querySelector('.main');
mainEl.appendChild(titleEl);
mainEl.appendChild(bodyEl);
