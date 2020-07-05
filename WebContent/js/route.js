
/**
 * 
 * @returns
 */
function planRoute() {
	let classOfPerson = document.querySelector("#class-of-person").value;
	let transportType = document.querySelector("#transport-type").value;
	let start =  document.querySelector("#start").value;
	let target = document.querySelector("#target").value;
	
	if(start === "Start" || target === "Ziel"){
		window.alert("Bitte Start- und Zielpunkt markieren.");
	} else {
		
	
	
	$("#route-time").text("Route wird berechnet...");
	
	$.post("PlanRoute", {
		classOfPerson: String(classOfPerson),
		transportType: String(transportType),
		start: String(start),
		target: String(target)
	}, function(response, status){
		if(response.status === 200){
			$("#route-time").html(response.travel_time);
		
			let features;
			for (let elem of response.geometries) {
				features += new ol.Feature({
					geometry: new ol.geom.LineString(
							[elem.coordinates[0],elem.coordinates[1]]
					)
				})
			}
			
			let routeLayer = new ol.layer.Vector({
				source: new ol.source.Vector({
					features: features
				})
			})
			
			
			let style = new ol.style.Style({
				fill: new ol.style.Fill({
				  color: [0, 128, 0]
				}),
				stroke : new ol.style.Stroke({
				  color: [0, 128, 0],
				  width: 12
				})
			})
			
			routeLayer.setStyle(style);
			
			map.addLayer(routeLayer);
			
			console.log(map.getLayers());
		} else if (response.status === 301){
			
		}
		
	});
	};
}