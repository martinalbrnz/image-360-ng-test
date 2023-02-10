export const panoramas = {
autoLoad: true,
default: {
	firstScene: 'top',
},
scenes: {

	top: {
		type: 'equirectangular',
		panorama: 'assets/img/interior_1.jpeg',
		hotSpots: [
			{
				pitch: -5,
				yaw: 0,
				type: 'scene',
				sceneId: 'middle',
				text: 'Vista media',	
				// cssClass: 'custom-hotspot',
			},
		],
	},
	middle: {
		type: 'equirectangular',
		panorama: 'assets/img/interior_3.jpeg',
		hotSpots: [
			{
				pitch: 0,
				yaw: -20,
				type: 'scene',
				sceneId: 'top',
				text: 'Vista alta',
				// cssClass: 'custom-hotspot',
			},
			{
				pitch: 0,
				yaw: 20,
				type: 'scene',
				sceneId: 'bottom',
				text: 'Vista baja',
				// cssClass: 'custom-hotspot',
			},
		],
	},
	bottom: {
		type: 'equirectangular',
		panorama: 'assets/img/interior_2.jpeg',
		hotSpots: [
			{
				pitch: -5,
				yaw: 20,
				type: 'scene',
				sceneId: 'middle',
				text: 'Vista media',
				// cssClass: 'custom-hotspot',
			},
		]
	},
},
// hotSpotDebug: true
}
