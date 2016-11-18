var canvas, context, columns = 3,
  rows = 3,
  w, h, tileWidth, tileHeight;

function calcSize() {
  canvas.width = w = 510;
  canvas.height = h = 450;

  tileWidth = w / columns;
  tileHeight = h / rows;

  // context.lineWidth = 1.0;
  context.strokeStyle = 'red';
  context.fillStyle = '#000';


  render();
}

function render() {

  context.clearRect(0, 0, w, h);

  context.beginPath();


  for (var x = 0; x <= columns; x++) {
    context.moveTo(x * tileWidth, 0);
    context.lineTo(x * tileWidth, h);
  }
  for (var y = 0; y <= rows; y++) {
    context.moveTo(0, y * tileHeight);
    context.lineTo(w, y * tileHeight);
  }
  context.stroke();

}

$(document).ready(function() {
  canvas = document.getElementById('scatterPlot');
  context = canvas.getContext('2d');
  calcSize();
});