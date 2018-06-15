   var myMap;
      function initMap() {
        myMap = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.1792, lng: 44.4991},
          zoom: 14
      });
          addMarker({lat: 40.1792, lng: 44.4991});
          addMarker({lat: 40.1792, lng: 44.4787});
 //     var marker = new google.maps.Marker({
 //          position:{lat: 40.1792, lng: 44.4991},
 //       map: myMap
  //        });
          var InfoWindow = new google.maps.InfoWindow({
       content: '<h1>Dzer govazd@</h1>' 
         });
     
         marker.addListener('click', function(){
      InfoWindow.open(myMap, marker);  
         });
          function addMarker(coordinates){
              var marker = new google.maps.Marker({
           position: coordinates,
         map: myMap,
                  icon: './img/6.png'
          });
          }
          
          
      }