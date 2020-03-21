import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from 'react-github-contribution-calendar';
import * as serviceWorker from './serviceWorker';


var values = {
  '2019-07-01': 5,
  '2019-09-23': 1,
  '2019-09-26': 2,
  '2019-09-27': 3,
  '2019-09-28': 4,
  '2019-09-29': 4
}
var until = '2020-02-22';
var panelColors=[
  '#F2F2F2',
  '#BEF781',
  '#9AFE2E',
  '#74DF00',
  '#298A08'
];

var elem = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    Luv Mission Test!
    <Calendar values={values} until={until} panelColors={panelColors} />
  </React.StrictMode>,
  elem
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
