function exportMap() {
	dataDate = dateSelect;
	dataName = document.querySelector("#export-name").value;
	dataPolygon = buildPoly();
	
	console.log(dataDate, dataName);
	
	
	$.post("ExportRequest", {
		status: "false",
		name: dataName,
		polygon: dataPolygon,
		date: dataDate
	}, function(response, status){
		if(status == "success"){
			window.alert("Export erfolgreich in Auftrag gegeben." );
		}
		console.log(response);
	})
}

function getStatus() {
	$.post("ExportRequest", {
		status: "true"
	}, function(response, status){
		console.log(response);
		/*console.log(response.length)
		for (var i = 0; i < response.length; i++) {
			let state;
			switch(resonse.status){
				case "REQUESTED":
					state = "Angefragt";
					break;
				case "DOWNLOADING":
					state = "Lädt herunter";
					break;
				case "CONVERTING":
					state = "Konvertiert";
					break;
				case "DONE":
					state = "Fertig";
					break;
				case "ERROR":
					state = "Fehlerhaft";
					break;
				default:
					state = undefined
					break;
			}
			
			document.querySelector('.content').innerHTML = '<div class="list-container">' + 
				'<div class="list-entry" id="name"><p>' + response.mapName + '</p></div>' + 
				'<div class="list-entry" id="date"><p>' + response.date + '</p></div>' +
				'<div class="list-entry" id="status"><p>' + state + '</p></div>' +
				'<div class="list-entry" id="poly-btn-container"> <button class="poly-btn"> Herunterladen </button> </div>' +
			'</div>';
		}*/
	})
	
}

function buildPoly() {
	let poly = '';

	for(let i = 0; i < coordinatesPolygon.length; i++){
		if(i != coordinatesPolygon.length-1){
			poly += coordinatesPolygon[i] + '_';
		} else {
			poly += coordinatesPolygon[i];
		}
	}
	return poly;
}