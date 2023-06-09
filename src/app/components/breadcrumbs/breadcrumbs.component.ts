import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/models/breadcrumb.interface';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  isHome = false;
  breadcrumbs$: Observable<Breadcrumb[]> | undefined; 
  
  constructor(private readonly breadcrumbService: BreadcrumbService) { 
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$; 
  } 

  ngOnInit(): void {
    this.breadcrumbs$?.subscribe(x => {
      if(x && x[0]) {
        this.isHome = x[0].label !== 'Home';
      }
    })
  }

}
