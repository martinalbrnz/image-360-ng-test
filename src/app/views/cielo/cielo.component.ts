import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewHotspotComponent } from '../image-view/new-hotspot/new-hotspot.component';
import { panoramas } from './cieloMock';
declare let pannellum: any;

@Component({
  selector: 'app-cielo',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './cielo.component.html',
  styleUrls: ['./cielo.component.scss']
})
export class CieloComponent implements OnInit {
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
