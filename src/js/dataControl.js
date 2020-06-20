import { elements } from './base';

const languages = current => `
    <li class="main__item">
    <button class="main__clear">${current}</button>
    </li>`;

const processData = current => {
  const markup = `
        <div class="main__items" id="${current.id}">
        <div class="main__indicator" ${
          current.id === 1 || current.id === 2
            ? ''
            : 'style="background-color:transparent"'
        }></div>
        <div class="main__sep">
            <div class="main__right">
            <img
                src="${current.logo}"
                alt="thumbnail"
                class="main__thumb"
            />
            <div class="main__details">
                <div class="main__top">
                <span>${current.company}</span>
                <span ${current.new ? '' : 'style="display:none"'}>new!</span>
                <span ${
                  current.featured ? '' : 'style="display:none"'
                }>Featured</span>
                </div>
                <h3 class="main__heading">${current.position}</h3>
                <div class="main__bottom">
                <span>${current.postedAt}</span> . 
                <span>${current.contract}</span> .
                <span>${current.location}</span>
                </div>
            </div>
            </div>
            <div class="main__left">
            <ul class="main__list">
                
                <li class="main__item">
                <button class="main__clear">${current.role}</button>
                </li>
                <li class="main__item">
                <button class="main__clear">${current.level}</button>
                </li>

                ${current.languages.map(el => languages(el)).join('')}
                
            </ul>
            </div>
        </div>
        </div>
    `;

  elements.main.insertAdjacentHTML('beforeend', markup);
};

export const renderData = data => {
  data.forEach(cur => {
    processData(cur);
  });
};
