Chart.defaults.global.legend.display = false
var img = new Image();
img.src = './img/plane.png';
img.onload = function() {
var ctx = document.getElementById('quad1Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
$('#quad1Chart').css('background-color', 'rgba(0, 167, 0, 0.2)');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: -10, y: 0}, {x: 0, y: 10}, {x: 10, y: 5}],
			borderWidth: 1,
			pointStyle: ('image', img),
			radius: 50,
			fill: false,
			borderColor: "rgba(0,0,0,0)"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
				ticks: {
                    max: 15,
                    min: -15,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
				ticks: {
                    max: 15,
                    min: 0,
                    stepSize: 5
                }
            }]
        }
    }
});
}

var img = new Image();
img.src = './img/plane.png';
img.onload = function() {
var ctx = document.getElementById('quad2Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
$('#quad2Chart').css('background-color', 'rgba(167, 167, 0, 0.2)');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: -10, y: 0}, {x: 0, y: 10}, {x: 10, y: 5}],
			borderWidth: 1,
			pointStyle: ('image', img),
			radius: 50,
			fill: false,
			borderColor: "rgba(0,0,0,0)"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
				ticks: {
                    max: 15,
                    min: -15,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
				ticks: {
                    max: 15,
                    min: 0,
                    stepSize: 5
                }
            }]
        }
    }
});
}

var img = new Image();
img.src = './img/plane.png';
img.onload = function() {
var ctx = document.getElementById('quad3Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
$('#quad3Chart').css('background-color', 'rgba(167, 0, 0, 0.2)');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: -10, y: 0}, {x: 0, y: 10}, {x: 10, y: 5}],
			borderWidth: 1,
			pointStyle: ('image', img),
			radius: 50,
			fill: false,
			borderColor: "rgba(0,0,0,0)"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
				ticks: {
                    max: 15,
                    min: -15,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
				ticks: {
                    max: 15,
                    min: 0,
                    stepSize: 5
                }
            }]
        }
    }
});
}

var img = new Image();
img.src = './img/plane.png';
img.onload = function() {
var ctx = document.getElementById('quad4Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
$('#quad4Chart').css('background-color', 'rgba(167, 167, 0, 0.2)');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: -10, y: 0}, {x: 0, y: 10}, {x: 10, y: 5}],
			borderWidth: 1,
			pointStyle: ('image', img),
			radius: 50,
			fill: false,
			borderColor: "rgba(0,0,0,0)"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
				ticks: {
                    max: 15,
                    min: -15,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
				ticks: {
                    max: 15,
                    min: 0,
                    stepSize: 5
                }
            }]
        }
    }
});
}