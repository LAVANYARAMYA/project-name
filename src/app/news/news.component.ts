import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

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
    
  });

  ngOnInit()
  {
     this.searchForm
     .get('country')
     ?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val)=>this.search(val as string))
     )
     .subscribe((value:any)=>
     {
      this.countries=value.articles;
     });
  }

  search(country: string)
  {
    

    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7a208414c9a04a2c9248dff00c27151d`)
  }
  

}
