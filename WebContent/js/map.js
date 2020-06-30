/** * Scaleline ** */
var scaleLineControl = new ol.control.ScaleLine();

/** * disable map rotate (important for touchscreens) ** */
var interactions = ol.interaction.defaults({
	altShiftDragRotate : false,
	pinchRotate : false
});

/** * mouseposition coordinates ** */
var mousePositionControl = new ol.control.MousePosition({
	coordinateFormat : function(coord) {
		// coords in format xx.x°N, xx.x°W
		if (coord[0] < 0) {
			coord[0] = (coord[0] * (-1)).toFixed(2) + '°W';
		} else if (coord[0] > 0) {
			coord[0] = coord[0].toFixed(2) + '°E';
		} else {
			coord[0] = coord[0].toFixed(2) + '°';
		}
		;
		if (coord[1] < 0) {
			coord[1] = (coord[1] * (-1)).toFixed(2) + '°S';
		} else if (coord[1] > 0) {
			coord[1] = coord[1].toFixed(2) + '°N';
		} else {
			coord[1] = coord[1].toFixed(2) + '°';
		}
		;
		return (coord[1] + ', ' + coord[0]);
	},
	projection : 'EPSG:4326',
	className : 'custom-mouse-position',
	undefinedHTML : '&nbsp;'
});

/**
 * map view
 */
var view = new ol.View({
	projection : 'EPSG:3857',
	center : ol.proj.transform([ 13.40, 52.52 ], 'EPSG:4326', 'EPSG:3857'),
	zoom : 12
});


/** * map ** */
var map = new ol.Map({
	projection : 'EPSG:3857',
	pixelRatio: 1,
	layers : layers,
	loadTilesWhileAnimating : true,
	interactions : interactions,
	target : 'map',
	controls : ol.control.defaults({
		attributionOptions : ({
			collapsible : false
		})
	}).extend([ mousePositionControl, scaleLineControl ]),
	view : view,
	loadTilesWhileAnimating : true,
	renderer : 'canvas'
});


function moveend(evt) {	
	var coordinates = map.getView().calculateExtent(map.getSize());
	
	var coordinatesMax = ol.proj.transform([parseFloat(coordinates[2]), parseFloat(coordinates[3])], 'EPSG:3857', 'EPSG:4326');
	
	var coordinatesMin = ol.proj.transform([parseFloat(coordinates[0]), parseFloat(coordinates[1])], 'EPSG:3857', 'EPSG:4326');
	
	
	
	document.getElementById('max-lat').value = coordinatesMax[0].toFixed(2);
	document.getElementById('min-lat').value = coordinatesMin[0].toFixed(2);
	
	document.getElementById('max-lon').value = coordinatesMin[1].toFixed(2);
	document.getElementById('min-lon').value = coordinatesMax[1].toFixed(2);
	
}

/*  */
this.map.on('moveend', moveend())



/* Drawing Feature for Export */
var draw;
var coordinatesPolygon = [];
function addInteraction() {
    draw = new ol.interaction.Draw({
      source: layers.getLayers().get("vector"),
      type: "Polygon"
    });

	draw.on('drawend', function(evt) { 
		
		var coordinates3857 = evt.feature.getGeometry().getCoordinates();
		console.log(coordinates3857[0].length);
		
		for (let i = 0; i < coordinates3857[0].length; i++) {
			const element = coordinates3857[0][i];
			coordinatesPolygon.push(ol.proj.transform(element, 'EPSG:3857', 'EPSG:4326'));
		}
		map.removeInteraction(draw)
		
	});

    map.addInteraction(draw);
}

/* Drawing Feature for RoutePlanning */
var drawPoint; 
function addPoint(startOrTarget) {
    drawPoint = new ol.interaction.Draw({
      source: layers.getLayers().get("vector"),
      type: "Point"
    });

	drawPoint.on('drawend', function(evt) { 
		var coordinates = ol.proj.transform(evt.feature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
		if(startOrTarget){
			document.querySelector('#start').value = formatCoords(coordinates);
		} else {
			document.querySelector('#target').value = formatCoords(coordinates);
		}
		
		console.log(coordinates);
		map.removeInteraction(drawPoint)
	});

    map.addInteraction(drawPoint);
}

function formatCoords(coord) {
	// coords in format xx.x°N, xx.x°W
	if (coord[0] < 0) {
		coord[0] = (coord[0] * (-1)).toFixed(5) + '°W';
	} else if (coord[0] > 0) {
		coord[0] = coord[0].toFixed(5) + '°E';
	} else {
		coord[0] = coord[0].toFixed(5) + '°';
	}
	;
	if (coord[1] < 0) {
		coord[1] = (coord[1] * (-1)).toFixed(5) + '°S';
	} else if (coord[1] > 0) {
		coord[1] = coord[1].toFixed(5) + '°N';
	} else {
		coord[1] = coord[1].toFixed(5) + '°';
	}
	;
	return (coord[1] + ', ' + coord[0]);
}

