import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [
    {img: 'darth-vader-m.jpg', title: 'characters', url: 'characters'},
    {img: 'poster-m.jpeg', title: 'FILMS', url: 'films'},
    {img: 'yoda-m.jpg', title: 'species', url: 'species'},
    {img: 'spaceship-m.jpg', title: 'starships', url: 'starships'},
    {img: 'at-at-m.jpg', title: 'vehicles', url: 'vehicles'},
    {img: 'planet-m.jpg', title: 'planets', url: 'planets'},
  ];
  activatedRoute: ActivatedRoute | null | undefined;

  constructor(private router: Router, private route: ActivatedRoute, ) {}

  ngOnInit(): void {}

  goTo(x: string ): void {
    const route: string = '/home/' + x; 
    this.router.navigate([route]);
  }
}
