
/**
 * define all layers
 */
/*
var boundary_admin_2_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_2',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_3_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_3',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_4_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_4',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_5_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_5',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_6_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_6',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_7_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_7',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_8_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_8',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_9_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_9',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_10_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_10',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_huge_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_huge_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_primary_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_primary_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_secondary_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_secondary_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_small_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_small_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_tertiary_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_tertiary_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_path_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_path_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var railway_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:railway_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

// // Points
var shop_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:shop_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var public_transport_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:public_transport_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var natural_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:natural_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var aeroway_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:aeroway_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var craft_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:craft_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

// // Polygons
var building_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:building_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var natural_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:natural_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var military_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:military_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var waterway_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:waterway_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var geological_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:geological_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var aeroway_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:aeroway_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var emergency_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:emergency_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var landuse_brown = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_brown',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_commercialetc = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_commercialetc',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_freegreenandwood = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_freegreenandwood',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_gardeningandfarm = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_gardeningandfarm',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_grey = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_grey',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_industrial = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_industrial',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_military = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_military',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_residentialetc = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_residentaletc',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_transport = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_transport',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_water = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_water',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

// Polygon-Label

var building_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:building_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var natural_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:natural_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var military_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:military_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var waterway_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:waterway_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var geological_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:geological_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var aeroway_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:aeroway_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var emergency_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:emergency_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var landuse_brown_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_brown_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_commercialetc_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_commercialetc_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_freegreenandwood_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_freegreenandwood_label_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_gardeningandfarm_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_gardeningandfarm_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_grey_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_grey_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_industrial_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_industrial_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_military_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_military_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_residentialetc_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_residentaletc_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_transport_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_transport_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var landuse_water_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://141.45.146.200:8585/geoserver/geotest/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_water_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
*/
var time = '2020-5-13T18:00:00.0Z';

var projExtent = ol.proj.get('EPSG:3857').getExtent();
var startResolution = ol.extent.getWidth(projExtent) / 256; 
	console.log("startResolution:", startResolution);
var resolutions = new Array(18);
for (var i = 0, ii = resolutions.length; i < ii; ++i) {
    resolutions[i] = startResolution / Math.pow(2, i);
}
var tileGrid = new ol.tilegrid.TileGrid({        
	extent: projExtent,
    resolutions: resolutions.slice(1),
    tileSize: [256, 256]
});

// one month ago today - because database is not up-to-date daily
//var time = [d.getFullYear(), d.getMonth(), d.getDate()];

var test_tile = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://ohm.f4.htw-berlin.de:8585/geoserver/berlinalpha/wms',
		params: {
			'TILED':'TRUE',
			'LAYERS': 'berlinalpha:berlinalpha',
			'FORMAT': 'image/png',
			'VERSION': '1.1.1',
			'TIME': time,
			'TRANSPARENT': 'true'
				
		},
		serverType: 'geoserver',
		tileGrid : tileGrid
	}),
	extent: projExtent
});

let vector = new ol.layer.Vector({
	source: new ol.source.Vector(),
	style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol.style.Stroke({
        color: '#ffcc33',
        width: 2
      }),
    })
});

/**
 * layers into layer-group
 */

var layers = new ol.layer.Group({
	layers: [test_tile, vector]
})
