import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss']
})
export class CardMainComponent implements OnInit {
  @Input() img?: string;
  @Input() title?: string;
  @Input() url?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
