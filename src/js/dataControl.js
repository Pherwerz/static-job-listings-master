import { elements } from './base';

// return individual list depending on type[languages or tool]
const otherSkill = (current, type) => `
    <li class="main__item">
    <button class="main__clear" id="${type}">${current}</button>
    </li>`;

// process recieved data and renders it to the ui
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
                <button class="main__clear" id="role">${current.role}</button>
                </li>
                <li class="main__item">
                <button class="main__clear" id="level">${current.level}</button>
                </li>

                ${current.languages
                  .map(el => otherSkill(el, 'languages'))
                  .join('')}
                ${current.tools.map(el => otherSkill(el, 'tools')).join('')}
                
            </ul>
            </div>
        </div>
        </div>
    `;

  elements.main.insertAdjacentHTML('beforeend', markup);
};

// returns all the that passed a perticular test
export const renderData = data => {
  elements.main.innerHTML = '';

  data.forEach(cur => {
    processData(cur);
  });
};

// adds item to the filter list bar
export const filterList = (list, id) => {
  const markup = `
          <li class="header__list" id="${id}">
            ${list}
            <button class="header__clear" id="${id}">
              <img
                src="./img/icon-remove.svg"
                alt="clear"
                class="header__image"
                id="${id}"
              />
            </button>
          </li>
  `;

  elements.filterList.insertAdjacentHTML('beforeend', markup);
};
