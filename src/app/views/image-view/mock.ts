export const panoramas_1 = [{
		autoLoad: true,
		default: {
			firstScene: 'receiver',
		},
		scenes: {
			designed: {
				type: 'equirectangular',
				panorama: 'assets/img/360-1.jpg',
				hotSpots: [
					{
						pitch: 4,
						yaw: 123,
						type: 'scene',
						sceneId: 'receiver',
						text: 'Volver al recibidor',
						// cssClass: 'custom-hotspot',
					},
				]
			},
			receiver: {
				type: 'equirectangular',
				panorama: 'assets/img/306-2.jpg',
				hotSpots: [
					{
						pitch: -5,
						yaw: 93,
						type: 'scene',
						sceneId: 'designed',
						text: 'Sala diseñada por Plakart',
						// cssClass: 'custom-hotspot',
					},
					{
						pitch: -28,
						yaw: -48,
						type: "info",
						text: 'Plantas decorativas (Ficus)',
						URL: 'https://es.wikipedia.org/wiki/Ficus',
						// cssClass: 'custom-hotspot',
					},
					{
						pitch: -5,
						yaw: -3,
						type: "info",
						text: 'Sala de reuniones <img class="tooltip-image" src="assets/img/logo_pkt.webp">',
						URL: 'https://www.plakart.com.ar/',
						// cssClass: 'custom-hotspot',
					},
					{
						pitch: -7.6,
						yaw: 147.4,
						type: "info",
						text: 'Objetos decorativos - Domenica Home',
						URL: 'https://www.instagram.com/elmundodedomenica/',
						// cssClass: 'custom-hotspot',
					},
					{
						pitch: 27.9,
						yaw: -38.4,
						type: "info",
						text: 'Iluminación <img class="tooltip-image" src="assets/img/logo_serra.png">',
						URL: 'https://tienda.electricidadserra.com.ar/iluminacion',
						// cssClass: 'custom-hotspot',
					},
					{
						pitch: -18,
						yaw: 174,
						type: "info",
						text: 'Pisos PVC <img class="tooltip-image" src="assets/img/PISOS.jpg">',
						URL: 'https://pisosinnovadores.com/',
						// cssClass: 'custom-hotspot',
					},
				],
			}
		},
		// hotSpotDebug: true
	}, {
		autoLoad: true,
		default: {
			firstScene: 'middle',
		},
		scenes: {
			bottom: {
				type: 'equirectangular',
				panorama: 'assets/img/interior_2.jpeg',
				hotSpots: [
					{
						pitch: 4,
						yaw: 123,
						type: 'scene',
						sceneId: 'top',
						text: 'Vista alta',
						// cssClass: 'custom-hotspot',
					},
				]
			},
			top: {
				type: 'equirectangular',
				panorama: 'assets/img/interior_1.jpeg',
				hotSpots: [
					{
						pitch: -5,
						yaw: 93,
						type: 'scene',
						sceneId: 'bottom',
						text: 'Vista baja',
						// cssClass: 'custom-hotspot',
					},
				],
			},
			middle: {
				type: 'equirectangular',
				panorama: 'assets/img/interior_3.jpeg',
				hotSpots: [
					{
						pitch: -5,
						yaw: 93,
						type: 'scene',
						sceneId: 'middle',
						text: 'Vista central',
						// cssClass: 'custom-hotspot',
					},
				],
			}
		},
		// hotSpotDebug: true
	}, {
		autoLoad: true,
		default: {
			firstScene: 'first',
		},
		scenes: {
			first: {
				type: 'equirectangular',
				panorama: 'assets/img/exterior_1.jpeg',
				hotSpots: []
			},
		},
		// hotSpotDebug: true
	}, {
		autoLoad: true,
		default: {
			firstScene: 'first',
		},
		scenes: {
			first: {
				type: 'equirectangular',
				panorama: 'assets/img/exterior_2.jpeg',
				hotSpots: [],
			},
		},
		// hotSpotDebug: true
	}
]

export const panoramas = {
	autoLoad: true,
	default: {
		firstScene: 'receiver',
	},
	scenes: {
		designed: {
			type: 'equirectangular',
			panorama: 'assets/img/360-1.jpg',
			hotSpots: [
				{
					pitch: 4,
					yaw: 123,
					type: 'scene',
					sceneId: 'receiver',
					text: 'Volver al recibidor',
					// cssClass: 'custom-hotspot',
				},
			]
		},
		receiver: {
			type: 'equirectangular',
			panorama: 'assets/img/306-2.jpg',
			hotSpots: [
				{
					pitch: -5,
					yaw: 93,
					type: 'scene',
					sceneId: 'designed',
					text: 'Sala diseñada por Plakart',
					// cssClass: 'custom-hotspot',
				},
				{
					pitch: -28,
					yaw: -48,
					type: "info",
					text: 'Plantas decorativas (Ficus)',
					URL: 'https://es.wikipedia.org/wiki/Ficus',
					// cssClass: 'custom-hotspot',
				},
				{
					pitch: -5,
					yaw: -3,
					type: "info",
					text: 'Sala de reuniones <img class="tooltip-image" src="assets/img/logo_pkt.webp">',
					URL: 'https://www.plakart.com.ar/',
					// cssClass: 'custom-hotspot',
				},
				{
					pitch: -7.6,
					yaw: 147.4,
					type: "info",
					text: 'Objetos decorativos - Domenica Home',
					URL: 'https://www.instagram.com/elmundodedomenica/',
					// cssClass: 'custom-hotspot',
				},
				{
					pitch: 27.9,
					yaw: -38.4,
					type: "info",
					text: 'Iluminación <img class="tooltip-image" src="assets/img/logo_serra.png">',
					URL: 'https://tienda.electricidadserra.com.ar/iluminacion',
					// cssClass: 'custom-hotspot',
				},
				{
					pitch: -18,
					yaw: 174,
					type: "info",
					text: 'Pisos PVC <img class="tooltip-image" src="assets/img/PISOS.jpg">',
					URL: 'https://pisosinnovadores.com/',
					// cssClass: 'custom-hotspot',
				},
				{
					pitch: 5,
					yaw: 175,
					type: 'scene',
					sceneId: 'first',
					text: 'Al exterior',
					// cssClass: 'custom-hotspot',
				},
			],
		},
		first: {
			type: 'equirectangular',
			panorama: 'assets/img/exterior_1.jpeg',
			hotSpots: [
				{
					pitch: 0,
					yaw: 0,
					type: 'scene',
					sceneId: 'second',
					text: 'Vista exterior 2',
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
					sceneId: 'top',
					text: 'Vista interior',
					// cssClass: 'custom-hotspot',
				},
			],
		},
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
					yaw: 0,
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
					sceneId: 'receiver',
					text: 'Volver al recibidor',
					// cssClass: 'custom-hotspot',
				},
			]
		},
	},
	// hotSpotDebug: true
}
