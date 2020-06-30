function planRoute() {
	let a = document.querySelector("#class-of-person").value;
	let b = document.querySelector("#transport-type").value;
	let c =  document.querySelector("#start").value;
	let d = document.querySelector("#target").value;
	
	console.log(a + b + c + d);
	
	$.post("PlanRoute", {
		classOfPerson: String(a),
		transportType: String(b),
		start: String(c),
		target: String(d)
	}, function(response, status){
		let pResponse = JSON.parse(response);
		console.log(pResponse);
		
		$("#route-time").html(pResponse.travel_time);
		
		let features;
		for (let elem of pResponse.geometries) {
			features += new ol.Feature({
				geometry: new ol.geom.LineString(
						[elem.coordinates[0],elem.coordinates[1]]
				)
			})
		}
		
		console.log("start " + String(features) + " features");
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
	})
}