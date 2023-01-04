import { Component, HostListener } from '@angular/core';
declare let pannellum: any;

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent {

  constructor (
    
  ) { }
  panorama?: any
  descripcion: string = ''

  ngOnInit(): void {
    this.panorama = pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: '../../assets/img/pano_7000.jpg',
      hotSpots: [
        {
          yaw: 0,
          pitch: 0,
          type: "info",
          text: "Punto de interés",
          cssClass: 'card pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-tooltip',
        }
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
