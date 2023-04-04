import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateLoading, getCharactersData } from 'src/app/store/actions/sw.action';
import { IAppStore } from 'src/app/store/sw.store';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  data: any;
  page = 1;
  
  sw$: Observable<IAppStore>;
  
  constructor(private commonService: CommonService, 
    private store: Store<{sw: IAppStore}>) { 
    this.sw$ = store.select('sw');
  }

  ngOnInit(): void {
    // this.getCharactersData('1');
    this.store.subscribe(x => console.log(x));

    this.store.dispatch(updateLoading(true));
    this.store.dispatch(getCharactersData(`people?page=${this.page}`));

    // next => create selector and get data from store and show it !!!
    // create loader component
  }

  getCharactersData(page: string): void {
    this.commonService.getPeople(`people?page=${page}`).subscribe((x: any) => {
      console.log(x);
      this.data = x.results.map((item: any) => {
        return { name: item.name, img: this.getImg(item.url), url: item.url}
      });
    });
  }

  getImg(x: string): string {
    let strArr = x.split('/');
    return strArr[strArr.length - 2];
  }

  goToNextPage(): void {
    this.page++;
    this.getCharactersData(String(this.page));
  }
  
  goToPrevPage(): void {
    this.page--;
    this.getCharactersData(String(this.page));
  }
}
