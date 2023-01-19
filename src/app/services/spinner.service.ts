import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

export interface MousePosition {
  posX: number
  posY: number
}

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  private mouse$ = new BehaviorSubject<MousePosition>({ posX: 0, posY: 0 })

  get mouse() {
    return this.mouse$.asObservable();
  }

  setMouse(pos: MousePosition) {
    this.mouse$.next(pos)
  }
}
