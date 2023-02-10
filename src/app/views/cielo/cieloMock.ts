export const panoramas = {
	autoLoad: true,
	default: {
		firstScene: 'first',
	},
	scenes: {
		first: {
			type: 'equirectangular',
			panorama: 'assets/img/exterior_1.jpeg',
			hotSpots: [
				{
					pitch: 0,
					yaw: 0,
					type: 'scene',
					sceneId: 'second',
					text: 'Segunda imagen del cielo',
					// cssClass: 'custom-hotspot',
				},
			]
		},
		second: {
			type: 'equirectangular',
			panorama: 'assets/img/exterior_2.jpeg',
			hotSpots: [
				{
					pitch: 0,
					yaw: 0,
					type: 'scene',
					sceneId: 'first',
					text: 'Primera imagen del cielo',
					// cssClass: 'custom-hotspot',
				},
			],
		},
	},
	// hotSpotDebug: true
}
