import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private router: Router) { }

  getImg(x: string): string {
    let strArr = x.split('/');
    return strArr[strArr.length - 2];
  }

  openDetailsPage(url: string, component: string): void {
    const id = this.getImg(url);
    this.router.navigate([`${component}/${id}`]);
  }
  
}
