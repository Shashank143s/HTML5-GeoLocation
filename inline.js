//GLobal Variables
var position;
var positionDetails;

// request permission on page load
// function notifyMe(){
//   if (Notification.permission === "default") {
//     Chrome.alert('Desktop notifications not available in your Browser.');
//     return;
//   }
// //  Notification.permission = "granted";
//   //Notification.requestPermission();
//   console.log(Notification.permission);
//     var notification = new Notification('New Notification', {
//       icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
//       body: "Hey there! You've been notified!",
//       requireInertaction : true,
//     });
//
//     notification.onclick = function () {
//       window.open("http://stackoverflow.com/a/13328397/1269037");
//     };
//     console.log(notification);
// }

//FUNCTION TO FECTH CORRDINATES
 function fetchCoordinates(){
    position = document.getElementById("position");
    positionDetails = document.getElementById("positionDetails");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else{
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
 }

//callback method on success
 function showMap(pos){
      var latlong = pos.coords.latitude + "," + pos.coords.longitude;
      // Set Google map source url
      var mapLink = "https://maps.googleapis.com/maps/api/staticmap?center="+latlong+"&zoom=16&size=400x300&output=embed";
      // Create and insert Google map
      document.getElementById("embedMap").innerHTML = "<img alt='Map Holder' src='"+ mapLink +"'>";
      position.innerHTML = "Your current position is (" + "Latitude: " + pos.coords.latitude + ", " + "Longitude: " + pos.coords.longitude + ")";
      positionDetails.innerHTML = pos.coords;
      console.log(pos.coords);
 }

//callback method on failure
 function showError(error){
    if(error.code == 1){
        position.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
    }
    else if(error.code == 2){
        position.innerHTML = "The network is down or the positioning service can't be reached.";
    }
    else if(error.code == 3){
        position.innerHTML = "The attempt timed out before it could get the location data.";
    }
    else{
        position.innerHTML = "Geolocation failed due to unknown error.";
    }
 }
