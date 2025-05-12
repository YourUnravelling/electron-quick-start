/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

//import {renderTableVisualisation} from './main.js';
//require('./main.js')

window.onload = function() {
  addSubObjectOptions()
}

document.getElementById('loadCanvasPhButton').addEventListener('click', renderTableVisualisation);
document.getElementById('loadTestOptions').addEventListener('click', addSubObjectOptions);

function renderTableVisualisation() {

    //console.log(document.createElement('canvas', { id: 'canvasVisualisation' }));
    const canvas = document.createElement('canvas')
    canvas.id = 'canvasVisualisation'

    //canvas = new HTMLElement('canvas', { id: 'canvasVisualisation' });
  
    //canvas = createElement('canvas', { id: 'canvasVisualisation' });
    document.body.appendChild(canvas);

    canvas.backgroundColor = 'white'; 
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
  //  document.canvas
  }


function addSubObjectOptions() {
    const backgroundColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const background = document.createElement('div');
    background.style = 'margin: 10px; padding: 10px; background-color: white;';
    const chosenColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    background.style.backgroundColor = chosenColor
    background.style.borderColor = chosenColor;

    //background.style.opacity = 0.5;

    const placeHolderButton = document.createElement('button', { class: 'default-button' });
    background.appendChild(placeHolderButton);

    document.getElementById("content").appendChild(background);
    console.log('Background color set to:', background.style.backgroundColor);
}
addSubObjectOptions();
console.log('Script done');