import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IVehicles } from 'src/app/models/vehicles.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getVehiclesData, updateLoading, updateVehiclesPage } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, getVehiclesPage, selectVehicles } from 'src/app/store/sw.store';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['../characters/characters.component.scss']
})
export class VehiclesComponent implements OnInit {

  page = 1;
  pageArray = [1, 2, 3, 4];

  sw$: Observable<IAppStore>;
  results$: Observable<IVehicles[]> | undefined;
  loader$ : Observable<boolean> | undefined;

  constructor( private store: Store<{sw: IAppStore}>, private swapiService: SwapiService) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.select(getVehiclesPage).subscribe((x: number) => this.page = x);
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getVehiclesData(`vehicles?page=${this.page}`));

    this.results$ = this.store.select(selectVehicles);
    this.loader$ = this.store.select(getLoader);
  }

  getId(x: string): string {
    return this.swapiService.getId(x);
  }

  goToNextPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page++;
    this.store.dispatch(updateVehiclesPage(this.page));
    this.store.dispatch(getVehiclesData(`vehicles?page=${this.page}`));
  }
  
  goToPrevPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page--;
    this.store.dispatch(updateVehiclesPage(this.page));
    this.store.dispatch(getVehiclesData(`vehicles?page=${this.page}`));
  }

  goToPage(page: number): void {
    if(page === this.page) return;
    this.store.dispatch(updateLoading(true));
    this.page = page;
    this.store.dispatch(updateVehiclesPage(this.page));
    this.store.dispatch(getVehiclesData(`vehicles?page=${this.page}`));
  }

  openDetailsPage(url: string): void {
    this.swapiService.openDetailsPage(url, 'vehicles');
  }
}
