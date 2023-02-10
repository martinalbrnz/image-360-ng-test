import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-picking',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './image-picking.component.html',
  styleUrls: ['./image-picking.component.scss']
})
export class ImagePickingComponent {

}
