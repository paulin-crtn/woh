import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { COUNTRIES_LIST } from '../../core/country/countries.data';
import { Country } from 'src/app/core/country/country';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchValue: string = '';
  countriesList: Country[] = COUNTRIES_LIST;
  countriesFiltered: Country[]  = [];
  searchActive: Boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  applyCountry(country: Country) {
    this.router.navigate(['experiences'], {queryParams: {country: country.alpha3}})
    // this.closeList();
    // this.countriesFiltered = [country];
  }

  closeList() {
    this.searchActive = false;
  }

  searchCountry(event: any) {
    this.searchValue = event.target.value.toLowerCase();
    this.countriesFiltered = this.countriesList.filter(country => country.name.toLowerCase().includes(this.searchValue));
  }

}
