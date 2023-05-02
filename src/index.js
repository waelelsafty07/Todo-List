import './style.css';
import lists from './js/listData.js';
import iterateTasks from './js/iterateTasks.js';
import eventComplete from './js/eventComplete.js';
import draggedItem from './js/draggedItem.js';

iterateTasks(lists);

eventComplete();
draggedItem();
