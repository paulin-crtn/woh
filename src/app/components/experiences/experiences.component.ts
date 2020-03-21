import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Country } from '../../core/country/country';
import { COUNTRIES_LIST } from '../../core/country/countries.data';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  searchValue: string = '';
  // TO DO : IMPORT REAL COUNTRIES DATA
  countriesList: Country[] = COUNTRIES_LIST;
  countriesFiltered: Country[]  = [];
  searchActive: Boolean = false;
  selectedCategories: string[] = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle('Search and find the travel experience that suits you | Worldhelpers');
    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: ''});
    // RETRIEVE COUNTRY FROM URL
    this.route.queryParams.subscribe(params => {
      const indexSearchValue = COUNTRIES_LIST.findIndex(country => country.alpha3 === params['country']);
      if (indexSearchValue !== -1) {
        this.countriesFiltered = [COUNTRIES_LIST[indexSearchValue]];
        this.searchValue = this.countriesFiltered[0].name;
      } else {
        this.countriesFiltered = [];
        this.searchValue = '';
      }
      // TO DO : Call service, load & display data
    });
    // RETRIEVE CATEGORIES URL
    this.route.queryParams.subscribe(params => {
      this.selectedCategories = params['categories'] ? params['categories'].split(',') : [];
      console.log(this.selectedCategories.toString());
      // TO DO : Call service, load & display data
    });
  }

  applyCategory(filter: string) {
    const index = this.selectedCategories.indexOf(filter);
    if (index === -1) {
      this.selectedCategories.push(filter);
    } else {
      this.selectedCategories.splice(index, 1);
    }
    this.updateQueryParams();
  }

  applyCountry(country: Country) {
    this.closeList();
    this.countriesFiltered = [country];
    this.updateQueryParams();
  }

  closeList() {
    this.searchActive = false;
  }

  resetSearch() {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {}});
  }

  searchCountry(event: any) {
    this.searchValue = event.target.value.toLowerCase();
    this.countriesFiltered = this.countriesList.filter(country => country.name.toLowerCase().includes(this.searchValue));
  }

  updateQueryParams() {
    if (this.countriesFiltered.length && this.selectedCategories.length) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        country: this.countriesFiltered[0].alpha3,
        categories: this.selectedCategories.toString(),
      }});
    } else if (this.countriesFiltered.length && !this.selectedCategories.length) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        country: this.countriesFiltered[0].alpha3,
      }});
    } else {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        categories: this.selectedCategories.toString(),
      }});
    }
  }

}
