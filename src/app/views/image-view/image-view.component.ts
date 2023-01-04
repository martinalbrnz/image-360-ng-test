import { Component, HostListener } from '@angular/core';
declare let pannellum: any;

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent {

  constructor(
  ) { }
  panorama?: any
  descripcion: string = ''

  ngOnInit(): void {
    this.panorama = pannellum.viewer('panorama', {
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
              text: 'Volver al recibidor'
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
              text: 'Sala diseñada por Plakart'
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
    })
  }

  @HostListener('window:click', ['$event'])
  onClick(e: MouseEvent) {
    // console.log(this.panorama.getConfig())
    if (e.ctrlKey) {
      const [posx, posy] = this.panorama.mouseEventToCoords(e);
      // console.log({ x: posx, y: posy });
      this.panorama.addHotSpot({
        yaw: posy,
        pitch: posx,
        type: "info",
        text: "Punto de interés",
      })

    }
  }
}
