var img = new Image();
img.src = './img/plane.jpg';
img.onload = function() {
var ctx = document.getElementById('myChart').getContext('2d');
var fillPattern = ctx.createPattern(img, 'no-repeat');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [{x:5,y:5},{x:7,y:5},{x:5,y:4},],
            borderWidth: 1,
			pointStyle: ('image', img),
			radius: 50,
			fill: false,
			borderColor: "rgba(0,0,0,0)"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
			xAxes: [{
                ticks: {
                    type: 'linear',
					position: 'top'
                }
            }]
        }
    }
});
}