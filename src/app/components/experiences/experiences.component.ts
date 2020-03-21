import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  searchValue: string = '';
  // TO DO : IMPORT REAL COUNTRIES DATA
  countriesList: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
  countriesFiltered: string[]  = [];
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
    // Retrieve country from URL
    this.route.queryParams.subscribe(params => {
      this.searchValue = params['country'] ? params['country'] : '';
      console.log(params['country']);
      // TO DO : Call service, load & display data
    });
    // Retrieve category from URL
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

  applyCountry(country: string) {
    this.closeList();
    this.countriesFiltered = [country];
    this.updateQueryParams();
  }

  closeList() {
    this.searchActive = false;
  }

  searchCountry(event: any) {
    this.searchValue = event.target.value.toLowerCase();
    this.countriesFiltered = this.countriesList.filter(country => country.toLowerCase().includes(this.searchValue));
  }

  updateQueryParams() {
    if (this.countriesFiltered && this.selectedCategories.length) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        country: this.countriesFiltered,
        categories: this.selectedCategories.toString(),
      }});
    } else if (this.countriesFiltered && !this.selectedCategories.length) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        country: this.countriesFiltered,
      }});
    } else {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        categories: this.selectedCategories.toString(),
      }});
    }
  }

}
