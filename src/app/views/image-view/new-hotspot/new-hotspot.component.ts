import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-hotspot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './new-hotspot.component.html',
  styleUrls: ['./new-hotspot.component.scss']
})
export class NewHotspotComponent {
  text = ''

  constructor(
    public dialogRef: MatDialogRef<NewHotspotComponent>,
  ) { }

  closeModal(event?: KeyboardEvent) {
    if (event && event.key != 'Enter') return
    this.dialogRef.close(this.text)
  }
}
