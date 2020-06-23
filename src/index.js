import './main.scss';
import data from './js/data';
import { renderData, filterList } from './js/dataControl';
import { elements } from './js/base';

let role = null;
let level = null;
let languages = [];
let tools = [];
let tracker = false;
let newData = [...data];

const test = (type, test) => {
  newData = newData.filter(el => {
    if (type === 'role') {
      return el.role === test;
    } else if (type === 'level') {
      return el.level === test;
    } else if (type === 'languages') {
      return el.languages.includes(test);
    } else if (type === 'tools') {
      return el.tools.includes(test);
    }
  });
};

// load all initial data on load
window.addEventListener('load', () => {
  renderData(data);
});

// add click to each buttons
elements.main.addEventListener('click', e => {
  if (e.target.className === 'main__clear') {
    elements.filterBar.style.display = 'flex';

    if (e.target.id === 'role') {
      if (role === null) {
        role = e.target.textContent;
        filterList(role, 'role');
        test('role', role);
      }
    } else if (e.target.id === 'level') {
      if (level === null) {
        level = e.target.textContent;
        filterList(level, 'level');
        test('level', level);
      }
    } else if (e.target.id === 'languages') {
      if (languages.length < 3 && !languages.includes(e.target.textContent)) {
        languages.push(e.target.textContent);
        filterList(languages[languages.length - 1], 'languages');
        test('languages', languages[languages.length - 1]);
      }
    } else if (e.target.id === 'tools') {
      if (tools.length < 2 && !tools.includes(e.target.textContent)) {
        tools.push(e.target.textContent);
        filterList(tools[tools.length - 1], 'tools');
        test('tools', tools[tools.length - 1]);
      }
    }

    renderData(newData);
    tracker = true;
  }
});

// event to allow element disapper from the filter bar list
elements.filterList.addEventListener('click', e => {
  if (
    e.target.className === 'header__clear' ||
    e.target.className === 'header__image'
  ) {
    if (e.target.id === 'role') {
      const el = document.querySelector(e.target.parentNode.id);
      console.log(e.target.parentNode.id);
      //e.target.parentNode.parentNode.removeChild(el);
      //role = null;
    }
  }
});

elements.filterBtn.addEventListener('click', () => {
  if (tracker) {
    role = null;
    level = null;
    languages = [];
    tools = [];
    newData = [...data];
    renderData(newData);
    elements.filterList.innerHTML = '';
    elements.filterBar.style.display = 'none';
    tracker = false;
  }
});
