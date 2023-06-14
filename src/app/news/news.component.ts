import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  countries:any

  constructor(private http: HttpClient, private fb: FormBuilder) {
    
  }
  searchForm=this.fb.group({
    country: [''],
    category: ['']
    
  });

  ngOnInit()
  {

    const countryControl = this.searchForm.get('country');
    const categoryControl = this.searchForm.get('category');


    if(countryControl && categoryControl ){
    combineLatest([countryControl.valueChanges, categoryControl.valueChanges])
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(([country, category]) => this.search(country as string, category as string))
    )
    .subscribe((value: any) => {
      this.countries = value.articles;
    });

    //  this.searchForm
    //  .get('country')
    //  ?.valueChanges.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap((val)=>this.search(val as string))
    //  )
    //  .subscribe((value:any)=>
    //  {
    //   this.countries=value.articles;
    //  });
  }
}

  search(country1: string, category: string)
  {
    

    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country1}&category=${category}&apiKey=7a208414c9a04a2c9248dff00c27151d`)
  }
  

}
