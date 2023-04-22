import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IVehicles } from 'src/app/models/vehicles.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { getCurrentVehicle, updateLoading } from 'src/app/store/actions/sw.action';
import { IAppStore, getLoader, selectVehicleData } from 'src/app/store/sw.store';

@Component({
  selector: 'app-vehicle-details-page',
  templateUrl: './vehicle-details-page.component.html',
  styleUrls: ['../character-details-page/character-details-page.component.scss']
})
export class VehicleDetailsPageComponent implements OnInit {
  
  uri?: string;
  neon = '';

  sw$: Observable<IAppStore>;
  data$: Observable<IVehicles> | undefined;
  loader$: Observable<boolean> | undefined;
  
  constructor(
    private store: Store<{sw: IAppStore}>, 
    private router: Router,
    private swapiService: SwapiService,
    ) {
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.neon = this.swapiService.getNeonClass();
    this.uri = this.router.url.split('/').pop();
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCurrentVehicle(`vehicles/${this.uri}`));

    this.data$ = this.store.select(selectVehicleData);
    this.loader$ = this.store.select(getLoader);
  }

}
