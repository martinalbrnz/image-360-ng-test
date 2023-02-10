import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { panoramas } from './mock';
import { NewHotspotComponent } from './new-hotspot/new-hotspot.component';
declare let pannellum: any;

@Component({
  selector: 'app-image-view',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent {

  constructor(
    public dialog: MatDialog,
  ) { }
  panorama?: any

  ngOnInit(): void {
    this.panorama = pannellum.viewer('panorama', panoramas);
  }

  @HostListener('window:click', ['$event'])
  onClick(e: MouseEvent) {
    if (e.ctrlKey) {
      const [posx, posy] = this.panorama.mouseEventToCoords(e);

      const dialogRef = this.dialog.open(NewHotspotComponent)

      dialogRef.afterClosed().subscribe(res => {
        /**
         * TODO: Should add API call to create/update
         * TODO: Should add img upload here
         * TODO: Edit and delete a Hotspot
         */
        if (res) {
          this.panorama.addHotSpot({
            yaw: posy,
            pitch: posx,
            type: "info",
            text: res,
          })
        }
      })
    }
  }
}
