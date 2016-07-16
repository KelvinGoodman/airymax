var img = new Image();
img.src = './img/plane.jpg';
img.onload = function() {
var ctx = document.getElementById('quad1Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: 8,y: 0}, {x: 5,y: 10}, {x: 10,y: 5}],
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
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }]
        }
    }
});
}

var img = new Image();
img.src = './img/plane.jpg';
img.onload = function() {
var ctx = document.getElementById('quad2Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: 8,y: 0}, {x: 5,y: 10}, {x: 10,y: 5}],
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
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }]
        }
    }
});
}

var img = new Image();
img.src = './img/plane.jpg';
img.onload = function() {
var ctx = document.getElementById('quad3Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: 8,y: 0}, {x: 5,y: 10}, {x: 10,y: 5}],
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
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }]
        }
    }
});
}

var img = new Image();
img.src = './img/plane.jpg';
img.onload = function() {
var ctx = document.getElementById('quad4Chart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
var quad1Chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [{x: 8,y: 0}, {x: 5,y: 10}, {x: 10,y: 5}],
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
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }],
			yAxes: [{
                type: 'linear',
                display: false,
				ticks: {
                    max: 15,
                    min: -10,
                    stepSize: 5
                }
            }]
        }
    }
});
}