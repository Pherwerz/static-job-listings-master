import './main.scss';
import data from './js/data';
import { renderData } from './js/dataControl';

window.addEventListener('load', () => {
  renderData(data);
});
