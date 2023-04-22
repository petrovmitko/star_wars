import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  neonArr = ['neon-red', 'neon-blue', 'neon-green', 'neon-purple'];

  constructor(private router: Router) { }

  getId(x: string): string {
    let strArr = x.split('/');
    return strArr[strArr.length - 2];
  }

  openDetailsPage(url: string, component: string): void {
    const id = this.getId(url);
    this.router.navigate([`${component}/${id}`]);
  }

  getNeonClass(): string {
    const randomNum = Math.floor(Math.random() * 4);
    return this.neonArr[randomNum];
  }
  
}
