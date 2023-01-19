import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpinnerDirective } from 'src/app/directives/spinner.directive';
import { SpinnerService } from 'src/app/services/spinner.service';
import { map, Observable, throttleTime} from 'rxjs'

@Component({
  selector: 'app-spin-view',
  standalone: true,
  imports: [CommonModule, SpinnerDirective],
  templateUrl: './spin-view.component.html',
  styleUrls: ['./spin-view.component.scss']
})
export class SpinViewComponent implements OnInit, AfterViewInit {

  constructor (
    private spinnerService: SpinnerService,
  ) { }

  @ViewChild("spinner") spinner?: ElementRef

  private mouse?: { posX: number, posY: number }
  private mouseClick?: { x: number, y: number, left: number, top: number }

  mouse$?: Observable<unknown>

  columns = 9
  rows = 1
  height = 212
  width = 3200
  // columns = 3
  // rows = 2
  // height = 563
  // width = 1200

  currentColumn = 0
  currentRow = 0


  ngOnInit(): void {
    this.mouse$ = this.spinnerService.mouse.pipe(
      // throttleTime(100),
    )
    this.mouse$.subscribe(val => console.log(val))
  }

  ngAfterViewInit(): void {
  }

  prevCol() {
    if (this.currentColumn < 1) {
      this.currentColumn = this.columns - 1
    } else {
      this.currentColumn -= 1
    }
  }
  nextCol() {
    if (this.currentColumn >= this.columns - 1) {
      this.currentColumn = 0
    } else {
      this.currentColumn += 1
    }
  }
  prevRow() {
    if (this.currentRow < 1) {
      this.currentRow = this.rows - 1
    } else {
      this.currentRow -= 1
    }
  }
  nextRow() {
    if (this.currentRow >= this.rows - 1) {
      this.currentRow = 0
    } else {
      this.currentRow += 1
    }
  }

}
