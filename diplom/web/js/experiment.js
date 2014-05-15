function getRandomInt (min, max) {
	var rand = min + Math.random()*(max+1-min);
	return rand = rand^0;
}

function Experiment (params) {
	params = params || {};
	this.size = params.size || false;
	this.changeDistance = params.changeDistance || false;
	this.elem = params.elem || $('#test');

	this.sizeArr = [40, 20, 10, 20];
	this.distanceArr = ['180', '340', '500'];

	if (this.size && this.changeDistance) {
		this.sizeArr = [40, 20, 40, 10];
		this.distanceArr = ['500', '250', '125', '700']
	}

	this.colorArr = ['red', 'green', 'blue', 'orange'];
	this.callback = (params.callback) ? params.callback : function () {}

	this.padding = 60;
	this.width = this.elem.width();
	this.height = this.elem.height();
	this.time = {
		type0: [],
		type1: [],
		type2: [],
		type3: []
	}

	this.colorNumb = params.colorNumb || false;
	this.noDevice = params.noDevice || false;

	this.init();
}

Experiment.prototype.init = function() {
	$('.tooltip').hide();
	this.addBallPair();
};

Experiment.prototype.genXYPair = function(distance) {
	var self, x1, x2, y2, y1, counter = 0;
	self = this;

	x1 = getRandomInt(this.padding, this.width - this.padding);
	y1 = getRandomInt(this.padding, this.height - this.padding);

	genSecondCoord();
	function genSecondCoord () {
		var u = Math.random() * 2 * Math.PI;

		_x2 = x1 + distance * Math.cos(u);
		_y2 = y1 + distance * Math.sin(u);

		if (
			(_x2 > self.padding && _x2 < self.width - self.padding)
			&&
			(_y2 > self.padding && _y2 < self.height - self.padding)
		) {
			x2 = _x2;
			y2 = _y2;
		} else {
			counter++
			if (counter > 100) {
				x1 = getRandomInt(self.padding, self.width - self.padding);
				y1 = getRandomInt(self.padding, self.height - self.padding);
			}
			genSecondCoord();
		}
	}

	return {
		first: [x1, y1],
		second: [x2, y2]
	}
};

Experiment.prototype.addBallPair = function(colorNumb, noDevice) {
	var numb;

	// 4 exp
	if (this.size && this.changeDistance) {
		numb = (colorNumb) ? colorNumb : getRandomInt(0, 3); // случайный цвет
	}
	else {
		numb = (colorNumb) ? colorNumb : getRandomInt(0, 2); // случайный цвет
	}

	var coord, size, ball1, ball2, self;

	self = this;

	if (!colorNumb) {

		var min, max;

		if (this.size && this.changeDistance) {
			min = Math.min(this.time.type0.length, this.time.type1.length, this.time.type2.length, this.time.type3.length);
			max = Math.max(this.time.type0.length, this.time.type1.length, this.time.type2.length, this.time.type3.length);
		} else {
			min = Math.min(this.time.type0.length, this.time.type1.length, this.time.type2.length);
			max = Math.max(this.time.type0.length, this.time.type1.length, this.time.type2.length);
		}

		var delta = max - min;
		var maxDelta = 3;

		if (delta >= maxDelta) {
			for (var i = 0; i < 4; i++) {
				if (this.time["type" + i].length == min) {
					numb = i;
					break
				}
			}
		}
	}

	// random color
	if (numb == 0) { // red

		coord = (this.changeDistance) ? this.genXYPair(this.distanceArr[0]) : this.genXYPair(this.distanceArr[0]);
		size = (this.size) ? this.sizeArr[0] : this.sizeArr[1];

		ball2 = this.addBall({
			x: coord.second[0],
			y: coord.second[1],
			color: this.colorArr[numb],
			size: size,
			disable: 'disable'
		});
	}
	else if (numb == 1) {
		coord = (this.changeDistance) ? this.genXYPair(this.distanceArr[1]) : this.genXYPair(this.distanceArr[0]);

		ball2 = this.addBall({
			x: coord.second[0],
			y: coord.second[1],
			color: this.colorArr[numb],
			size: this.sizeArr[1],
			disable: 'disable'
		});
	}
	else if (numb == 2) {
		coord = (this.changeDistance) ? this.genXYPair(this.distanceArr[2]) : this.genXYPair(this.distanceArr[0]);
		size = (this.size) ? this.sizeArr[2] : this.sizeArr[1];

		ball2 = this.addBall({
			x: coord.second[0],
			y: coord.second[1],
			color: this.colorArr[numb],
			size: size,
			disable: 'disable'
		});
	} else if (numb == 3) {
		coord = this.genXYPair(this.distanceArr[3]);
		size = this.sizeArr[3];

		ball2 = this.addBall({
			x: coord.second[0],
			y: coord.second[1],
			color: this.colorArr[numb],
			size: size,
			disable: 'disable'
		});
	}

	ball1 = this.addBall({
		x: coord.first[0],
		y: coord.first[1],
		color: 'default',
		withText: true
	});


	var time1;

	if (noDevice) {

		ball1[1].text('Наведите сюда');
		ball2[1].text('Наведите сюда');

		var moveTimer = '';
		ball1[0].mouseenter(function () {
			ball1[1].text('Ждите')
			moveTimer = setTimeout(function () {
				time1 = new Date()

				ball1[1].css('display', 'none');
				ball2[0].removeClass('disable');
				ball2[1].css('display', '');

				moveTimer = null;
			}, 500);
		});

		ball1[0].mouseleave(function () {
			if (moveTimer !== null){
				moveTimer.clearTimeout();
				ball1[1].text('Наведите сюда');
			}
		});

		ball2[0].mouseenter(function () {
			if ($(this).hasClass('disable')) return;

			ball1[0].remove();
			ball1[1].remove();
			ball2[0].remove();
			ball2[1].remove();

			var time2 = new Date()
			var delta = time2 - time1;


			self.time['type' + numb].push(delta);
			self.addBallPair()

			if (self.size && self.changeDistance) {
				if (self.time.type1.length >= 5 && self.time.type2.length >= 5 && self.time.type0.length >= 5 && self.time.type3.length >= 5) {
					$('.tooltip').show();
				}
			} else {
				if (self.time.type1.length >= 5 && self.time.type2.length >= 5 && self.time.type0.length >= 5) {
					$('.tooltip').show();
				}
			}

			self.callback(self.time);
		});
	} else {
		ball1[0].click(function () {
			ball1[1].css('display', 'none');
			ball2[0].removeClass('disable');
			ball2[1].css('display', '');

			time1 = new Date()
		});

		ball2[0].click(function () {
			if ($(this).hasClass('disable')) return;

			ball1[0].remove();
			ball1[1].remove();
			ball2[0].remove();
			ball2[1].remove();

			var time2 = new Date()
			var delta = time2 - time1;


			self.time['type' + numb].push(delta);
			self.addBallPair()

			if (self.time.type1.length >= 5 && self.time.type2.length >= 5 && self.time.type0.length >= 5) {
				$('.tooltip').show();
			}

			self.callback(self.time);
		});
	}
};

Experiment.prototype.addBall = function(params) {
	params = params || {}
	params.color = params.color || ''
	params.size = (params.size) ? params.size : this.sizeArr[1]
	params.disable = params.disable || false
	params.withText = (params.withText) ? true : false

	_text = 'Нажми на меня!';

	var ball = '', text = '';
	var mX = params.size/2 * -1
	var mY = params.size/2 * -1

	ball += '<i style="';
		ball += 'margin-left:' + mX + 'px; '
		ball += 'margin-top:' + mY + 'px; '
		ball += 'width:' + params.size + 'px; ';
		ball += 'height:' + params.size + 'px; ';
		ball += 'left: ' + params.x + 'px; ';
		ball += 'top: ' + params.y + 'px;'
	ball += '"';

	ball += ' class="'
	ball += params.color + ' '
	ball += params.disable + ' '
	ball += '"></i>'

	var tX = params.x;
	var tY = +params.y - mY + 5 ;

	text += '<span class="text" style="';
		text += 'top:';
		text += tY;
		text += 'px;';
		text += 'left:';
		text += tX;
		text += 'px;';
		if (!params.withText){
			text += 'display:none';
		}
	text += '">';
	text += _text;
	text += '</span>';

	var jBall = $(ball);
	var jText = $(text);
	this.elem.append(jBall);
	this.elem.append(jText);

	return [jBall, jText];
};