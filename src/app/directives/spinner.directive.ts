import { Directive, HostListener } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Directive({
  selector: '[appSpinner]',
  standalone: true
})
export class SpinnerDirective {

  constructor(
    private spinnerService: SpinnerService,
  ) { }

  @HostListener("mousemove", ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.buttons === 1) {
      this.spinnerService.setMouse({ posX: event.clientX, posY: event.clientY })
    }
  }
}
