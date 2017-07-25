var viewer = new Cesium.Viewer('cesiumContainer', {
	    imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
	        url : 'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
	    }),
	    baseLayerPicker : true,
	    geocoder : true,
	    homeButton : true,
	    infoBox : true,  
	    sceneModePicker : true,  
	    selectionIndicator : true,  
	    timeline : true,  
	    navigationHelpButton : true
	    
});
 
  viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
	    url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
	    layer: "tdtAnnoLayer",
	    style: "default",
	    format: "image/jpeg",
	    tileMatrixSetID: "GoogleMapsCompatible",
	    show: false
	}));
 
 
//Load ArcticDEM terrain
  var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
      url : 'http://assets.agi.com/stk-terrain/v1/tilesets/ArticDEM/tiles',
      requestWaterMask : true,
      requestVertexNormals : true
  });
  
  viewer.terrainProvider = cesiumTerrainProviderMeshes;
  
  viewer.scene.globe.enableLighting=true;
    
