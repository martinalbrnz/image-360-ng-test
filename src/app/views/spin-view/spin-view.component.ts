import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bufferCount, empty, Observable, throttleTime } from 'rxjs';
import { SpinnerDirective } from 'src/app/directives/spinner.directive';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spin-view',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerDirective,
    FormsModule,
  ],
  templateUrl: './spin-view.component.html',
  styleUrls: ['./spin-view.component.scss']
})
export class SpinViewComponent implements OnInit, AfterViewInit {

  constructor(
    private spinnerService: SpinnerService,
  ) { }

  // @ViewChild("spinner") spinner?: ElementRef

  mouse$?: Observable<unknown>

  columns = 9
  rows = 1
  height = 212
  width = 3200
  // columns = 3
  // rows = 2
  // height = 563
  // width = 1200

  aValue = 10

  valueChange(ev: any) {
    console.log(ev)
  }

  /**
   * amount of pixels u have to move in order to change img
   * counterintuitive, the higher the number, the less sensitivity
   */
  sensibility = 30
  othersensibility = 25
  moveX = 0

  currentColumn = 0
  currentRow = 0

  ngOnInit(): void {
    this.mouse$ = this.spinnerService.mouse.pipe(
      throttleTime(16),
      bufferCount(3, 1)
    )
    this.mouse$.subscribe((val: any) => {
      if (val[1].posX > val[0].posX && val[2].posX > val[1].posX) {
        this.moveX += val[2].posX - val[1].posX
        if (this.moveX >= this.sensibility) {
          this.nextCol()
          this.moveX = this.moveX % this.sensibility
          // console.log('next')
        }
      } else if (val[1].posX < val[0].posX && val[2].posX < val[1].posX) {
        this.moveX -= val[1].posX - val[2].posX
        if (Math.abs(this.moveX) >= this.sensibility) {
          this.prevCol()
          this.moveX = this.moveX % this.sensibility
          // console.log('prev')
        }
      }
      // console.log(this.moveX)
    })
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

  changeSens(val: number) {
    if (val > 0 && this.sensibility < 45) {
      this.sensibility += val
    }
    if (val < 0 && this.sensibility > 0) {
      this.sensibility += val
    }
  }

  changeSensSlider(e: number) {
    this.sensibility = 55 - e

  }

}
