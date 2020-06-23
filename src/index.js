import './main.scss';
import data from './js/data';
import { renderData, filterList } from './js/dataControl';
import { elements } from './js/base';

let role = null;
let level = null;
let languages = [];
let tools = [];
let tracker = false;
let tracker2 = false;
let newData = [...data];
let update = [...data];
let ids = [1, 1];

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

const updateTest = () => {
  if (role) {
    update = update.filter(el => {
      return el.role === role;
    });
  }

  if (level) {
    update = update.filter(el => {
      return el.level === level;
    });
  }

  if (languages.length !== 0) {
    languages.forEach(el => {
      update = update.filter(cur => {
        return cur.languages.includes(el);
      });
    });
  }

  if (tools.length !== 0) {
    tools.forEach(el => {
      update = update.filter(cur => {
        return cur.tools.includes(el);
      });
    });
  }

  return update;
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
        filterList(languages[languages.length - 1], `languages${ids[0]}`);
        test('languages', languages[languages.length - 1]);
        ids[0]++;
      }
    } else if (e.target.id === 'tools') {
      if (tools.length < 2 && !tools.includes(e.target.textContent)) {
        tools.push(e.target.textContent);
        filterList(tools[tools.length - 1], `tools${ids[1]}`);
        test('tools', tools[tools.length - 1]);
        ids[1]++;
      }
    }

    renderData(newData);
    tracker = true;
  }
});

// event to allow element disapper from the filter bar list
elements.filterList.addEventListener('click', e => {
  if (e.target.closest('.header__list')) {
    const el = document.getElementById(e.target.closest('.header__list').id);
    if (e.target.id === 'role') {
      el.parentNode.removeChild(el);
      role = null;
    } else if (e.target.id === 'level') {
      el.parentNode.removeChild(el);
      level = null;
      test('level', level);
    } else if (e.target.id.includes('languages')) {
      languages = languages.filter(ell => !el.textContent.includes(ell));
      el.parentNode.removeChild(el);
    } else if (e.target.id.includes('tools')) {
      tools = tools.filter(ell => !el.textContent.includes(ell));
      el.parentNode.removeChild(el);
    }
  }

  if (
    role === null &&
    level === null &&
    languages.length === 0 &&
    tools.length === 0
  ) {
    tracker2 = true;
  }

  if (tracker2) {
    elements.filterBar.style.display = 'none';
    tracker2 = false;
  }

  renderData(updateTest(update));
  update = [...data];
});

elements.filterBtn.addEventListener('click', () => {
  if (tracker) {
    role = null;
    level = null;
    languages = [];
    tools = [];
    newData = [...data];
    ids = [1, 1];
    renderData(newData);
    elements.filterList.innerHTML = '';
    elements.filterBar.style.display = 'none';
    tracker = false;
  }
});
