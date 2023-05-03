import './style.css';
import iterateTasks from './js/iterateTasks.js';
import eventComplete from './js/eventComplete.js';
import draggedItem from './js/draggedItem.js';
import addNewTaskToList from './js/addNewTask.js';
import { buttonAction } from './js/removeTask.js';

iterateTasks();

eventComplete();

draggedItem();

buttonAction();

addNewTaskToList();
