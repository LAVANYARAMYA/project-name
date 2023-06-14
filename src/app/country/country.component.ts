import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  countries:any

  constructor(private http: HttpClient, private fb: FormBuilder) {
    
  }
  searchForm=this.fb.group({
    searchField: [''],
  });

  ngOnInit()
  {
     this.searchForm
     .get('searchField')
     ?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val)=>this.search(val as string))
     )
     .subscribe((value:any)=>
     {
      this.countries=value;
     });


  

     

  }

  search(region: string)
  {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`)

    // return this.http.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=WQKKQOF5444F2H7J`)
  }
  
  
}




