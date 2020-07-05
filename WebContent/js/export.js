document.querySelector(".navbar-container").addEventListener("load", getStatus());

/**
 * 
 * @returns
 */
function exportMap() {
	dataDate = dateSelect;
	dataName = document.querySelector("#export-name").value;
	dataDatatype = document.querySelector("#datatype").value;
	dataPolygon = buildPoly();
	
	$.post("ExportRequest", {
		status: "false",
		date: dataDate,
		name: dataName,
		datatype: dataDatatype,
		polygon: dataPolygon
	}, function(response, status){
		if(status == "success"){
			window.alert("Export erfolgreich in Auftrag gegeben." );
			getStatus();
		}
	})
}

/**
 * 
 * @returns
 */
function getStatus() {
	$.post("ExportRequest", {
		status: "true"
	}, function(response){
		if(response.status === 200){
			
			let data = response.data
			let list = "";

			for (let i = 0; i < data.length; i++) {
				let state = "";
				switch (data[i].status) {
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
					state = null;
					break;
				}
				list += ("<div class='list-container'>" + "<div class='list-entry' id='name'><p>"
						+ data[i].mapName + "</p></div>"
						+ "<div class='list-entry' id=\"date\"><p>" + data[i].date
						+ "</p></div>" + "<div class='list-entry' id='status'><p>" + state + "</p></div>"
						+ "<div class='list-entry' id='poly-btn-container'> <button id='" + data[i].mapName + "' class='poly-btn'> Herunterladen </button> </div>"
						+ "</div>");
			}
			
			$("#export-content").html(list);
			
			let btns = document.querySelectorAll(".poly-btn");
			
			for (let btn of btns) {
				btn.addEventListener("click", function(e) {
				getDownload(e.target.id);
			})
			}
			
		}
	})
}

/**
 * 
 * @returns
 */
function toStatus() {
	window.location.href = "/ohdm/status.jsp";
}

/**
 * 
 * @param mapName
 * @returns
 */
function getDownload(mapName) {
	$.post("http://141.45.146.200:5001/maps?name=" + mapName, function() {
		
	})
}


/**
 * 
 * @returns
 */
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