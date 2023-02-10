import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { panoramas } from './favoritaMocks';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewHotspotComponent } from '../image-view/new-hotspot/new-hotspot.component';
declare let pannellum: any;

@Component({
  selector: 'app-la-favorita',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './la-favorita.component.html',
  styleUrls: ['./la-favorita.component.scss']
})
export class LaFavoritaComponent {
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
