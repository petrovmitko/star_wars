import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateLoading, getCharactersData } from 'src/app/store/actions/sw.action';
import { IAppStore, selectCharacters, getLoader } from 'src/app/store/sw.store';
import { ICharacters } from 'src/app/models/characters.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  page = 1;
  
  sw$: Observable<IAppStore>;
  results$: Observable<ICharacters[]> | undefined;
  loader$ : Observable<boolean> | undefined;

  pageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor( private store: Store<{sw: IAppStore}>, 
    private swapiService: SwapiService, 
    private router: Router ) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCharactersData(`people?page=${this.page}`));

    this.results$ = this.store.select(selectCharacters);
    this.loader$ = this.store.select(getLoader);

    this.results$.subscribe(x => {
      console.log(x);
    });
  }

  getImg(x: string): string {
    return this.swapiService.getImg(x);
  }

  goToNextPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page++;
    this.store.dispatch(getCharactersData(`people?page=${this.page}`));
  }
  
  goToPrevPage(): void {
    this.store.dispatch(updateLoading(true));
    this.page--;
    this.store.dispatch(getCharactersData(`people?page=${this.page}`));
  }

  goToPage(page: number): void {
    if(page === this.page) return;
    this.store.dispatch(updateLoading(true));
    this.page = page;
    this.store.dispatch(getCharactersData(`people?page=${this.page}`));
  }

  openDetailsPage(url: string): void {
    const id = this.swapiService.getImg(url);
    this.router.navigate([`characters/${id}`]);
  }
}
