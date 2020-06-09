


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
	projection : 'EPSG:4326',
	center : ol.proj.transform([ 13.51370, 52.46 ], 'EPSG:4326', 'EPSG:4326'),
	zoom : 14
});

/** * map ** */
var map = new ol.Map({
	layers :  layers,
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
	console.log(map.getView().calculateExtent(map.getSize()));
	var coordinates = map.getView().calculateExtent(map.getSize());
	document.getElementById('max-lat').value = parseFloat(coordinates[3]).toFixed(6);
	document.getElementById('min-lat').value = parseFloat(coordinates[1]).toFixed(6);
	
	document.getElementById('max-lon').value = parseFloat(coordinates[2]).toFixed(6);
	document.getElementById('min-lon').value = parseFloat(coordinates[0]).toFixed(6);

}

/*  */
this.map.on('moveend', moveend())



/* Drawing Feature for Export */
var draw; // global so we can remove it later
function addInteraction() {
    draw = new ol.interaction.Draw({
      source: layers.getLayers().get("vector"),
      type: "Polygon"
    });

	draw.on('drawend', function(evt) { 
		var coordinates = evt.feature.getGeometry().getCoordinates();
		console.log(coordinates);
		map.removeInteraction(draw)
	});

    map.addInteraction(draw);
}



