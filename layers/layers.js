var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: 'lab 1',
                interactive: true,
                title: '<img src="styles/legend/lab1_1.png" /> lab 1'
            });
var format_lab1lab_1_2 = new ol.format.GeoJSON();
var features_lab1lab_1_2 = format_lab1lab_1_2.readFeatures(json_lab1lab_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1lab_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1lab_1_2.addFeatures(features_lab1lab_1_2);
var lyr_lab1lab_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1lab_1_2, 
                style: style_lab1lab_1_2,
                popuplayertitle: 'lab 1 — lab_1',
                interactive: true,
                title: '<img src="styles/legend/lab1lab_1_2.png" /> lab 1 — lab_1'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });
var format_building_7 = new ol.format.GeoJSON();
var features_building_7 = format_building_7.readFeatures(json_building_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_7.addFeatures(features_building_7);
var lyr_building_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_7, 
                style: style_building_7,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_7.png" /> building'
            });
var format_building_8 = new ol.format.GeoJSON();
var features_building_8 = format_building_8.readFeatures(json_building_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_8.addFeatures(features_building_8);
var lyr_building_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_8, 
                style: style_building_8,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_8.png" /> building'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_lab1lab_1_2.setVisible(true);lyr_building_3.setVisible(true);lyr_highway_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_building_7.setVisible(true);lyr_building_8.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_lab1_1,lyr_lab1lab_1_2,lyr_building_3,lyr_highway_4,lyr_highway_5,lyr_highway_6,lyr_building_7,lyr_building_8];
lyr_lab1_1.set('fieldAliases', {'name': 'name', });
lyr_lab1lab_1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tower:type': 'tower:type', 'tourism': 'tourism', 'start_date': 'start_date', 'man_made': 'man_made', 'historic': 'historic', 'fee': 'fee', 'entrance': 'entrance', 'amenity': 'amenity', });
lyr_highway_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'traffic_calming': 'traffic_calming', 'crossing': 'crossing', 'shelter': 'shelter', 'public_transport': 'public_transport', 'bus': 'bus', 'distance': 'distance', 'direction': 'direction', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'place': 'place', 'addr:subdistrict': 'addr:subdistrict', 'addr:district': 'addr:district', 'barrier': 'barrier', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:region': 'addr:region', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'traffic_sign:direction': 'traffic_sign:direction', 'traffic_sign': 'traffic_sign', 'name': 'name', 'railway': 'railway', });
lyr_highway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'footway': 'footway', 'crossing': 'crossing', 'service': 'service', 'living_street': 'living_street', 'layer': 'layer', 'bridge': 'bridge', 'official_name': 'official_name', 'name:etymology:wikidata': 'name:etymology:wikidata', 'turn:lanes': 'turn:lanes', 'surface': 'surface', 'source:maxspeed': 'source:maxspeed', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'footway': 'footway', 'crossing': 'crossing', 'service': 'service', 'living_street': 'living_street', 'layer': 'layer', 'bridge': 'bridge', 'official_name': 'official_name', 'name:etymology:wikidata': 'name:etymology:wikidata', 'turn:lanes': 'turn:lanes', 'surface': 'surface', 'source:maxspeed': 'source:maxspeed', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_building_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'start_date': 'start_date', 'roof:shape': 'roof:shape', 'energy_class': 'energy_class', 'building:levels:underground': 'building:levels:underground', 'building:flats': 'building:flats', 'addr:postcode': 'addr:postcode', 'addr:country': 'addr:country', 'religion': 'religion', 'denomination': 'denomination', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'source:addr': 'source:addr', 'leisure': 'leisure', 'shop': 'shop', 'operator': 'operator', 'opening_hours': 'opening_hours', 'office': 'office', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'amenity': 'amenity', 'building:levels': 'building:levels', 'tourism': 'tourism', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'type': 'type', });
lyr_building_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'start_date': 'start_date', 'roof:shape': 'roof:shape', 'energy_class': 'energy_class', 'building:levels:underground': 'building:levels:underground', 'building:flats': 'building:flats', 'addr:postcode': 'addr:postcode', 'addr:country': 'addr:country', 'religion': 'religion', 'denomination': 'denomination', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'source:addr': 'source:addr', 'leisure': 'leisure', 'shop': 'shop', 'operator': 'operator', 'opening_hours': 'opening_hours', 'office': 'office', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'amenity': 'amenity', 'building:levels': 'building:levels', 'tourism': 'tourism', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'type': 'type', 'address': 'address', });
lyr_lab1_1.set('fieldImages', {'name': 'TextEdit', });
lyr_lab1lab_1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tower:type': '', 'tourism': '', 'start_date': '', 'man_made': '', 'historic': '', 'fee': '', 'entrance': '', 'amenity': '', });
lyr_highway_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'traffic_calming': '', 'crossing': '', 'shelter': '', 'public_transport': '', 'bus': '', 'distance': '', 'direction': '', 'wikipedia': '', 'wikidata': '', 'place': '', 'addr:subdistrict': '', 'addr:district': '', 'barrier': '', 'amenity': '', 'addr:street': '', 'addr:region': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'traffic_sign:direction': '', 'traffic_sign': '', 'name': '', 'railway': '', });
lyr_highway_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'footway': 'TextEdit', 'crossing': 'TextEdit', 'service': 'TextEdit', 'living_street': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'official_name': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'turn:lanes': 'TextEdit', 'surface': 'TextEdit', 'source:maxspeed': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', });
lyr_highway_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'footway': '', 'crossing': '', 'service': '', 'living_street': '', 'layer': '', 'bridge': '', 'official_name': '', 'name:etymology:wikidata': '', 'turn:lanes': '', 'surface': '', 'source:maxspeed': '', 'ref': '', 'oneway': '', 'name': '', 'maxspeed': '', 'lanes': '', });
lyr_building_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'start_date': '', 'roof:shape': '', 'energy_class': '', 'building:levels:underground': '', 'building:flats': '', 'addr:postcode': '', 'addr:country': '', 'religion': '', 'denomination': '', 'wikipedia': '', 'wikidata': '', 'source:addr': '', 'leisure': '', 'shop': '', 'operator': '', 'opening_hours': '', 'office': '', 'contact:website': '', 'contact:phone': '', 'contact:email': '', 'amenity': '', 'building:levels': '', 'tourism': '', 'name': '', 'addr:street': '', 'addr:housenumber': '', 'addr:city': '', 'type': '', });
lyr_building_8.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'start_date': 'TextEdit', 'roof:shape': 'TextEdit', 'energy_class': 'TextEdit', 'building:levels:underground': 'TextEdit', 'building:flats': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:country': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'source:addr': 'TextEdit', 'leisure': 'TextEdit', 'shop': 'TextEdit', 'operator': 'TextEdit', 'opening_hours': 'TextEdit', 'office': 'TextEdit', 'contact:website': 'TextEdit', 'contact:phone': 'TextEdit', 'contact:email': 'TextEdit', 'amenity': 'TextEdit', 'building:levels': 'TextEdit', 'tourism': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', 'address': '', });
lyr_lab1_1.set('fieldLabels', {'name': 'no label', });
lyr_lab1lab_1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tower:type': 'no label', 'tourism': 'no label', 'start_date': 'no label', 'man_made': 'no label', 'historic': 'no label', 'fee': 'no label', 'entrance': 'no label', 'amenity': 'no label', });
lyr_highway_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'traffic_calming': 'no label', 'crossing': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'distance': 'no label', 'direction': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'place': 'no label', 'addr:subdistrict': 'no label', 'addr:district': 'no label', 'barrier': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:region': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'traffic_sign:direction': 'no label', 'traffic_sign': 'no label', 'name': 'no label', 'railway': 'no label', });
lyr_highway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'footway': 'no label', 'crossing': 'no label', 'service': 'no label', 'living_street': 'no label', 'layer': 'no label', 'bridge': 'no label', 'official_name': 'no label', 'name:etymology:wikidata': 'no label', 'turn:lanes': 'no label', 'surface': 'no label', 'source:maxspeed': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'footway': 'no label', 'crossing': 'no label', 'service': 'no label', 'living_street': 'no label', 'layer': 'no label', 'bridge': 'no label', 'official_name': 'no label', 'name:etymology:wikidata': 'no label', 'turn:lanes': 'no label', 'surface': 'no label', 'source:maxspeed': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_building_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'start_date': 'no label', 'roof:shape': 'no label', 'energy_class': 'no label', 'building:levels:underground': 'no label', 'building:flats': 'no label', 'addr:postcode': 'no label', 'addr:country': 'no label', 'religion': 'no label', 'denomination': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'source:addr': 'no label', 'leisure': 'no label', 'shop': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'office': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'amenity': 'no label', 'building:levels': 'no label', 'tourism': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'type': 'no label', });
lyr_building_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'start_date': 'no label', 'roof:shape': 'no label', 'energy_class': 'no label', 'building:levels:underground': 'no label', 'building:flats': 'no label', 'addr:postcode': 'no label', 'addr:country': 'no label', 'religion': 'no label', 'denomination': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'source:addr': 'no label', 'leisure': 'no label', 'shop': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'office': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'amenity': 'no label', 'building:levels': 'no label', 'tourism': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'type': 'no label', 'address': 'no label', });
lyr_building_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});