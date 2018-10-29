import './sass/styles.scss';
import './libs/App.ts';
import { startDrawing } from './libs/App';
var $ = require("jquery");


$( document ).ready(function() {
    startDrawing();
});