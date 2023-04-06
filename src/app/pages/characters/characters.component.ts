import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateLoading, getCharactersData } from 'src/app/store/actions/sw.action';
import { IAppStore, selectCharacters, getLoader } from 'src/app/store/sw.store';
import { ICharacters } from 'src/app/models/characters.interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  data: any;
  page = 1;
  
  sw$: Observable<IAppStore>;
  results$: Observable<ICharacters[]> | undefined;
  loader$ : Observable<boolean> | undefined;
  constructor(private commonService: CommonService, 
    private store: Store<{sw: IAppStore}>) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCharactersData(`people?page=${this.page}`));

    this.results$ = this.store.select(selectCharacters);
    this.loader$ = this.store.select(getLoader);
  }

  getImg(x: string): string {
    let strArr = x.split('/');
    return strArr[strArr.length - 2];
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
}
