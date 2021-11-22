
var parameters = {
    title: 'MyFirstPlot',
    target: '#myFunction',
    width: 1200,
    height:800,
    data: [{
    fn: 'sin(x)', 
    color: 'red'}       
    ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
}


functionPlot(parameters);

function changeTitle(){
    var title = document.getElementById('dynamic')
    title.innerHTML += "<u style='color:red'> Sofy</u>"
}



// Get Data fram server
var membersDiv = document.querySelector("#members");

function init() {
  console.log("page loaded");
}  

function search() {
    var bandName = document.querySelector("#bandName").value;
    console.log(bandName);
    
    
    // API for getting info about an artist/band by name
    var url = encodeURI("https://wasabi.i3s.unice.fr/api/v1/artist/name/" + bandName);

    console.log(url);
    membersDiv.innerHTML = "";
    fetch(url)
     .then(function(response) {
      // response is a json string,
      // convert it to a pure JavaScript object
       return response.json();
     })
     .then(function(band) {
        membersDiv.innerHTML += "<h2>Current and old members of " +band.name + "</h2>"
        displayMembers(band.members);
    })
     .catch(function(error) {
        console.log('Error during fetch: ' + error.message);
        membersDiv.innerHTML += "<h2>No Results</h2>"
     });
  }

function displayMembers(listOfMembers) {
          // users is a JavaScript object
        var table = document.createElement("table");
          
        listOfMembers.forEach(function(member) {
          // iterate on the array of members
          var row = table.insertRow();
          var memberNameCell = row.insertCell();
          memberNameCell.innerHTML = member.name;
          
          // Show instruments played by this member
          var instrumentCell = row.insertCell();
          member.instruments.forEach(function(inst, index) {
             instrumentCell.innerHTML += inst;
             if(index !== member.instruments.length-1) {
               instrumentCell.innerHTML += ",";
             }
          });
          var activeYearsCell = row.insertCell();
          activeYearsCell.innerHTML += member.begin;
          if(member.end !== "") {
            activeYearsCell.innerHTML += " - " + member.end;
          } else {
            activeYearsCell.innerHTML += " - still active in band";
          }
          
        });
      membersDiv.appendChild(table);
}

// Get Geolocation
function getLocation(e) { 
    e.preventDefault();
    if (!navigator.geolocation) {
      alert("Browser doesn't support geolocation");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  
  // Get current position successfully
  function success(position) {
    var map, marker,
        latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    
    // Instance map using leaflet
    map = L.map('map').setView([latitude, longitude], 13);
    
    // Tile layer using key api at cloudmade.com
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      key: '760506895e284217a7442ce2efe97797',
      styleId: 103288,
      maxZoom: 16
    }).addTo(map);
  
    // Marker using leaflet
    marker = L.marker([latitude, longitude]).addTo(map);
  
    // Popup in leaflet
    marker.bindPopup('<p>Your location</p>').openPopup();
  }
  

// 

paperScript = function() {
	var mousePoint = view.center;
	var amount = 25;
	var colors = ['red', 'white', 'blue', 'white'];

	for (var i = 0; i < amount; i++) {
		var rect = new Rectangle([0, 0], [25, 25]);
		rect.center = mousePoint;
		var path = new Path.Rectangle(rect, 6);
		path.fillColor = colors[i % 4];
		var scale = (1 - i / amount) * 20;
		path.scale(scale);
		
	}

	function onMouseMove(event) {
		mousePoint = event.point;
	}

	var children = project.activeLayer.children;

	function onFrame(event) {
		for (var i = 0, l = children.length; i < l; i++) {
			var item = children[i];
			var delta = (mousePoint - item.position) / (i + 5);
			item.rotate(Math.sin((event.count + i) / 10) * 7);
			if (delta.length > 0.1)
				item.position += delta;
		}
	}
}

var a = document.createElement('script')
a.setAttribute('type', 'text/paperscript');
a.setAttribute('canvas', 'canvas');
var src = paperScript.toString();
a.appendChild(document.createTextNode(src.substring(src.indexOf('\n') + 1, src.lastIndexOf('\n'))));
document.body.appendChild(a);