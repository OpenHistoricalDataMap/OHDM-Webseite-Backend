function exportMap() {
	
	$.post("ExportRequest", {
		status: "false",
		name: document.querySelector("#export-name").value,
		polygon: buildPoly(),
		date: dateSelect
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
	})
	//window.location.replace("status.jsp");
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