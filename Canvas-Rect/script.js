var canvas, context, columns = 3,
  rows = 3,
  w, h, tileWidth, tileHeight;

function calcSize() {
	canvas.width = 512;
	canvas.height = 452;
	w = 510;
	h = 450;

	tileWidth = w / columns;
	tileHeight = h / rows;

	// context.lineWidth = 1.0;
	context.strokeStyle = "black";
	render();
}

function render() {

	context.clearRect(0, 0, w, h);

	context.beginPath();


	for (var x = 0; x <= columns; x++) {

		if (x === 0) {
			context.moveTo(2, 2);
			context.lineTo(2, h);
		} else {
			context.moveTo(x * tileWidth, 2);
			context.lineTo(x * tileWidth, h);
		}

	}
	for (var y = 0; y <= rows; y++) {
		if (y === 0) {
			context.moveTo(2, 2);
			context.lineTo(w, 2);
		}
		else {
			context.moveTo(2, y * tileHeight);
			context.lineTo(w, y * tileHeight);
		}
	}

	fillQuadrants();
	context.stroke();

}

function fillQuadrants() {

	//Row 1

	context.fillStyle = '#b0e0e6';
	context.fillRect(2, 2, 167, 147);

	context.fillStyle = "black";
	var text = "Income / Total Return";
	context.font = '14px Segoe UI';
	context.fillText(text, 25, 74);

	context.fillStyle = '#ffb6c1';
	context.fillRect(171.3, 2, 168, 147);

	context.fillStyle = "black";
	var text = "Income / Total Return";
	context.font = '14px Segoe UI';
	context.fillText(text, 185, 74);

	context.fillStyle = '#fffacd';
	context.fillRect(341, 2, 168, 147);

	//Row 2
	context.fillStyle = '#fffacd';
	context.fillRect(2, 152, 168, 147);

	context.fillStyle = '#b0e0e6';
	context.fillRect(171.3, 151, 168, 148);

	context.fillStyle = '#ffb6c1';
	context.fillRect(341, 151, 168, 148);

	//Row 3
	context.fillStyle = '#ffb6c1';
	context.fillRect(2, 301, 168, 148);

	context.fillStyle = '#fffacd';
	context.fillRect(171.3, 301, 168, 148);

	context.fillStyle = '#b0e0e6';
	context.fillRect(341, 301, 168, 148);

	context.fillStyle = "#7cfc00";
	context.globalAlpha = 0.5;
	context.fillRect(151, 2, 40, h);
	context.fillRect(321, 2, 40, h);
	context.fillRect(2, 132, 149, 40);
	context.fillRect(2, 281, 149, 40);
	context.fillRect(191.3, 131, 130, 40);
	context.fillRect(191.3, 281, 130, 40);
	context.fillRect(361, 131, 150, 40);
	context.fillRect(361, 281, 150, 40);

}

$(document).ready(function () {
	canvas = document.getElementById('scatterPlot');
	context = canvas.getContext('2d');
	calcSize();
});