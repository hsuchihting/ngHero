import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MassageService {
  message: string[] = [];
  add(message: string) {
    this.message.push(message);
  }
  clear() {
    this.message = [];
  }

  constructor() {}
}
