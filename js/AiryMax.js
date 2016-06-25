

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