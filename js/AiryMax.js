

function searchFlights() {
	var request = buildRequest();
$.ajax({
type: "POST",
//Set up your request URL and API Key.
url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyB1hdwXZils6BVgIfrkvJdtEdJnyjc-T8E", 
contentType: 'application/json', // Set Content-type: application/json
dataType: 'json',
// The query we want from Google QPX, This will be the variable we created in the beginning
data: JSON.stringify(request),
success: function (data) {
//Once we get the result you can either send it to console or use it anywhere you like.
buildFlightList(data);
document.getElementById("flightInfo").innerHTML = JSON.stringify(data);
},
error: function(){
//Error Handling for our request
alert("Access to Google QPX Failed.");
}
});
}

function buildRequest(){
	var FlightRequest = {
"request": {
"slice": [
{
"origin": $('#origin').val(),
"destination": $('#destination').val(),
"date": $('#departDate').val().toString()
}
],
"passengers": {
"adultCount": 1,
"infantInLapCount": 0,
"infantInSeatCount": 0,
"childCount": 0,
"seniorCount": 0
},
"solutions": 20,
"refundable": false
}
};
	return FlightRequest;
}

function buildFlightList(flightData){
	var chartData = {quad1: [], quad2: [], quad3: [], quad4: []};
	var priceSum = 0;
	var durationSum = 0;
	for (optionNum in flightData.trips.tripOption)
	{
		priceSum += parseInt(flightData.trips.tripOption[optionNum].saleTotal.split("USD")[1]);
		durationSum += parseInt(flightData.trips.tripOption[optionNum].slice[0].duration);
	}
	
	chartData.avgPrice = priceSum / flightData.trips.tripOption.length;
	chartData.avgDuration = durationSum / flightData.trips.tripOption.length;
	
	for (optionNum in flightData.trips.tripOption)
	{
		var flight = {};
		flight.saleTotal = flightData.trips.tripOption[optionNum].saleTotal.split("USD")[1];
		flight.duration = flightData.trips.tripOption[optionNum].slice[0].duration;
		flight.layovers = flightData.trips.tripOption[optionNum].slice[0].segment.length - 1;
		
		//determine quadrant for data to be plotted in
		if ((flight.saleTotal <= chartData.avgPrice)&&(flight.duration <= chartData.avgDuration)){
			chartData.quad1.push(flight);
		}
		else if ((flight.saleTotal >= chartData.avgPrice)&&(flight.duration <= chartData.avgDuration)){
			chartData.quad2.push(flight);
		}
		else if ((flight.saleTotal >= chartData.avgPrice)&&(flight.duration >= chartData.avgDuration)){
			chartData.quad3.push(flight);
		}
		else if ((flight.saleTotal <= chartData.avgPrice)&&(flight.duration >= chartData.avgDuration)){
			chartData.quad4.push(flight);
		}
	}
	alert(chartData.quad1.length);
	alert(chartData.quad2.length);
	alert(chartData.quad3.length);
	alert(chartData.quad4.length);
	alert(chartData.avgPrice);
	alert(chartData.avgDuration);
}