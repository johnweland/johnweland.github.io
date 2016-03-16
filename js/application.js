$('.chart').each(function () {
	var el = $(this); // get canvas

	var options = {
	    percent:  el.attr('data-percent') || 25,
	    subject:  el.attr('data-subject') || 25,
	    size: el.attr('data-size') || 100 ,
	    lineWidth: el.attr('data-line') || 5,
	    rotate: el.attr('data-rotate') || 0
	}

	var canvas = document.createElement('canvas');
	var span = document.createElement('span');

	span.textContent = options.subject;
	    
	if (typeof(G_vmlCanvasManager) !== 'undefined') {
	    G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');
	canvas.width = canvas.height = options.size;

	el.append(span);
	var className = options.subject.replace(" ", "");
	className = className.toLowerCase();
	el.find(span).addClass(className);
	el.append(canvas);

	ctx.translate(options.size / 2, options.size / 2); // change center
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

	//imd = ctx.getImageData(0, 0, 240, 240);
	var radius = (options.size - options.lineWidth) / 2;

	var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
	        ctx.lineCap = 'round'; // butt, round or square
			ctx.lineWidth = lineWidth
			ctx.stroke();
	};

	var color;
	switch (className) {
		case 'html5':
			color = '#F9845B';
			break;
		case 'css3':
			color = '#3079AB';
			break;
		case 'javascript':
			color = '#e59a13';
			break;
		case 'wordpress':
			color = '#838CC7';
			break;
		case 'java':
			color = '#2c9676';
			break;
		case 'android':
			color = '#5cb860';
			break;
		case 'mongodb':
			color = '#eb7728';
			break;
		default:
			color = '#555555';
			break;
		}
	span.style.color = color;
	drawCircle('#efefef', options.lineWidth, 100 / 100);
	drawCircle(color, options.lineWidth, options.percent / 100);

});