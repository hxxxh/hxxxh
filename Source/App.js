var viewer = new Cesium.Viewer('cesiumContainer', {
	    imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
	        url : 'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
	    }),
	    baseLayerPicker : false,
	    geocoder : true,
	    homeButton : true,
	    infoBox : true,  
	    sceneModePicker : true,  
	    selectionIndicator : true,  
	    timeline : true,  
	    navigationHelpButton : true
	    
});
  //viewer.extend(Cesium.viewerCesiu mNavigationMixin, {});
  /*
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
     
  
  var viewer = new Cesium.Viewer('cesiumContainer', {
	    imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
	        url : '	http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer'
	    }),
	    baseLayerPicker : true,
	    geocoder : true,
	    homeButton : true,
	    infoBox : true,  
	    sceneModePicker : true,  
	    selectionIndicator : true,  
	    timeline : true,  
	    navigationHelpButton : true,
	    selectionIndicator:true, 
	    vrButton:true,
	   
});
  var viewer = new Cesium.Viewer("cesiumContainer", {
	    animation: true,  //�Ƿ���ʾ�����ؼ�
	    baseLayerPicker: true, //�Ƿ���ʾͼ��ѡ��ؼ�
	    geocoder: true, //�Ƿ���ʾ�������ҿؼ�
	    timeline: true, //�Ƿ���ʾʱ���߿ؼ�
	    sceneModePicker: true, //�Ƿ���ʾͶӰ��ʽ�ؼ�
	    navigationHelpButton: true, //�Ƿ���ʾ������Ϣ�ؼ�
	    infoBox: true,  //�Ƿ���ʾ���Ҫ��֮����ʾ����Ϣ
	    imageryProvider : new Cesium.WebMapTileServiceImageryProvider({
	        url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
	        layer: "tdtVecBasicLayer",
	        style: "default",
	        format: "image/jpeg",
	        tileMatrixSetID: "GoogleMapsCompatible",
	        show: false
	    })
	});
  var purpleArrow = viewer.entities.add({
	    name : 'Purple straight arrow at height',
	    polyline : {
	        positions : Cesium.Cartesian3.fromDegreesArrayHeights([116, 39, 500000,
	                                                               116, 39.5, 500000]),
	        width : 10,
	        followSurface : false,
	        material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
	    }
	});
  //�����
  var entity = viewer.entities.add({
	  polyline : {
	    positions : Cesium.Cartesian3.fromDegreesArray([116, 39,116.2, 39.5,116.4, 39.4,116.5, 39.8,116.1, 39.5,116.3, 39.5,116.9, 39.15]),
	    width : 10,
	    material : new Cesium.PolylineGlowMaterialProperty({
			glowPower : 0.1,
			color : Cesium.Color.YELLOW
		})
	  }
	});

  viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
	    url: "http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
	    layer: "tdtAnnoLayer",
	    style: "default",
	    format: "image/jpeg",
	    tileMatrixSetID: "GoogleMapsCompatible"
	}));
  */
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
    
  //�����	
  var entity = viewer.entities.add({
	  polyline : {
	    positions : Cesium.Cartesian3.fromDegreesArray([116, 39,116.2, 39.5,116.4, 39.4,116.5, 39.8,116.1, 39.5,116.3, 39.5,116.9, 39.15]),
	    width : 10,
	    material : new Cesium.PolylineGlowMaterialProperty({
			glowPower : 0.2,
			color : Cesium.Color.BLUE
		})
	  }
	});
