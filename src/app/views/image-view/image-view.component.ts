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
      type: 'equirectangular',
      panorama: 'assets/img/306-2.jpg',
      hotSpots: [
        {
          pitch: -28,
          yaw: -48,
          type: "info",
          text: "Plantas decorativas (Ficus)",
          URL: 'https://es.wikipedia.org/wiki/Ficus',
          // cssClass: 'card pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-tooltip',
        },
        {
          pitch: -28,
          yaw: 48,
          type: "info",
          text: "Plantas decorativas (Ficus)",
          URL: 'https://es.wikipedia.org/wiki/Ficus',
          // cssClass: 'card pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-tooltip',
        },
        {
          pitch: 23,
          yaw: -147.5,
          type: "info",
          text: "Iluminación",
          URL: 'https://tienda.electricidadserra.com.ar/iluminacion',
          // cssClass: 'card pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-tooltip',
        },
        {
          pitch: 22,
          yaw: 146,
          type: "info",
          text: "Objetos decorativos - Domenica Home",
          URL: 'https://www.instagram.com/elmundodedomenica/',
          // cssClass: 'card pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-tooltip',
        },
        {
          pitch: -18,
          yaw: 174,
          type: "info",
          text: "Pisos PVC",
          URL: 'https://pisosinnovadores.com/',
          // cssClass: 'card pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-tooltip',
        },
        {
          pitch: -5,
          yaw: -3,
          type: "info",
          text: "Sala de reuniones",
          URL: 'https://www.plakart.com.ar/',
          // cssClass: 'card pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-tooltip',
        },
      ],
      // hotSpotDebug: true
    })
  }

  @HostListener('window:click', ['$event'])
  onClick(e: MouseEvent) {
    if (e.ctrlKey) {
      const [posx, posy] = this.panorama.mouseEventToCoords(event);
      console.log({ x: posx, y: posy });
      console.log(e.pageX);
      this.panorama.addHotSpot({
        yaw: posy,
        pitch: posx,
        type: "info",
        text: "Punto de interés",
      })
    }
  }
}
